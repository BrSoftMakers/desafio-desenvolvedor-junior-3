const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/user.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

module.exports = app;
