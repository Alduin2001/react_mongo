const courseRoutes = require('express').Router();
const CourseController = require('../controller/courseController');
const AuthMiddleware = require('../middleware/auth-middleware');

courseRoutes.post('/create/', AuthMiddleware.isAdminOrTeacher, CourseController.create);
courseRoutes.get('/read/', CourseController.read);
courseRoutes.put('/update/:id', AuthMiddleware.isAdmin, CourseController.update);
courseRoutes.delete('/delete/:id', AuthMiddleware.isAdmin, CourseController.delete);

module.exports = courseRoutes;