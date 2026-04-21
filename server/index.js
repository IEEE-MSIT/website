require('dotenv').config();
const express = require('express');
const cors = require('cors');
const imageProxyRoutes = require('./routes/imageProxy');

const app = express();
const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

// CORS configuration
const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS?.split(',') || [FRONTEND_URL],
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Routes
app.use('/image', imageProxyRoutes);

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    endpoints: {
      health: '/',
      imageProxy: '/image?url=ENCODED_URL'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ 
    error: 'Internal server error',
    message: err.message 
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Endpoint not found',
    availableEndpoints: ['/image', '/'],
    method: req.method 
  });
});

// Start server
app.listen(PORT, () => {
  console.log('🚀 IEEE MSIT Image Proxy Server');
  console.log(`📡 Server running on http://localhost:${PORT}`);
  console.log(`🔒 CORS enabled for: ${process.env.ALLOWED_ORIGINS || FRONTEND_URL}`);
  console.log(`📡 Image proxy: http://localhost:${PORT}/image?url=ENCODED_URL`);
  console.log(`🏥 Health check: http://localhost:${PORT}/`);
  console.log(`✅ Ready to serve images!`);
});

module.exports = app;
