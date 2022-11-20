const express = require('express');
const cors = require('cors');
const errorMiddleware = require('../middlewares/error.middleware');
const postRoute = require('../routes/post.route');
const userRoute = require('../routes/user.route');
require('express-async-errors');

const app = express();

app.use(cors());

app.use(express.static('public'));

app.use(express.json());

app.use('/posts', postRoute);
app.use('/', userRoute);

app.use(errorMiddleware);

module.exports = app;
