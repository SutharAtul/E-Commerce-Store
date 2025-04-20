# 🛍️ Velvet Vine

**Velvet Vine** is a full-featured modern e-commerce platform built with a full-stack architecture using **React.js**, **Node.js**, **Express.js**, and **MongoDB**. It includes both **admin** and **shopping** views, featuring secure authentication, product management, a shopping cart, PayPal integration, and order tracking.

---

## 📁 Project Structure
```
Velvet Vine/
├── client/   # Frontend (React + Vite + Tailwind)
└── server/   # Backend (Node.js + Express + MongoDB)
```
## ✨ Features

### 👥 Authentication
- User registration, login, logout  
- Role-based access (Admin & User)  
- Protected routes  

### 🛒 User Shopping Experience
- Product listing, filtering, and search  
- Product detail view with star ratings  
- Cart management and checkout flow  
- PayPal payment gateway integration  
- Address management  
- Order history and tracking  

### 🧑‍💼 Admin Panel
- Dashboard (analytics coming soon)  
- Product management (create, update, delete)  
- Featured product toggling  
- Order management (view, update status)  

---

## 🧩 Tech Stack

| Frontend               | Backend                    |
|------------------------|----------------------------|
| React + Vite           | Node.js + Express.js       |
| Tailwind CSS           | MongoDB + Mongoose         |
| Redux Toolkit          | Cloudinary (image storage) |
| Shadcn/UI              | PayPal SDK                 |
| Toast Notifications    | REST API Architecture      |

---

## ⚙️ Setup Instructions

### 📦 Prerequisites
- Node.js  
- MongoDB Atlas or local MongoDB  
- PayPal Developer Account  
- Cloudinary Account  

### 🚀 Run the App

#### 🔧 Backend Setup

```bash
cd server
npm install
npm run dev
```

### 💻 Frontend Setup
```bash
cd client
npm install
npm run dev
```
## 🔐 Environment Variables
### Create a .env file inside the /server folder:
```bash
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
PAYPAL_CLIENT_ID=<your-paypal-client-id>
CLOUDINARY_CLOUD_NAME=<your-cloud-name>
CLOUDINARY_API_KEY=<your-api-key>
CLOUDINARY_API_SECRET=<your-api-secret>
```

##S👤 Author
### Atul Suthar
💼 LinkedIn: https://www.linkedin.com/in/atulkumarsuthar/
