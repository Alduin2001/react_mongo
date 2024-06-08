const router = require('express').Router();
const userRoutes = require('./user_routes');
const courseRoutes = require('./course_routes');
const themeRoutes = require('./theme_routes');
const lectureRoutes = require('./lecture_routes');

router.use('/users/',userRoutes);
router.use('/course/',courseRoutes);
router.use('/theme/',themeRoutes);
router.use('/lecture/',lectureRoutes);

module.exports = router;