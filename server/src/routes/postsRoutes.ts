import { Router } from 'express';
import PostsController from '../controllers/PostsController';
import validateToken from '../middlewares/validateToken';
import postValidator from '../middlewares/postValidator';

const router = Router();

const userController = new PostsController();

router.post('/', validateToken, userController.create);
router.get('/', validateToken, userController.read);
router.get('/:id', validateToken, userController.readOne);
router.put('/:id', validateToken, postValidator, userController.update);
router.delete('/:id', validateToken, userController.delete);

export default router;