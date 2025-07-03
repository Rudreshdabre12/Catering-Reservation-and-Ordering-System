import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';
import { motion } from 'framer-motion';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('/api/orders/my', { headers: { Authorization: `Bearer ${token}` } })
        .then(res => setOrders(res.data));
    }
  }, []);

  return (
    <Container>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
        <Typography variant="h4" gutterBottom>My Orders</Typography>
        <List>
          {orders.map(order => (
            <ListItem key={order._id}>
              <ListItemText
                primary={`Order #${order._id} - ₹${order.total}`}
                secondary={`Status: ${order.status} | ${new Date(order.createdAt).toLocaleString()}`}
              />
            </ListItem>
          ))}
        </List>
      </motion.div>
    </Container>
  );
};

export default Orders; 