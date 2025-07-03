import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products').then(res => setProducts(res.data));
  }, []);

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>Catering Products</Typography>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product._id}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <ProductCard product={product} />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home; 