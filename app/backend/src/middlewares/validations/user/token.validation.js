const jwt = require('jsonwebtoken');
require('dotenv/config');

const secret = process.env.JWT_SECRET || 'jwt_secret';

module.exports = async function tokenValidation(req, _res, next) {
  const { authorization: token } = req.headers;
  if (!token) return next(new Error('tokenNotFound'));

  const verifyToken = jwt.verify(token, secret);
  if (!verifyToken) return next(new Error('invalidToken'));

  req.permission = { id: verifyToken.data.id };
  next();
};
