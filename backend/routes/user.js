const express = require('express');
const route = express.Router()

const { registerUser, login } = require('../controllers/userController');


route.post('/register', registerUser)
route.post('/login', login)

module.exports = route