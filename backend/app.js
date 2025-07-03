const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const winston = require('winston');
const connectDB = require('./config');
require('dotenv').config();
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const orderRoutes = require('./routes/order');
const cartRoutes = require('./routes/cart');

const app = express();

// Winston logger setup
const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'logs/actions.log' }),
    new winston.transports.Console()
  ]
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
});

// Connect to MongoDB
connectDB();

// Routes
app.get('/', (req, res) => {
  res.send('Catering Reservation API running');
});

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/cart', cartRoutes);

// TODO: Add auth, product, cart, order, profile routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
