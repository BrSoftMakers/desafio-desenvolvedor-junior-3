const express = require('express');
const cors = require('cors');
const { userRouter } = require('./routes/user.route');
const { postRouter } = require('./routes/post.route');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', userRouter);

app.use('/post', postRouter);

module.exports = app;
