const express = require('express');
const fetch = require('node-fetch');
const { isValidUrl, getContentType } = require('../utils/urlValidator');

const router = express.Router();

/**
 * GET /image?url=ENCODED_URL
 * Proxy endpoint to fetch and serve external images
 */
router.get('/', async (req, res) => {
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
      allowedDomains: require('../utils/urlValidator').ALLOWED_DOMAINS 
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

module.exports = router;
