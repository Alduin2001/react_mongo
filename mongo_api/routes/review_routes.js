const reviewRoutes = require('express').Router();
const ReviewController = require('../controller/reviewController');

reviewRoutes.post('/create/',ReviewController.create);
reviewRoutes.get('/read/',ReviewController.read);
reviewRoutes.put('/read/:id',ReviewController.update);
reviewRoutes.delete('/delete/:id',ReviewController.delete);

module.exports = reviewRoutes;