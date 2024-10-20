const router = require('express').Router();
const {
  getAllBookings,
  createBooking,
  updateBooking,
  deleteBooking,
} = require('../controller/bookingController');

router.route('/').post(createBooking);
router.route('/').get(getAllBookings);
router.route('/:id').put(updateBooking);
router.route('/:id').delete(deleteBooking);

module.exports = router;
