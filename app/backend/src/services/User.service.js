const { User } = require('../database/models');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
require('dotenv/config');

const secret = process.env.JWT_SECRET || 'jwt_secret';

const UserService = {
};

module.exports = UserService;
