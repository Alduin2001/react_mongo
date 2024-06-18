const lectureRoutes = require('express').Router();
const LectureController = require('../controller/lectureController');
const AuthMiddleware = require('../middleware/auth-middleware');

lectureRoutes.post('/create/', AuthMiddleware.isTeacher, LectureController.create);
lectureRoutes.get('/read/', LectureController.read);
lectureRoutes.put('/update/:id', AuthMiddleware.isTeacher, LectureController.update);
lectureRoutes.delete('/delete/:id', AuthMiddleware.isTeacher, LectureController.delete);

module.exports = lectureRoutes;