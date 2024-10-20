const router = require('express').Router();
const {
  getAllCourses,
  createCourse,
  updateCourse,
  deleteCourse,
  findCourseById,
} = require('../controller/courseController');

router.route('/').post(createCourse);
router.route('/').get(getAllCourses);
router.route('/:id').put(updateCourse);
router.route('/:id').delete(deleteCourse);
router.route('/:id').get(findCourseById);

module.exports = router;
