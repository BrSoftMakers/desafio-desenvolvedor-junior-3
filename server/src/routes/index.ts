import { Request, Response, Router } from 'express';
import validateToken from '../middlewares/validateToken';
import PostsService from '../services/PostsService';
import UserRouters from './UserRoutes';

const router = Router();

const service = new PostsService();

router.get('/', (_req: Request, res: Response) => res.json({ ok: true }));

router.post(
  '/', 
  validateToken,
  async (req: Request, res: Response) => {
    const userId = res.locals.user.id;
    const response = await service.create(userId, req.body); 
    return res.status(201).json(response);
  },
);

router.use('/', UserRouters);

export default router;