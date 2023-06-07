const express = require('express');
const userRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter');
const postRouter = require('./routes/postRouter');

const app = express();

app.use(express.json());
app.use('/register', userRouter);
app.use('/login', loginRouter);
app.use('/posts', postRouter);

module.exports = app;