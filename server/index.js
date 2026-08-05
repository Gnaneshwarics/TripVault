const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config();

const app = express();

// Routes
const authRoutes = require("./routes/authRoutes");
const tripRoutes = require("./routes/tripRoutes");

// Middleware
app.use(cors());
app.use(express.json());

// Serve Uploaded Images
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);

// Test Route
app.get("/", (req, res) => {
  res.send("TripVault Backend is Running...");
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/trips", tripRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(process.env.PORT, () => {
      console.log(`✅ Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB Error");
    console.log(err.message);
  });