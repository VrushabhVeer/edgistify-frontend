# E-Commerce Platform 🛒

A full-stack e-commerce platform built using **MERN stack (MongoDB, Express, React, Node.js)**, The platform allows users to register, log in, add products to their cart, and place orders.

## 🚀 Features
- User authentication (Login/Register)
- Authenticated users can add products to their cart.
- Authenticated users can place orders for products in their cart.
- Orders include product details, total price, shipping address, payment status, and order status.
- WT-based authentication for secure access.
- Passwords are securely hashed using bcrypt
- Optimized API responses for quick access.
- Toast notifications for user interactions
- Mobile-friendly UI

## 🖼️ Screenshots
- **Products & Product details**  
| Products.jsx              | ProductDetails.jsx              |
  | ---------------------- | ---------------------- |
  | ![homepage](https://github.com/user-attachments/assets/4b82f638-72db-43bb-a7e5-7f1e65de25d7) | ![productDetails](https://github.com/user-attachments/assets/7daa2093-9862-47a2-a015-9c56f787dd8d) |

- **Signup & Placed Pages**
  | Signup.jsx              | Placed.jsx              |
  | ---------------------- | ---------------------- |
  | ![signu](https://github.com/user-attachments/assets/9ca5ab2e-a25c-4130-a80b-1d48fc44c704) | ![placed](https://github.com/user-attachments/assets/6133cc5a-7120-49dd-a98d-928f86501bbc) |

## Want to Check application:
### credentials for login:
- email: admin@email.com
- password: 123456

## 🖥️ Tech Stack
### Frontend:
- React.js for building the user interface.
- TailwindCSS for styling
- Axios for API requests
- React Toastify for notifications

### Backend:
- Node.js with Express.js
- MongoDB with Mongoose
- JSON Web Token (JWT) for authentication
- bcrypt.js for password hashing

## 📂 Project Structure
### Frontend:
```
└── src/
├── App.css
├── App.jsx
├── index.css
├── main.jsx
├── assets/
├── components/
│ ├── Footer.jsx
│ └── Navbar.jsx
├── pages/
│ ├── Login.jsx
| ├── Checkout.jsx
│ ├── Signup.jsx
│ ├── Products.jsx
│ ├── ProductDetails.jsx
│ └── Placed.jsx
├── routes/
│ ├── ProtectedRoute.jsx
│ └── AllRoutes.jsx
└── api/
└── apis.js
```

### Backend:
```
└── src/
├── index.js
├── config/
│ └── database.js
├── middlewares/
│ └── auth.middleware.js
├── models/
│ ├── cart.model.js
| ├── product.model.js
| ├── order.model.js
│ └── user.model.js
└── routes/
├── cart.routes.js
├── product.routes.js
|── order.routes.js
└── user.routes.js
```

## 🔧 Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/VrushabhVeer/edgistify-frontend.git
   cd edgistify-frontend
   npm install
   ```
   ```sh
   git clone https://github.com/VrushabhVeer/edgistify-backend.git
   cd edgistify-backend 
   npm install
   ```

2. **Set up .env files in backend (server):**
   ```sh
   MONGO_URL=your_mongodb_connection
   JWT_SECRET=your_secret_key
   PORT=your_port
   ```
   Run the backend server:
   ```sh
   cd edgistify-backend
   npm run dev
   ```
   Run the frontend server:
   ```sh
   cd edgistify-frontend 
   npm run dev
   Open http://localhost:5173 in your browser.

## 🔌 API Endpoints
   Auth Routes:
   ```sh
   POST /user/signup - Register a new user
   POST /user/login - Login user
   ```
   Product Routes:
   ```sh
   GET /products - Get All Products
   GET /products/:id - Get Single Product
   POST /cart/add - Add to Cart
   GET /cart - Get Cart Items
   DELETE /cart/:id - Delete Cart Item
   POST /order/place - Create a Order
   GET /order - Get Order
   ```
##  📌 Future Enhancements
- Product Search and Filtering 🔍
- Payment Gateway Integration 💳
- Order Tracking 📦
- Admin Dashboard for managing products and orders 📊
- Email Notifications for order updates 📧
