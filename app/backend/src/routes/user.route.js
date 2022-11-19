const express = require('express');
const UserController = require('../controllers/User.controller');
const {
  userExistenceCheck,
  userFieldsValidation,
} = require('../middlewares/validations');
require('express-async-errors');

const userRoute = express.Router();

userRoute.post('/login', UserController.login);

userRoute.post(
  '/register',
  userFieldsValidation,
  userExistenceCheck,
  UserController.register
);

module.exports = userRoute;
