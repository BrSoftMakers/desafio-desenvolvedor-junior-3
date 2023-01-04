import { Router } from 'express';
import UserController from '../controllers/UserController';
import inputValidator from '../middlewares/inputValidator';

const router = Router();

const userController = new UserController();

router.post('/register', inputValidator, userController.create);
router.post('/login', inputValidator, userController.find);

export default router;