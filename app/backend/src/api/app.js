const express = require('express');
const cors = require('cors');
require('express-async-errors');

const app = express();

app.use(cors());

app.use(express.static('public'));

app.use(express.json());

app.get('/', (_req, res) => res.status(200).end());

module.exports = app;
