const { User } = require('../models');
const { validateUser, validateEmail } = require('../middleware/validateUser.middleware');
const httpStatus = require('http-status');

const createUserService = async (userData) => {
  const { displayName, email, password } = userData;
  const userIsNotValid = validateUser(userData);

  if (userIsNotValid.status !== httpStatus.OK) return userIsNotValid;
  
  const user = await User.create({ displayName, email, password });

  return user;
};

const authenticateUserService = async (userData) => {
  const { email, password } = userData;
  
  const emailIsNotValid = validateEmail(email);
  const passwordIsNotValid = validatePassword(password);

  if (emailIsNotValid.status !== httpStatus.OK) return emailIsNotValid;
  if (passwordIsNotValid.status !== httpStatus.OK) return passwordIsNotValid;

  return { email, password }
};

module.exports = {
  createUserService,
  authenticateUserService,
}
