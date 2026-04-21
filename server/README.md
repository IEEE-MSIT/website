# IEEE MSIT Backend Server

Express.js backend server for image proxy functionality to bypass CORS issues.

## 📁 Project Structure

```
server/
├── package.json          # Node.js project configuration
├── .env.example         # Environment variables template
├── index.js             # Main server entry point
├── routes/
│   └── imageProxy.js   # Image proxy route
├── utils/
│   └── urlValidator.js  # URL validation utilities
└── README.md            # This file
```

## 🚀 Installation & Setup

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Environment Configuration
```bash
# Copy environment template
cp .env.example .env

# Edit .env file with your settings
nano .env
```

### 3. Start Server
```bash
# Development (with auto-restart)
npm run dev

# Production
npm start
```

## 📡 API Endpoints

### GET `/image?url=ENCODED_URL`
Proxy endpoint to fetch external images.

**Parameters:**
- `url` (required): URL-encoded external image URL

**Example:**
```
GET http://localhost:5000/image?url=https%3A%2F%2Fdrive.usercontent.google.com%2Fdownload%3Fid%3D1DaKTpUWzRumd6UPKr8ubZOuBg_9SeszA%26export%3Dview
```

### GET `/` 
Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "version": "1.0.0",
  "endpoints": {
    "health": "/",
    "imageProxy": "/image?url=ENCODED_URL"
  }
}
```

## 🔧 Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `5000` | Server port |
| `FRONTEND_URL` | `http://localhost:5173` | Frontend URL for CORS |
| `ALLOWED_ORIGINS` | `http://localhost:5173` | Comma-separated allowed origins |

## 🔒 Security Features

- **Domain Whitelisting**: Only allows Google Drive domains
- **CORS Configuration**: Configurable allowed origins
- **Input Validation**: URL encoding and format validation
- **Error Handling**: Comprehensive error responses

## 🎯 Frontend Integration

### React Component Example
```jsx
import React, { useState } from 'react';

const ImageWithProxy = ({ imageUrl, alt, className }) => {
  const [error, setError] = useState(false);
  
  const proxyUrl = imageUrl && imageUrl !== '#'
    ? `http://localhost:5000/image?url=${encodeURIComponent(imageUrl)}`
    : imageUrl;

  if (error) {
    return <div className={className}>Failed to load image</div>;
  }

  return (
    <img
      src={proxyUrl}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
};
```

### Usage in Existing Components
```jsx
// Example: Update your MemberCard to use proxy
const currentImg = member.image && member.image !== '#' 
  ? member.image.includes('drive.usercontent.google.com') 
    ? `http://localhost:5000/image?url=${encodeURIComponent(member.image)}`
    : member.image 
  : member.image;
```

## 🛠️ Development

### Adding New Routes
1. Create route file in `routes/` folder
2. Export Express router
3. Import and use in `index.js`

Example:
```javascript
// routes/newRoute.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'New route working' });
});

module.exports = router;

// index.js
const newRoute = require('./routes/newRoute');
app.use('/new', newRoute);
```

### Adding New Utils
1. Create utility file in `utils/` folder
2. Export functions
3. Import where needed

## 📝 Scripts

- `npm start` - Production server
- `npm run dev` - Development with nodemon
- `npm test` - Test runner (placeholder)

## 🚨 Troubleshooting

### Server Won't Start
1. Check if port 5000 is available
2. Verify .env file exists
3. Check Node.js version (>= 14.0.0)

### Images Not Loading
1. Verify server is running: `curl http://localhost:5000/`
2. Check CORS configuration in .env
3. Test proxy endpoint directly
4. Check browser console for errors

### CORS Issues
1. Verify FRONTEND_URL matches your frontend
2. Check ALLOWED_ORIGINS includes your frontend URL
3. Restart server after .env changes

## 📄 License

MIT License
