const { postchema } = require('../../schemas');

module.exports = function postFieldsValidation(req, _res, next) {
  const { error } = postchema.validate(req.body);
  if (error) {
    throw new Error(error.details[0].message);
  }
  return next();
};
