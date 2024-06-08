const userRoutes = require('express').Router();
const UserController = require('../controller/userController');

userRoutes.get('/read',UserController.read);
userRoutes.post('/create', UserController.create);
userRoutes.post('/auth',UserController.auth);
userRoutes.put('/update/:id',UserController.update);
userRoutes.delete('/delete/:id', UserController.delete);

module.exports = userRoutes;