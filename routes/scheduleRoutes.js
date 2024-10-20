const router = require('express').Router();
const { createSchedule } = require('../controller/scheduleController');

router.route('/').post(createSchedule);
// router.route('/').get(getAllSchedules);
// router.route('/:id').put(updateSchedule);
// router.route('/:id').delete(deleteSchedule);
// router.route('/:id').get(findScheduleById);

module.exports = router;
