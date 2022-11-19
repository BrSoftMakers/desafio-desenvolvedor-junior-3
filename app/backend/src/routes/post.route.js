const express = require('express');
const PostController = require('../controllers/Post.controller');
const {
  tokenValidation,
  postFieldsValidation,
  postExistenceCheck,
} = require('../middlewares/validations');

const postRoute = express.Router();

postRoute.use(tokenValidation);

postRoute.get('/:id', PostController.findById);
postRoute.get('/user', PostController.findByUser);
postRoute.get('/', PostController.findAll);
postRoute.post('/', postFieldsValidation, PostController.insert);

postRoute.put('/:id', postExistenceCheck, PostController.update);
postRoute.delete('/:id', postExistenceCheck, PostController.delete);

module.exports = postRoute;
