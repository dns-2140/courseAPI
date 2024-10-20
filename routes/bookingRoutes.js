const router = require('express').Router();
const {
  getAllBookings,
  createBooking,
  updateBooking,
  deleteBooking,
  findBookingById,
} = require('../controller/bookingController');

router.route('/').post(createBooking);

module.exports = router;
