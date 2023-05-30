const express = require('express');
const { addPost, getPost } = require('../controllers/postController');
const route = express.Router()


route.post('/posts', addPost)


route.get('/posts', getPost)


module.exports = route