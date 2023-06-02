const express = require('express');
const route = express.Router()

const { registerUser, login, verifyToken, logout } = require('../controllers/userController');


route.post('/register', registerUser)
route.post('/login', login)
route.get('/logout', logout)

route.post('/isToken', verifyToken);

module.exports = route