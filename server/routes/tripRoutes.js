const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");

const {
  createTrip,
  getTrips,
  getTrip,
  updateTrip,
  deleteTrip,
} = require("../controllers/tripController");

// Create Trip with Image Upload
router.post(
  "/",
  protect,
  upload.single("image"),
  createTrip
);

// Get All Trips
router.get(
  "/",
  protect,
  getTrips
);

// Get Single Trip
router.get(
  "/:id",
  protect,
  getTrip
);

// Update Trip with Image Upload
router.put(
  "/:id",
  protect,
  upload.single("image"),
  updateTrip
);

// Delete Trip
router.delete(
  "/:id",
  protect,
  deleteTrip
);

module.exports = router;