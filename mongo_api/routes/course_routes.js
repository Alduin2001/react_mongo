const courseRoutes = require('express').Router();
const CourseController = require('../controller/courseController');
const AuthMiddleware = require('../middleware/auth-middleware');

courseRoutes.post('/create/',AuthMiddleware.isAuth,CourseController.create);
courseRoutes.get('/read/',CourseController.read);
courseRoutes.put('/update/:id',CourseController.update);
courseRoutes.delete('/delete/:id',CourseController.delete);

module.exports = courseRoutes;