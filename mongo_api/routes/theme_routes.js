const themeRoutes = require('express').Router();
const ThemeController = require('../controller/themeController');

themeRoutes.post('/create/', ThemeController.create);
themeRoutes.get('/read/', ThemeController.read);
themeRoutes.put('/update/:id', ThemeController.update);
themeRoutes.delete('/delete/:id', ThemeController.delete);

module.exports = themeRoutes;