const lectureRoutes = require('express').Router();
const LectureController = require('../controller/lectureController');

lectureRoutes.post('/create/',LectureController.create);
lectureRoutes.get('/read/',LectureController.read);
lectureRoutes.put('/update/:id',LectureController.update);
lectureRoutes.delete('/delete/:id',LectureController.delete);

module.exports = lectureRoutes;