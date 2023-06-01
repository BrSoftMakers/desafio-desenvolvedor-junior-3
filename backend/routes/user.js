const express = require('express');
const route = express.Router()

const { registerUser, login, verifyToken } = require('../controllers/userController');


route.post('/register', registerUser)
route.post('/login', login)

route.post('/isToken', verifyToken);

module.exports = route