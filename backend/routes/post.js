const express = require('express');
const { addPost, getPost, deletePost } = require('../controllers/postController');
const route = express.Router()


route.post('/posts', addPost)
route.get('/posts', getPost)
route.delete('/posts/:title', deletePost)


module.exports = route