const router = require('express').Router();
const {
  getAllBookings,
  createBooking,
  updateBooking,
  deleteBooking,
  findBookingById,
} = require('../controller/bookingController');

router.route('/').post(createBooking);
router.route('/').get(getAllBookings);

module.exports = router;
