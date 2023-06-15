const express = require('express');
const { createUser } = require('../controllers/user.controllers');

const router = express.Router();

router.post('/register', createUser);
router.post('/login', );

module.exports = router;
