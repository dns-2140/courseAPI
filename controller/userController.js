const User = require('../models/user');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll(); // Fetch all users
    return res.status(200).json({
      status: 'success',
      data: {
        users,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'An error occurred while fetching users',
    });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params; // Get user ID from request parameters

  try {
    const user = await User.findByPk(id); // Fetch user by primary key (ID)

    if (user) {
      return res.status(200).json({
        status: 'success',
        data: {
          user,
        },
      });
    }
    return res.status(404).json({
      status: 'fail',
      message: 'User not found',
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'An error occurred while fetching the user',
    });
  }
};

module.exports = { getAllUsers, getUserById };
