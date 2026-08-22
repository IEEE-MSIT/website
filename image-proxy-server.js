const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();
const PORT = process.env.PORT || 5000;

// Security validation - only allow Google Drive and common image domains
const ALLOWED_DOMAINS = [
  'drive.google.com',
  'drive.usercontent.google.com',
  'docs.google.com',
  'lh3.googleusercontent.com',
  'lh4.googleusercontent.com',
  'lh5.googleusercontent.com',
  'lh6.googleusercontent.com'
];

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
    return;
  }
  
  next();
});

// Validate URL security
function isValidUrl(url) {
  try {
    const urlObj = new URL(url);
    return ALLOWED_DOMAINS.includes(urlObj.hostname);
  } catch {
    return false;
  }
}

// Get content type from response headers and url
function getContentType(headers, targetUrl) {
  const contentType = headers.get('content-type');
  if (contentType) return contentType;
  
  // Fallback to common image types based on URL
  const url = (targetUrl || '').toLowerCase();
  if (url.includes('.jpg') || url.includes('.jpeg')) return 'image/jpeg';
  if (url.includes('.png')) return 'image/png';
  if (url.includes('.gif')) return 'image/gif';
  if (url.includes('.webp')) return 'image/webp';
  
  return 'image/jpeg'; // Default fallback
}

// Safe fetch function that validates redirect locations to prevent SSRF
async function safeFetch(url, options, depth = 0) {
  if (depth > 5) {
    throw new Error('Too many redirects');
  }
  
  const response = await fetch(url, {
    ...options,
    redirect: 'manual'
  });
  
  if (response.status >= 300 && response.status < 400) {
    const location = response.headers.get('location');
    if (!location) {
      return response;
    }
    
    // Resolve relative redirects against the current URL
    const resolvedUrl = new URL(location, url).toString();
    if (!isValidUrl(resolvedUrl)) {
      throw new Error('Redirect to non-permitted domain is blocked');
    }
    
    return safeFetch(resolvedUrl, options, depth + 1);
  }
  
  return response;
}

// Main image proxy endpoint
app.get('/image', async (req, res) => {
  const { url } = req.query;
  
  // Validate input
  if (!url) {
    return res.status(400).json({ 
      error: 'Missing required parameter: url' 
    });
  }
  
  // Decode URL
  let decodedUrl;
  try {
    decodedUrl = decodeURIComponent(url);
  } catch {
    return res.status(400).json({ 
      error: 'Invalid URL encoding' 
    });
  }
  
  // Security validation
  if (!isValidUrl(decodedUrl)) {
    return res.status(403).json({ 
      error: 'URL not allowed. Only Google Drive domains are permitted.',
      allowedDomains: ALLOWED_DOMAINS 
    });
  }

  // Create timeout controller (15s timeout limit)
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000);
  
  try {
    // Fetch the image safely
    const response = await safeFetch(decodedUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'image/*',
        'Accept-Encoding': 'gzip, deflate, br'
      },
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      return res.status(response.status).json({ 
        error: `Failed to fetch image: ${response.statusText}`,
        status: response.status 
      });
    }

    // Size check from headers
    const contentLength = response.headers.get('content-length');
    const MAX_BYTES = 50 * 1024 * 1024; // 50MB
    if (contentLength && parseInt(contentLength, 10) > MAX_BYTES) {
      return res.status(413).json({ error: 'File size exceeds 50MB limit' });
    }
    
    // Set appropriate response headers
    const contentType = getContentType(response.headers, decodedUrl);
    res.setHeader('Content-Type', contentType);
    if (contentLength) {
      res.setHeader('Content-Length', contentLength);
    }
    res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    
    // Stream response body directly with byte limit check to prevent memory exhaustion
    let bytesRead = 0;
    response.body.on('data', (chunk) => {
      bytesRead += chunk.length;
      if (bytesRead > MAX_BYTES) {
        response.body.destroy();
        if (!res.headersSent) {
          res.status(413).json({ error: 'File size limit exceeded' });
        }
      }
    });

    response.body.pipe(res);
    
  } catch (error) {
    clearTimeout(timeoutId);
    console.error('Proxy error:', error);
    
    if (error.name === 'AbortError') {
      return res.status(504).json({ error: 'Gateway timeout: Request took longer than 15s' });
    }
    
    res.status(500).json({ 
      error: 'Internal server error while fetching image',
      details: error.message 
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ 
    error: 'Internal server error' 
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Endpoint not found',
    availableEndpoints: ['/image', '/health']
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Image proxy server running on http://localhost:${PORT}`);
});

module.exports = app;
