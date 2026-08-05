TripVault ✈️
MERN Stack Travel Planner with JWT Authentication

TripVault is a modern travel planning web application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). It allows users to register, log in securely, and access a protected dashboard to manage their travel activities. Authentication is handled using JSON Web Tokens (JWT), and passwords are securely hashed using bcryptjs.

Table of Contents
Project Overview
Features
Tech Stack
Project Structure
Installation
Environment Variables
Running the Project
API Endpoints
Authentication Flow
Folder Structure
Future Enhancements
Author
Project Overview

TripVault is designed to simplify travel planning by providing a secure platform where users can:

Create an account
Log in securely
Access a personalized dashboard
Manage travel information
Protect private pages using JWT authentication

The project follows a client-server architecture.

Frontend: React.js
Backend: Express.js + Node.js
Database: MongoDB Atlas
Features
User Authentication
User Registration
User Login
Password Encryption using bcrypt
JWT Authentication
Protected Routes
Logout
Dashboard
Welcome Logged-in User
Display User Information
Secure Access using JWT
Security
Password Hashing
JWT Token Verification
Environment Variables
Protected APIs
Responsive UI
Bootstrap 5
React Icons
Mobile Friendly Design
Tech Stack
Frontend
React.js
React Router DOM
Axios
Bootstrap 5
CSS3
React Icons
Backend
Node.js
Express.js
MongoDB Atlas
Mongoose
bcryptjs
JSON Web Token (JWT)
dotenv
cors
Project Structure
TripVault
│
├── client
│   ├── public
│   ├── src
│   │
│   ├── components
│   │      Navbar.jsx
│   │      Footer.jsx
│   │      PrivateRoute.jsx
│   │
│   ├── pages
│   │      Login.jsx
│   │      Register.jsx
│   │      Dashboard.jsx
│   │
│   ├── styles
│   │      style.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── server
│   ├── controllers
│   │      authController.js
│   │
│   ├── middleware
│   │      authMiddleware.js
│   │
│   ├── models
│   │      User.js
│   │
│   ├── routes
│   │      authRoutes.js
│   │
│   ├── uploads
│   │
│   ├── .env
│   ├── index.js
│   └── package.json
│
└── README.md
Installation
Clone the Repository
git clone https://github.com/yourusername/TripVault.git

Move into the project folder

cd TripVault
Backend Setup

Move to server

cd server

Install dependencies

npm install

Create a .env file

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

Run the backend

npm run dev

Backend URL

http://localhost:5000
Frontend Setup

Move to client

cd client

Install dependencies

npm install

Run React

npm run dev

Frontend URL

http://localhost:5173
API Endpoints
Register User

POST

/api/auth/register

Request

{
  "name": "John",
  "email": "john@gmail.com",
  "password": "123456"
}

Response

{
  "message": "Registration Successful"
}
Login User

POST

/api/auth/login

Request

{
  "email": "john@gmail.com",
  "password": "123456"
}

Response

{
  "message": "Login Successful",
  "token": "JWT_TOKEN",
  "user": {
    "id": "...",
    "name": "John",
    "email": "john@gmail.com"
  }
}
Get Logged-in User

GET

/api/auth/me

Headers

Authorization: Bearer JWT_TOKEN

Response

{
  "_id": "...",
  "name": "John",
  "email": "john@gmail.com"
}
Authentication Flow
User Registers
        │
        ▼
Password Hashed using bcrypt
        │
        ▼
Stored in MongoDB
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
Dependencies
Backend
express
mongoose
jsonwebtoken
bcryptjs
cors
dotenv
nodemon
multer
Frontend
react
react-router-dom
axios
bootstrap
react-icons
Screens
Home Page
Login Page
Register Page
Dashboard
Navbar
Footer
Security Features
Password Encryption using bcrypt
JWT Authentication
Protected API Routes
Environment Variables
MongoDB Atlas Cloud Database
Future Enhancements
Create Trip
Edit Trip
Delete Trip
Upload Trip Images
Budget Tracker
Google Maps Integration
Weather API
Hotel Booking
Flight Booking
Expense Tracker
User Profile
Email Verification
Password Reset
Dark Mode
Author

Gnaneshwari C S

Bachelor of Engineering

Artificial Intelligence & Data Science

License

This project is developed for educational and academic purposes using the MERN Stack.
