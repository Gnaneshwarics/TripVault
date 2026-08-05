# TripVault ✈️

## MERN Stack Travel Planner with JWT Authentication

TripVault is a modern travel planning web application developed using the **MERN Stack (MongoDB, Express.js, React.js, and Node.js)**. It enables users to register, log in securely, and access a personalized dashboard. Authentication is implemented using **JSON Web Tokens (JWT)**, while user passwords are securely encrypted using **bcryptjs**.

---

# Table of Contents

1. Project Overview
2. Features
3. Technology Stack
4. Project Structure
5. Installation Guide
6. Environment Variables
7. Running the Project
8. API Endpoints
9. Authentication Flow
10. Security Features
11. Future Enhancements
12. Author
13. License

---

# Project Overview

TripVault is a secure travel planner application where users can:

- Register a new account
- Login securely
- Access a protected dashboard
- Manage travel-related information
- Authenticate using JWT

The application follows the Client–Server Architecture.

- **Frontend:** React.js
- **Backend:** Node.js & Express.js
- **Database:** MongoDB Atlas

---

# Features

## Authentication

- User Registration
- User Login
- Secure Password Hashing using bcrypt
- JWT Authentication
- Protected Routes
- Logout

## Dashboard

- Personalized Welcome Message
- Display Logged-in User Information
- Secure Access

## Security

- Password Encryption
- JWT Token Verification
- Environment Variables
- Protected REST APIs

## Responsive UI

- Bootstrap 5
- React Icons
- Mobile-Friendly Design

---

# Technology Stack

## Frontend

- React.js
- React Router DOM
- Axios
- Bootstrap 5
- CSS3
- React Icons

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- bcryptjs
- JSON Web Token (JWT)
- dotenv
- cors

---

# Project Structure

```text
TripVault
│
├── client
│   ├── public
│   ├── src
│   │   ├── components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── PrivateRoute.jsx
│   │   │
│   │   ├── pages
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Dashboard.jsx
│   │   │
│   │   ├── styles
│   │   │   └── style.css
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── server
│   ├── controllers
│   │   └── authController.js
│   │
│   ├── middleware
│   │   └── authMiddleware.js
│   │
│   ├── models
│   │   └── User.js
│   │
│   ├── routes
│   │   └── authRoutes.js
│   │
│   ├── uploads
│   ├── .env
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

# Installation Guide

## Clone the Repository

```bash
git clone https://github.com/yourusername/TripVault.git
```

Move into the project folder

```bash
cd TripVault
```

---

## Backend Setup

Navigate to the server folder

```bash
cd server
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend server

```bash
npm run dev
```

Backend URL

```
http://localhost:5000
```

---

## Frontend Setup

Navigate to the client folder

```bash
cd client
```

Install dependencies

```bash
npm install
```

Run the frontend

```bash
npm run dev
```

Frontend URL

```
http://localhost:5173
```

---

# Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

# API Endpoints

## Register User

**POST**

```
/api/auth/register
```

Request Body

```json
{
  "name": "John",
  "email": "john@gmail.com",
  "password": "123456"
}
```

Response

```json
{
  "message": "Registration Successful"
}
```

---

## Login User

**POST**

```
/api/auth/login
```

Request Body

```json
{
  "email": "john@gmail.com",
  "password": "123456"
}
```

Response

```json
{
  "message": "Login Successful",
  "token": "JWT_TOKEN",
  "user": {
    "id": "...",
    "name": "John",
    "email": "john@gmail.com"
  }
}
```

---

## Get Logged-in User

**GET**

```
/api/auth/me
```

Headers

```
Authorization: Bearer JWT_TOKEN
```

Response

```json
{
  "_id": "...",
  "name": "John",
  "email": "john@gmail.com"
}
```

---

# Authentication Flow

```
User Registration
        │
        ▼
Password Encrypted using bcrypt
        │
        ▼
Stored in MongoDB Atlas
        │
        ▼
User Login
        │
        ▼
JWT Token Generated
        │
        ▼
Token Stored in Local Storage
        │
        ▼
Protected Routes Verified
        │
        ▼
Dashboard Access
```

---

# Security Features

- Passwords are encrypted using **bcryptjs**
- JWT is used for secure authentication
- Protected routes prevent unauthorized access
- Environment variables secure sensitive information
- MongoDB Atlas securely stores user data

---

# Dependencies

## Backend

- express
- mongoose
- bcryptjs
- jsonwebtoken
- dotenv
- cors
- multer
- nodemon

## Frontend

- react
- react-router-dom
- axios
- bootstrap
- react-icons

---

# Future Enhancements

- Create Trip
- Edit Trip
- Delete Trip
- Upload Trip Images
- Budget Tracker
- Expense Tracker
- Google Maps Integration
- Weather API Integration
- Hotel Booking
- Flight Booking
- User Profile Management
- Email Verification
- Password Reset
- Dark Mode

---

# Author

**Gnaneshwari C S**

Bachelor of Engineering

Artificial Intelligence & Data Science

---

# License

This project is developed for **educational and academic purposes** using the **MERN Stack**. It demonstrates secure authentication, REST API development, and modern full-stack web application development.
