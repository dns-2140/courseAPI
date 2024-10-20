const router = require('express').Router();
const {
  signUp,
  updateUser,
  deleteUser,
} = require('../controller/authController');
router.route('/signup').post(signUp);
router.route('/:id').put(updateUser);
router.route('/:id').delete(deleteUser);

module.exports = router;
