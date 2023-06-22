const jwtConfig = require('../auth/jwtConfig');
const validateLoginFields = require('../validations/validateLoginFields')

const validateLogin = (req, res, next) => {
  const validate = validateLoginFields(req.body);

  if(validate) return res.status(400).json(validate);

  next();
};

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  
  const secret = process.env.JWT_SECRET || 'segredoDoXablau';
  
  if (!authorization.length) return res.status(401).json({ message: 'Token not found' });
  
  const payload = jwtConfig.verifyToken(authorization, secret);

  if (payload.isError) return res.status(401).json({ message: 'Expired or invalid token' });

  next();
};

module.exports = {
  validateLogin,
  validateToken,
};