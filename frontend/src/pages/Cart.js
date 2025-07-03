import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import axios from 'axios';
import { motion } from 'framer-motion';

const Cart = () => {
  const [cart, setCart] = useState({ products: [] });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('/api/cart', { headers: { Authorization: `Bearer ${token}` } })
        .then(res => setCart(res.data));
    }
  }, []);

  return (
    <Container>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
        <Typography variant="h4" gutterBottom>My Cart</Typography>
        <List>
          {cart.products.map(item => (
            <ListItem key={item.product._id}>
              <ListItemText
                primary={item.product.name}
                secondary={`Quantity: ${item.quantity} | Price: ₹${item.product.price}`}
              />
            </ListItem>
          ))}
        </List>
        <Button variant="contained" color="primary" disabled={cart.products.length === 0}>Place Order</Button>
      </motion.div>
    </Container>
  );
};

export default Cart; 