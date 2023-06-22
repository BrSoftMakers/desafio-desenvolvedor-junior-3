const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.empty': 'O campo email é obrigatório!',
    'string.email': 'O email deve ser um email válido!'
  }),
  password: Joi.string().min(6).required().messages({
    'string.empty': 'O campo password é obrigatório!',
    'string.min': 'O compo password deve ter ao menos 6 caracteres!'
  }),
});

const validateLoginFields = (login) => {
  const { error } = loginSchema.validate(login);

  if(error) return error.details[0].message;
};

module.exports = validateLoginFields;