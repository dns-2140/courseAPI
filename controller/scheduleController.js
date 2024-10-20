const Schedule = require('../models/schedule');

const createSchedule = async (req, res) => {
  try {
    const { courseId, startTime, endTime } = req.body;

    // Ensure required fields are provided
    if (!courseId || !startTime || !endTime) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide courseId, startTime, and endTime',
      });
    }

    // Create a new schedule
    const newSchedule = await Schedule.create({
      courseId,
      startTime,
      endTime,
    });

    res.status(201).json({
      status: 'success',
      message: 'New schedule created successfully',
      data: {
        newSchedule,
      },
    });
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({
      status: 'error',
      message: 'An error occurred while creating the schedule',
    });
  }
};

const getAllSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.findAll(); // Fetch all schedules

    return res.status(200).json({
      status: 'success',
      data: {
        schedules,
      },
    });
  } catch (error) {
    console.error(error); // Log error for debugging
    return res.status(500).json({
      status: 'error',
      message: 'Failed to retrieve schedules',
    });
  }
};

const updateSchedule = async (req, res) => {
  const { id } = req.params; // Get schedule ID from request parameters
  const { courseId, startTime, endTime } = req.body; // Get new values from request body

  try {
    const [updated] = await Schedule.update(
      { courseId, startTime, endTime },
      { where: { id } }
    );

    if (updated) {
      const updatedSchedule = await Schedule.findByPk(id); // Fetch updated schedule
      return res.status(200).json({
        status: 'success',
        data: { updatedSchedule },
      });
    }

    return res.status(404).json({
      status: 'fail',
      message: 'Schedule not found',
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({
      status: 'error',
      message: 'An error occurred while updating the schedule',
    });
  }
};

const deleteSchedule = async (req, res) => {
  const { id } = req.params; // Get schedule ID from request parameters

  try {
    const deleted = await Schedule.destroy({
      where: { id },
    });

    if (deleted) {
      return res.status(204).json({
        status: 'success',
        message: 'Schedule deleted successfully',
      });
    }

    return res.status(404).json({
      status: 'fail',
      message: 'Schedule not found',
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({
      status: 'error',
      message: 'An error occurred while deleting the schedule',
    });
  }
};

module.exports = {
  createSchedule,
  getAllSchedules,
  updateSchedule,
  deleteSchedule,
};
