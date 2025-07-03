import React from 'react';
import { Container, Grid, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const features = [
  { label: 'Browse Products', path: '/products' },
  { label: 'Login', path: '/login' },
  { label: 'Register', path: '/register' },
  { label: 'My Cart', path: '/cart' },
  { label: 'My Orders', path: '/orders' },
  { label: 'My Profile', path: '/profile' },
  { label: 'Admin Dashboard', path: '/admin' },
];

const Landing = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
        <Typography variant="h2" align="center" gutterBottom>
          Welcome to Catering Reservation
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" gutterBottom>
          Promote, discover, and order the best rural catering products!
        </Typography>
        <Box sx={{ mt: 6 }}>
          <Grid container spacing={3} justifyContent="center">
            {features.map(f => (
              <Grid item xs={12} sm={6} md={4} key={f.label}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ py: 3, fontSize: 20 }}
                    onClick={() => navigate(f.path)}
                  >
                    {f.label}
                  </Button>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Landing; 