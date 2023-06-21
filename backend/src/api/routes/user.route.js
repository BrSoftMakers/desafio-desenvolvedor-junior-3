const { Router } = require('express');
const {
  validateEmail,
  validatePassword,
  validateName,
  validateToken,
} = require('../middleware/login.validation');
const userController = require('../controllers/user.controller');

const userRouter = Router();

userRouter.get('/users', validateToken, userController.getAllUsers);
userRouter.get('/sellers', validateToken, userController.getSellers);
userRouter.get('/sellers/:id', validateToken, userController.getUserById);

userRouter.delete('/delete/:id', validateToken, userController.deleteUser);

userRouter.post('/login', validateEmail, validatePassword, userController.login);
userRouter.post('/', validateName,
  validateEmail, validatePassword, userController.createUser);

  userRouter.post('/adm', validateToken, validateName,
  validateEmail, validatePassword, userController.createUser);

module.exports = {
  userRouter,
};