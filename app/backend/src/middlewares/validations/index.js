const userFieldsValidation = require('./user/userFields.validation');
const userExistenceCheck = require('./user/userExistence.validation');
const postExistenceCheck = require('./post/postExistence.validation');
const postFieldsValidation = require('./post/postFields.validation');
const tokenValidation = require('./user/token.validation');

module.exports = {
  userFieldsValidation,
  userExistenceCheck,
  postExistenceCheck,
  postFieldsValidation,
  tokenValidation,
};
