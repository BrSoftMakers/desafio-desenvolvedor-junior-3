const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string().min(5).empty('').required().messages({
    'any.required': 'nameIsRequired',
    'string.min': 'nameMinLength',
    'string.empty': 'nameMinLength',
  }),
  email: Joi.string().email().empty('').required().messages({
    'any.required': 'emailIsRequired',
    'string.email': 'invalidEmail',
    'string.empty': 'invalidEmail',
  }),
  password: Joi.string().min(6).empty('').required().messages({
    'any.required': 'passwordIsRequired',
    'string.min': 'passwordMinLength',
    'string.empty': 'passwordMinLength',
  }),
  role: Joi.string().optional(),
});
