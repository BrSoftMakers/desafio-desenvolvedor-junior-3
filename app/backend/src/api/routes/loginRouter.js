const express = require('express');
const usersController = require('../controllers/usersController');

const loginRouter = express.Router();

loginRouter.post('/', usersController.login);

module.exports = loginRouter;