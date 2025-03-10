const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const menuRoutes = require('./routes/menuRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/restaurantDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);

// Root route - API Documentation
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'documentation.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 