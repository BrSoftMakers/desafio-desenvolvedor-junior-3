const { userSchema } = require('../../schemas');

module.exports = function userFieldsValidation(req, _res, next) {
  const { error } = userSchema.validate(req.body);
  if (error) {
    throw new Error(error.details[0].message);
  }
  return next();
};
