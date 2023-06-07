const express = require('express');
const usersController = require('../controllers/usersController');

const userRouter = express.Router();

userRouter.post('/', inputsValidation, usersController.register);

module.exports = userRouter;