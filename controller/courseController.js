const Course = require('../models/course');

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll(); // Fetch all courses
    res.status(200).json({
      status: 'success',
      data: {
        courses,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to retrieve courses',
    });
  }
};

const createCourse = async (req, res) => {
  try {
    const { title, description, price } = req.body;

    // Ensure all required fields are provided
    if (!title || !price) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide title and price for the course',
      });
    }

    // Create a new course in the database
    const newCourse = await Course.create({
      title,
      description,
      price,
    });

    res.status(201).json({
      status: 'success',
      message: 'New course created successfully',
      data: {
        newCourse,
      },
    });
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({
      status: 'error',
      message: 'An error occurred while creating the course',
    });
  }
};

const updateCourse = async (req, res) => {
  const { id } = req.params; // Get course ID from request parameters
  console.log(typeof id, id);
  const { title, description, price } = req.body; // Get new values from request body

  try {
    const [updated] = await Course.update(
      { title, description, price },
      { where: { id } }
    );

    console.log(updated);

    if (updated) {
      const updatedCourse = await Course.findByPk(id); // Fetch updated course
      return res.status(200).json({
        status: 'success',
        data: { updatedCourse },
      });
    }

    return res.status(404).json({
      status: 'fail',
      message: 'Course not found',
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({
      status: 'error',
      message: 'An error occurred while updating the course',
    });
  }
};

const deleteCourse = async (req, res) => {
  const { id } = req.params; // Get course ID from request parameters

  try {
    const deleted = await Course.destroy({
      where: { id },
    });

    if (deleted) {
      return res.status(204).json(); // No content response for successful deletion
    }

    return res.status(404).json({
      status: 'fail',
      message: 'Course not found',
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({
      status: 'error',
      message: 'An error occurred while deleting the course',
    });
  }
};

const findCourseById = async (req, res) => {
  const id = parseInt(req.params.id, 10); // Ensure id is an integer

  try {
    const course = await Course.findByPk(id); // Fetch the course by ID

    if (course) {
      return res.status(200).json({
        status: 'success',
        data: { course },
      });
    }

    return res.status(404).json({
      status: 'fail',
      message: 'Course not found',
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({
      status: 'error',
      message: 'An error occurred while retrieving the course',
    });
  }
};

module.exports = {
  getAllCourses,
  createCourse,
  updateCourse,
  deleteCourse,
  findCourseById,
};
