const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const JWT = (email) => {
  const jwtConfig = {
    expiresIn: '10d',
    algorithm: 'HS256',
  };
  return jwt.sign({ data: email }, secret, jwtConfig);
};

module.exports = {
  JWT,
};