# Image Proxy Server

Express.js proxy server to bypass CORS issues when loading Google Drive images in frontend applications.

## 🚀 Features

- **CORS Bypass**: Serves Google Drive images to your frontend without CORS restrictions
- **Security**: Only allows whitelisted Google domains
- **Performance**: Includes proper caching headers
- **Error Handling**: Comprehensive error responses
- **Health Check**: Built-in monitoring endpoint

## 📦 Installation

```bash
# Install dependencies
npm install

# For development with auto-restart
npm install --save-dev nodemon
```

## 🏃‍♂️ Running the Server

```bash
# Production
npm start

# Development (auto-restart on changes)
npm run dev
```

Server will start on `http://localhost:5000` by default.

## 🔧 Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `5000` | Server port |

## 📡 API Endpoints

### GET `/image?url=ENCODED_URL`

Proxy endpoint to fetch and serve external images.

**Parameters:**
- `url` (required): URL-encoded external image URL

**Example:**
```
GET http://localhost:5000/image?url=https%3A%2F%2Fdrive.usercontent.google.com%2Fdownload%3Fid%3D1DaKTpUWzRumd6UPKr8ubZOuBg_9SeszA%26export%3Dview
```

**Response:**
- Success: Image buffer with proper `Content-Type` header
- Error: JSON error message with status code

### GET `/health`

Health check endpoint for monitoring.

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "version": "1.0.0"
}
```

## 🔒 Security

Only allows requests from these domains:
- `drive.google.com`
- `drive.usercontent.google.com`
- `docs.google.com`
- `lh3.googleusercontent.com`
- `lh4.googleusercontent.com`
- `lh5.googleusercontent.com`
- `lh6.googleusercontent.com`

CORS is enabled for: `http://localhost:5173`

## 🎯 Frontend Usage

### React Example

```jsx
import React from 'react';

const ImageWithProxy = ({ imageUrl, alt, ...props }) => {
  const proxyUrl = `http://localhost:5000/image?url=${encodeURIComponent(imageUrl)}`;
  
  return (
    <img
      src={proxyUrl}
      alt={alt}
      {...props}
      onError={(e) => {
        console.error('Image failed to load:', e);
        // Fallback to initials or placeholder
      }}
    />
  );
};

// Usage in your MemberCard component
<MemberCard 
  member={{
    ...member,
    image: member.image && member.image !== '#' 
      ? `http://localhost:5000/image?url=${encodeURIComponent(member.image)}`
      : member.image
  }}
/>
```

### Vanilla JavaScript Example

```html
<img 
  src="http://localhost:5000/image?url=ENCODED_GOOGLE_DRIVE_URL" 
  alt="Profile Image"
  onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
/>
<div style="display:none;">Fallback content</div>
```

### URL Encoding

Always encode the image URL before passing to the proxy:

```javascript
const originalUrl = 'https://drive.usercontent.google.com/download?id=1DaKTpUWzRumd6UPKr8ubZOuBg_9SeszA&export=view';
const encodedUrl = encodeURIComponent(originalUrl);
const proxyUrl = `http://localhost:5000/image?url=${encodedUrl}`;
```

## 🛠️ Integration with MemberCard

Update your MemberCard component to use the proxy:

```jsx
// In MemberCard.tsx
const currentImg = member.image && member.image !== '#' 
  ? member.image.includes('drive.usercontent.google.com') 
    ? `http://localhost:5000/image?url=${encodeURIComponent(member.image)}`
    : member.image 
  : member.image;
```

## 📝 Logs

Server provides detailed logging:
- Server startup information
- Request errors
- Security violations
- Internal errors

## 🔧 Customization

### Change Allowed Frontend Origin

Edit the CORS middleware in `image-proxy-server.js`:

```javascript
res.header('Access-Control-Allow-Origin', 'YOUR_FRONTEND_URL');
```

### Add New Allowed Domains

Update the `ALLOWED_DOMAINS` array:

```javascript
const ALLOWED_DOMAINS = [
  'drive.google.com',
  'drive.usercontent.google.com',
  'your-new-domain.com'
];
```

## 🚨 Troubleshooting

### Images Not Loading
1. Check proxy server is running: `http://localhost:5000/health`
2. Verify URL is properly encoded
3. Check browser console for error messages
4. Ensure image domain is in allowlist

### CORS Errors
1. Verify frontend URL matches CORS configuration
2. Check if proxy server is accessible from frontend
3. Restart both servers after configuration changes

### Performance Issues
1. Images are cached for 1 hour by default
2. Consider CDN for production use
3. Monitor proxy server logs for bottlenecks

## 📄 License

MIT License - feel free to use in your projects!
