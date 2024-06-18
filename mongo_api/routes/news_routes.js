const newsRouter = require('express').Router();
const NewsController = require('../controller/newsController');
const AuthMiddleware = require('../middleware/auth-middleware');

newsRouter.post('/create',AuthMiddleware.isModerator,NewsController.create);
newsRouter.get('/read',NewsController.read);
newsRouter.put('/update/:id',AuthMiddleware.isModerator,NewsController.update);
newsRouter.delete('/delete/:id',AuthMiddleware.isModerator,NewsController.delete);

module.exports = newsRouter;
