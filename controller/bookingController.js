const Booking = require('../models/booking');

const createBooking = async (req, res) => {
  const { userId, scheduleId } = req.body; // Get userId and scheduleId from request body

  try {
    // Ensure both required fields are provided
    if (!userId || !scheduleId) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide userId and scheduleId',
      });
    }

    // Create a new booking in the database
    const newBooking = await Booking.create({
      userId,
      scheduleId,
    });

    return res.status(201).json({
      status: 'success',
      message: 'Booking created successfully',
      data: {
        newBooking,
      },
    });
  } catch (error) {
    console.error(error); // Log error for debugging
    return res.status(500).json({
      status: 'error',
      message: 'An error occurred while creating the booking',
    });
  }
};

const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll(); // Fetch all bookings

    return res.status(200).json({
      status: 'success',
      data: {
        bookings,
      },
    });
  } catch (error) {
    console.error(error); // Log error for debugging
    return res.status(500).json({
      status: 'error',
      message: 'Failed to retrieve bookings',
    });
  }
};

module.exports = { createBooking, getAllBookings };
