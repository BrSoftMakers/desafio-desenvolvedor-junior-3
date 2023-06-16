const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { createUser, loginUser, getAllUsers } = require('./controllers/user.controllers');
const {
    createPost,
    getPosts,
    updatePost,
    deletePost,
    getPostById,
} = require('./controllers/post.controller');
// const authMiddleware = require('./middleware/authMiddleware');

const app = express();

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/register', createUser);
app.post('/login', loginUser);
app.get('/users', getAllUsers);

app.post('/posts', createPost);
app.get('/posts', getPosts);
app.get('/posts/:id', getPostById);
app.put('/posts/:id', updatePost);
app.delete('/posts/:id', deletePost);
module.exports = app;
