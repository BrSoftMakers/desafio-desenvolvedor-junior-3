const jwt = require('jsonwebtoken');
const httpStatus = require('http-status');
const User = require('../models');
require('dotenv').config();

const SECRET = process.env.JWT_SECRET;

const validateToken = async (token) => {
    if (!token) {
        return { status: httpStatus.UNAUTHORIZED, message: 'Token not found' };
    }

    try {
        const decoded = jwt.verify(token, SECRET);
        return { status: httpStatus.OK, message: 'Token is valid', decoded };
    } catch (error) {
        return { status: httpStatus.UNAUTHORIZED, message: 'Token is invalid' };
    }
};

const validateJwt = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const decoded = await validateToken(authorization);

        if (decoded.status === httpStatus.UNAUTHORIZED) {
            return res.status(decoded.status).json({ message: decoded.message });
        }

        const user = await User.findOne({ where: { email: decoded.decoded.email } });

        req.user = user;
        next();
    } catch (error) {
        console.log(error.message);
        return res.status(httpStatus.UNAUTHORIZED).json({ message: 'Token is invalid' });
    }
};

module.exports = validateJwt;
