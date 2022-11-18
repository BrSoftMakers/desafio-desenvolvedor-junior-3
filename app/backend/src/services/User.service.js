const { User } = require('../database/models');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
require('dotenv/config');

const secret = process.env.JWT_SECRET || 'jwt_secret';

const UserService = {
  generateToken: (user) => {
    const token = jwt.sign({ data: user }, secret, {
      algorithm: 'HS256',
    });
    return token;
  },

  insert: async (newUser) => {
    const password = md5(newUser.password);
    const user = await User.create({ ...newUser, password });
    return user;
  },

};

module.exports = UserService;
