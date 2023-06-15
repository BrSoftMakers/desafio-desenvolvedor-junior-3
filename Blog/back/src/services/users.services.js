const { UserModel } = require('../models');
const { validateUser } = require('../middleware/validateUser.middleware');
const httpStatus = require('http-status');

const createUserService = async (userData) => {
  const { displayName, email, password } = userData;
  const userIsValid = validateUser(userData);

  if (userIsValid.status !== httpStatus.OK) {
    return userIsValid;
  }

  const user = await UserModel.create({ displayName, email, password });

  return user;
};

module.exports = {
  createUserService,
}
