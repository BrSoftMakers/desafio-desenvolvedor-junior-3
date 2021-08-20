const express = require('express');
const router = express.Router();

router.use('/', require('./register'));
router.use('/', require('./login'));
router.use('/', require('./posts'));

module.exports = router