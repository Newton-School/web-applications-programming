const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const MenuItem = require('../models/MenuItem');

// Get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific order
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new order
router.post('/', async (req, res) => {
  try {
    // Check if the menu item exists and has enough quantity
    const menuItem = await MenuItem.findOne({ id: req.body.itemId });
    
    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    
    if (menuItem.availableQuantity < req.body.quantity) {
      return res.status(400).json({ 
        message: 'Not enough items available',
        available: menuItem.availableQuantity
      });
    }
    
    // Create the order
    const order = new Order(req.body);
    const newOrder = await order.save();
    
    // Update the available quantity
    menuItem.availableQuantity -= req.body.quantity;
    await menuItem.save();
    
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update an order status
router.patch('/:id', async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id, 
      { status: req.body.status }, 
      { new: true }
    );
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    
    res.json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete an order
router.delete('/:id', async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    
    // If order is deleted, restore the quantity to the menu item
    const menuItem = await MenuItem.findOne({ id: order.itemId });
    if (menuItem) {
      menuItem.availableQuantity += order.quantity;
      await menuItem.save();
    }
    
    res.json({ message: 'Order deleted and inventory restored' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 