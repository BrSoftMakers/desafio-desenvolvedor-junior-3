import { Router } from 'express';
import UserController from '../controllers/UserController';
import inputValidator from '../middlewares/inputValidator';
import validateToken from '../middlewares/validateToken';

const router = Router();

const userController = new UserController();

router.post('/register', inputValidator, userController.create);
router.post('/login', inputValidator, userController.find);
router.get('/validate', validateToken, userController.validate);

export default router;