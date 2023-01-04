import { Request, Response, Router } from 'express';
import UserService from './services/UserService';

const router = Router();

const userService = new UserService();

router.get('/', (_req: Request, res: Response) => res.json({ ok: true }));

router.post('/login', async (req: Request, res: Response) => {
  const response = await userService.findUser(req.body);
  return res.status(200).json(response);
});

export default router;