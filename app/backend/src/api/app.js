const express = require('express');
const cors = require('cors');
const postRoute = require('../routes/post.route');
const userRoute = require('../routes/user.route');
require('express-async-errors');

const app = express();

app.use(cors());

app.use(express.static('public'));

app.use(express.json());

app.use('/posts', postRoute);
app.use('/', userRoute);

module.exports = app;
