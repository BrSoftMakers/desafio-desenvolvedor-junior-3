const express = require('express');
const { addPost, getPost, deletePost, editPost, viewPost } = require('../controllers/postController');
const route = express.Router()



route.post('/posts', addPost)
route.get('/posts', getPost)
route.delete('/posts/:title', deletePost)
route.put('/posts/', editPost)
route.get('/posts/:id', viewPost)


module.exports = route