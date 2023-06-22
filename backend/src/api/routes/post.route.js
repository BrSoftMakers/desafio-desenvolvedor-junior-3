const { Router } = require('express');
const postController = require('../controllers/post.controller');
const { validateToken } = require('../middleware/login.validation');

const postRouter = Router();

postRouter.post('/create', validateToken, postController.createPost);

postRouter.get('/all', postController.getAllPosts);
postRouter.get('/:id', validateToken, postController.getPostById);

postRouter.put('/update/:id', validateToken, postController.updatePost);

postRouter.delete('/delete/:id', validateToken, postController.deletePost);

module.exports = {
  postRouter,
};
