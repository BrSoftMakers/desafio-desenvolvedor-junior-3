const jwt = require('jsonwebtoken');
const fs = require('fs');

require('dotenv').config();

const secret = fs.readFileSync('./jwt.evaluation.key');

const jwtConfig = {
  expiresIn: '10000min',
  algorithm: 'HS256',
};

const createToken = (user) => {
  const token = jwt.sign(user, secret, jwtConfig);

  return token;
};

const verifyToken = (token) => {
  try {
    const payload = jwt.verify(token, secret);
    return payload;
  } catch (error) {
    return { isError: true, error };
  }
};

module.exports = {
  createToken,
  verifyToken,
};