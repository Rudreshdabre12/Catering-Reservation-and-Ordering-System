const express = require('express');
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const auth = require('../middleware/auth');
const router = express.Router();

// Get my cart
router.get('/', auth, async (req, res) => {
  let cart = await Cart.findOne({ user: req.user.id }).populate('products.product');
  if (!cart) cart = new Cart({ user: req.user.id, products: [] });
  res.json(cart);
});

// Add to cart
router.post('/add', auth, async (req, res) => {
  const { productId, quantity } = req.body;
  let cart = await Cart.findOne({ user: req.user.id });
  if (!cart) cart = new Cart({ user: req.user.id, products: [] });
  const productIndex = cart.products.findIndex(p => p.product.toString() === productId);
  if (productIndex > -1) {
    cart.products[productIndex].quantity += quantity;
  } else {
    cart.products.push({ product: productId, quantity });
  }
  await cart.save();
  res.json(cart);
});

// Remove from cart
router.post('/remove', auth, async (req, res) => {
  const { productId } = req.body;
  let cart = await Cart.findOne({ user: req.user.id });
  if (!cart) return res.status(400).json({ msg: 'Cart not found' });
  cart.products = cart.products.filter(p => p.product.toString() !== productId);
  await cart.save();
  res.json(cart);
});

module.exports = router; 