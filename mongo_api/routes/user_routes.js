const userRoutes = require('express').Router();
const UserController = require('../controller/userController');
const AuthMiddleware = require('../middleware/auth-middleware');
userRoutes.get('/read', AuthMiddleware.isAdmin, UserController.read);
userRoutes.post('/create', UserController.create);
userRoutes.post('/auth', UserController.auth);
userRoutes.put('/update/:id', AuthMiddleware.isAuth, UserController.update);
userRoutes.delete('/delete/:id', AuthMiddleware.isAuth, UserController.delete);

module.exports = userRoutes;