const express = require('express');
const { addPost, getPost, deletePost, editPost } = require('../controllers/postController');
const route = express.Router()
const auth = require('../midlewares/adminAuth')


route.post('/posts', addPost)
route.get('/posts', getPost)
route.delete('/posts/:title', deletePost)
route.put('/posts/', editPost)


module.exports = route