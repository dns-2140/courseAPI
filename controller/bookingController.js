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

const updateBooking = async (req, res) => {
  const { id } = req.params; // Get booking ID from request parameters
  const { userId, scheduleId, status } = req.body; // Get new values from request body

  try {
    const [updated] = await Booking.update(
      { userId, scheduleId, status },
      { where: { id } }
    );

    if (updated) {
      const updatedBooking = await Booking.findByPk(id); // Fetch updated booking
      return res.status(200).json({
        status: 'success',
        data: { updatedBooking },
      });
    }

    return res.status(404).json({
      status: 'fail',
      message: 'Booking not found',
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({
      status: 'error',
      message: 'An error occurred while updating the booking',
    });
  }
};

const deleteBooking = async (req, res) => {
  const { id } = req.params; // Get booking ID from request parameters

  try {
    const deleted = await Booking.destroy({
      where: { id },
    });

    if (deleted) {
      return res.status(204).json({
        status: 'success',
        message: 'Booking deleted successfully',
      });
    }

    return res.status(404).json({
      status: 'fail',
      message: 'Booking not found',
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({
      status: 'error',
      message: 'An error occurred while deleting the booking',
    });
  }
};

module.exports = {
  createBooking,
  getAllBookings,
  updateBooking,
  deleteBooking,
};
