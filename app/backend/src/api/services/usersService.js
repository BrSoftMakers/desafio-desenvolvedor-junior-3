const jwt = require('jsonwebtoken');
const md5 = require('md5');
const { Users } = require('../../database/models');

const secret = 'secretJWT';

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const getById = async (id) => {
  const user = await Users.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  if (!user) return { type: 'INVALID_ID', message: 'User does not exist' };
  return user;
};

const register = async (newuser) => {
  const { email } = newuser;
  const getUserByEmail = await Users.findOne({ where: { email } });
  if (getUserByEmail) return { type: 'INVALID_EMAIL', message: 'User already registered' };

  const user = await Users.create(newuser);

  const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);

  const result = {
    id: user.id,
    name: user.name,
    email: user.email,
    token,
  };

  return result;
};

const login = async (email, password) => {
  const passwordHash = md5(password);
  const user = await Users.findOne({ where: { email } });
  
  if (!user || user.password !== passwordHash) {
    return { type: 'INVALID_FIELDS', message: 'Invalid fields' }; 
  }

  const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);

  const result = {
    id: user.id,
    name: user.name,
    email: user.email,
    token,
  };

  return result;
};

module.exports = {
  register,
  getById,
  login
};