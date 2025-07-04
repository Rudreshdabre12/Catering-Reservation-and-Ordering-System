const express = require('express');
const Order = require('../models/Order');
const auth = require('../middleware/auth');
const router = express.Router();

// Place order
router.post('/', auth, async (req, res) => {
  const { products, total } = req.body;
  const order = new Order({ user: req.user.id, products, total });
  await order.save();
  res.json(order);
});

// Get my orders
router.get('/my', auth, async (req, res) => {
  const orders = await Order.find({ user: req.user.id }).populate('products.product');
  res.json(orders);
});

// Admin: get all orders
router.get('/', auth, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ msg: 'Admin only' });
  const orders = await Order.find().populate('user').populate('products.product');
  res.json(orders);
});

module.exports = router; 