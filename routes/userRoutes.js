const router = require('express').Router();

const { getAllUsers, getUserById } = require('../controller/userController');

router.route('/').get(getAllUsers);
router.route('/:id').get(getUserById);

module.exports = router;
