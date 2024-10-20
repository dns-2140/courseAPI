const User = require('../models/user');

const signUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide name, email, and password',
      });
    }
    const newUser = await User.create({
      name,
      email,
      password,
    });
    if (newUser) {
      return res.status(201).json({
        status: 'success',
        message: 'a new user has been created successfully',
        data: {
          newUser,
        },
      });
    }
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({
      status: 'error',
      message: 'An error occurred while creating the user',
    });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params; // Get user ID from request parameters
  const { name, email, password } = req.body; // Get updated data

  try {
    const [updated] = await User.update(
      { name, email, password },
      { where: { id } }
    );

    if (updated) {
      const updatedUser = await User.findByPk(id); // Fetch updated user
      return res.status(200).json({
        status: 'success',
        data: { updatedUser },
      });
    }
    return res.status(404).json({
      status: 'fail',
      message: 'User not found',
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'An error occurred while updating the user',
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params; // Get user ID from request parameters

  try {
    const deleted = await User.destroy({
      where: { id },
    });

    if (deleted) {
      return res.status(204).json({
        status: 'success',
        message: 'User deleted successfully',
      });
    }
    return res.status(404).json({
      status: 'fail',
      message: 'User not found',
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'An error occurred while deleting the user',
    });
  }
};

module.exports = { signUp, updateUser, deleteUser };
