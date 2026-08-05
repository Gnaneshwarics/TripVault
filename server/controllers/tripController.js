const Trip = require("../models/Trip");

// ===========================
// Create Trip
// ===========================
const createTrip = async (req, res) => {
  try {
    const {
      destination,
      budget,
      startDate,
      endDate,
    } = req.body;

    const image = req.file ? req.file.filename : "";

    const trip = await Trip.create({
      destination,
      budget,
      startDate,
      endDate,
      image,
      user: req.user.id,
    });

    res.status(201).json({
      message: "Trip Created Successfully",
      trip,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// ===========================
// Get All Trips
// ===========================
const getTrips = async (req, res) => {

  try {

    const trips = await Trip.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json(trips);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

// ===========================
// Get Single Trip
// ===========================
const getTrip = async (req, res) => {

  try {

    const trip = await Trip.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!trip) {
      return res.status(404).json({
        message: "Trip Not Found",
      });
    }

    res.status(200).json(trip);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

// ===========================
// Update Trip
// ===========================
const updateTrip = async (req, res) => {

  try {

    const trip = await Trip.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!trip) {
      return res.status(404).json({
        message: "Trip Not Found",
      });
    }

    trip.destination =
      req.body.destination || trip.destination;

    trip.budget =
      req.body.budget || trip.budget;

    trip.startDate =
      req.body.startDate || trip.startDate;

    trip.endDate =
      req.body.endDate || trip.endDate;

    if (req.file) {
      trip.image = req.file.filename;
    }

    const updatedTrip = await trip.save();

    res.status(200).json({
      message: "Trip Updated Successfully",
      trip: updatedTrip,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

// ===========================
// Delete Trip
// ===========================
const deleteTrip = async (req, res) => {

  try {

    const trip = await Trip.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!trip) {
      return res.status(404).json({
        message: "Trip Not Found",
      });
    }

    await trip.deleteOne();

    res.status(200).json({
      message: "Trip Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

// ===========================
// Export
// ===========================
module.exports = {
  createTrip,
  getTrips,
  getTrip,
  updateTrip,
  deleteTrip,
};