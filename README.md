# Catering Reservation and Ordering System

## Overview
A web portal for rural catering businesses to promote and sell their products globally. Users can register, browse products, add to cart, place orders, and manage their profiles. Admins can manage products and view all orders.

## Tech Stack
- **Frontend:** React, Material-UI, Framer Motion, Axios, React Router
- **Backend:** Node.js, Express, MongoDB, JWT, Winston (logging)
- **Database:** MongoDB (Atlas/local)

## Features
- User & Admin registration/login
- View products
- Add to cart
- Place order
- View my orders
- Profile management
- Admin: Upload product, view all orders
- Logging for every action

## Project Structure
```
/backend
  /controllers
  /models
  /routes
  /middleware
  /logs
  app.js
  config.js
/frontend
  /src
    /components
    /pages
    /utils
  App.js
  index.js
```

## Setup Instructions
### Backend
1. `cd backend`
2. `npm install`
3. Create `.env` with:
   ```
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```
4. `npm run dev` (or `node app.js`)

### Frontend
1. `cd frontend`
2. `npm install`
3. `npm run dev`

## API Endpoints
- `POST /api/auth/register` — Register user
- `POST /api/auth/login` — Login
- `GET /api/auth/profile` — Get profile (auth)
- `GET /api/products` — List products
- `POST /api/products` — Add product (admin)
- `PUT /api/products/:id` — Update product (admin)
- `DELETE /api/products/:id` — Delete product (admin)
- `GET /api/cart` — Get cart (auth)
- `POST /api/cart/add` — Add to cart (auth)
- `POST /api/cart/remove` — Remove from cart (auth)
- `POST /api/orders` — Place order (auth)
- `GET /api/orders/my` — My orders (auth)
- `GET /api/orders` — All orders (admin)

## Logging
- All actions are logged using Winston to `backend/logs/actions.log`.
- Example: requests, errors, user actions.

## Coding Standards
- Modular, maintainable, testable code
- Environment variables for secrets
- Proper error handling and logging

## Deployment
- **MongoDB Atlas** for cloud DB
- **Backend:** Render/Heroku
- **Frontend:** Vercel/Netlify
- **Justification:** Cloud hosting ensures accessibility, scalability, and reliability. MongoDB Atlas provides managed DB with backups and security.

## Screenshots
_Add screenshots/gifs of UI and animations here._

## License
MIT
