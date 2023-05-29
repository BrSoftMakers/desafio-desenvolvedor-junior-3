const express = require('express');
const route = express.Router()

const { registerUser } = require('../controllers/userController');


route.post('/register', registerUser)

module.exports = route