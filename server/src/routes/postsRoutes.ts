import { Router } from 'express';
import PostsController from '../controllers/PostsController';
import validateToken from '../middlewares/validateToken';

const router = Router();

const userController = new PostsController();

router.post('/', validateToken, userController.create);
router.get('/', validateToken, userController.read);
router.get('/:id', validateToken, userController.readOne);
router.delete('/:id', validateToken, userController.delete);

export default router;