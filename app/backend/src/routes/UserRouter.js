const { Router } = require('express');
const validateJWT = require('../authentication/validateJWT');
const UserController = require('../controller/UsersController');
const PostController = require('../controller/PostController');
const { validateLogin, validateCreateUser } = require('../middleware/UserError');
const { validPostFileds, validId } = require('../middleware/PostErro');

const router = Router();

router.post('/login', validateLogin, UserController.login);
router.post('/register', validateCreateUser, UserController.insertUser);
router.post('/posts', validateJWT, validPostFileds, PostController.insertPost);
router.put('/posts/:id', validateJWT, validPostFileds, validId, PostController.updatePost);
router.get('/posts', validateJWT, PostController.listPost);
router.get('/posts/:id', validateJWT, PostController.listPostId);
router.delete('/posts/:id', validateJWT, validId, PostController.deletePost);

module.exports = router;