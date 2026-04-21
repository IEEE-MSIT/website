// Security validation for image proxy
const ALLOWED_DOMAINS = [
  'drive.google.com',
  'drive.usercontent.google.com',
  'docs.google.com',
  'lh3.googleusercontent.com',
  'lh4.googleusercontent.com',
  'lh5.googleusercontent.com',
  'lh6.googleusercontent.com'
];

/**
 * Validates if URL is from allowed domain
 * @param {string} url - The URL to validate
 * @returns {boolean} - True if URL is allowed
 */
function isValidUrl(url) {
  try {
    const urlObj = new URL(url);
    return ALLOWED_DOMAINS.includes(urlObj.hostname);
  } catch {
    return false;
  }
}

/**
 * Get content type from response headers or URL
 * @param {Headers} headers - Fetch response headers
 * @returns {string} - Content type
 */
function getContentType(headers) {
  const contentType = headers.get('content-type');
  if (contentType) return contentType;
  
  // Fallback to common image types based on URL
  const url = headers.get('url') || '';
  if (url.includes('.jpg') || url.includes('.jpeg')) return 'image/jpeg';
  if (url.includes('.png')) return 'image/png';
  if (url.includes('.gif')) return 'image/gif';
  if (url.includes('.webp')) return 'image/webp';
  
  return 'image/jpeg'; // Default fallback
}

module.exports = {
  isValidUrl,
  getContentType,
  ALLOWED_DOMAINS
};
