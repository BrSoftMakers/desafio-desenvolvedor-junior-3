const UserService = require('../../../services/User.service');

module.exports = async function userExistenceCheck(req, _res, next) {
  const user = await UserService.verifyUser(req.body);
  if (!user) return next();
  throw new Error(user.message);
};
