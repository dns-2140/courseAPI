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

module.exports = {
  createSchedule,
};
