const express = require('express');
const fetch = require('node-fetch');

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

// Get content type from response headers
function getContentType(headers) {
  const contentType = headers.get('content-type');
  if (contentType) return contentType;
  
  // Fallback to common image types
  const url = headers.get('url') || '';
  if (url.includes('.jpg') || url.includes('.jpeg')) return 'image/jpeg';
  if (url.includes('.png')) return 'image/png';
  if (url.includes('.gif')) return 'image/gif';
  if (url.includes('.webp')) return 'image/webp';
  
  return 'image/jpeg'; // Default fallback
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
  
  try {
    // Fetch the image
    const response = await fetch(decodedUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'image/*',
        'Accept-Encoding': 'gzip, deflate, br'
      }
    });
    
    if (!response.ok) {
      return res.status(response.status).json({ 
        error: `Failed to fetch image: ${response.statusText}`,
        status: response.status 
      });
    }
    
    // Get image buffer
    const buffer = await response.buffer();
    
    // Set appropriate headers
    const contentType = getContentType(response.headers);
    res.setHeader('Content-Type', contentType);
    res.setHeader('Content-Length', buffer.length);
    res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    
    // Send the image
    res.send(buffer);
    
  } catch (error) {
    console.error('Proxy error:', error);
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
  console.log(`🚀 Image proxy server running on http://localhost:${PORT}`);
  console.log(`📡 Proxy endpoint: http://localhost:${PORT}/image?url=ENCODED_URL`);
  console.log(`🏥 Health check: http://localhost:${PORT}/health`);
  console.log(`🔒 CORS enabled for: http://localhost:5173`);
  console.log(`✅ Allowed domains: ${ALLOWED_DOMAINS.join(', ')}`);
});

module.exports = app;
