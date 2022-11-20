module.exports = {
  userAlreadyExists: {
    status: 409,
    message: 'Uma pessoa usuária com esse email já existe no banco de dados!',
  },
  nameIsRequired: {
    status: 400,
    message: 'Nome(name) é obrigatório para cadastrar pessoa usuária.',
  },
  nameMinLength: {
    status: 400,
    message: 'Nome(name) deve ter ao menos 5 caracteres',
  },
  emailIsRequired: {
    status: 400,
    message: 'Email é obrigatório para cadastrar pessoa usuária.',
  },
  invalidEmail: {
    status: 400,
    message: 'Email inválido',
  },
  passwordIsRequired: {
    status: 400,
    message: 'Senha(password) é obrigatório para cadastrar pessoa usuária.',
  },
  passwordMinLength: {
    status: 400,
    message: 'A senha(password) deve ter ao menos 6 caracteres',
  },
  userNotFound: {
    status: 404,
    message: 'Usuário não encontrado!',
  },
  userIdIsRequired: {
    status: 400,
    message: 'Campo userId é obrigatório.',
  },
  userIdMinLength: {
    status: 400,
    message: 'Campo userId deve ser maior que 0.',
  },
  titleIsRequired: {
    status: 400,
    message: 'Campo title é obrigatório.',
  },
  titleMinLength: {
    status: 400,
    message: 'Campo title deve ter ao menos 10 caracteres.',
  },
  contentIsRequired: {
    status: 400,
    message: 'Campo content é obrigatório.',
  },
  contentMinLength: {
    status: 400,
    message: 'Campo content deve ter ao menos 20 caracteres.',
  },
  postNotFound: {
    status: 404,
    message: 'Não foi encontrado nenhum post o id informado!',
  },
  thereAreNoPostsByThisUser: {
    status: 404,
    message: 'Essa pessoa usuária não possui posts no banco de dados.',
  },
  tokenNotFound: {
    status: 404,
    message: 'Token não encontrado, o envio do token é obrigatório.',
  },
  invalidToken: {
    status: 401,
    message: 'Token expirado ou inválido!',
  },
  unauthorizedUser: {
    status: 401,
    message: 'Usuário não tem permissão sobre este post!',
  },
};
