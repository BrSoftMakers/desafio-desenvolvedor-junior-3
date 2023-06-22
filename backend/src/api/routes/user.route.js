const { Router } = require('express');
const { validateLogin } = require('../middleware/login.validation');
const userController = require('../controllers/user.controller');

const userRouter = Router();

userRouter.post('/login', validateLogin, userController.login);
userRouter.post('/register', validateLogin, userController.createUser);

module.exports = {
  userRouter,
};