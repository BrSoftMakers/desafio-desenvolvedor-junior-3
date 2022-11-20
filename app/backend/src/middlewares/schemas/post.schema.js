const Joi = require('joi');

module.exports = Joi.object({
  userId: Joi.number().min(1).required().messages({
    'any.required': 'userIdIsRequired',
    'number.min': 'userIdMinLength',
  }),
  title: Joi.string().min(10).empty('').required().messages({
    'any.required': 'titleIsRequired',
    'string.min': 'titleMinLength',
    'string.empty': 'titleMinLength',
  }),
  content: Joi.string().min(20).empty('').required().messages({
    'any.required': 'contentIsRequired',
    'string.min': 'contentMinLength',
    'string.empty': 'contentMinLength',
  }),
});
