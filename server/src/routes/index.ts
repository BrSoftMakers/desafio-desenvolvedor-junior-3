import { Request, Response, Router } from 'express';
import validateToken from '../middlewares/validateToken';
import PostsService from '../services/PostsService';
import UserRouters from './UserRoutes';

const router = Router();

const service = new PostsService();

// router.get('/', (_req: Request, res: Response) => res.json({ ok: true }));

router.get(
  '/', 
  validateToken,
  async (req: Request, res: Response) => {
    const { orderByAsc, filterByUser } = req.query;
    if (filterByUser) {
      const userId = res.locals.user.id;
      const response = await service.readByUser(!!orderByAsc, userId); 
      return res.status(200).json(response);
    }
    const response = await service.read(!!orderByAsc); 
    return res.status(200).json(response);
  },
);
router.get(
  '/:id', 
  validateToken,
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const response = await service.readOne(Number(id)); 
    return res.status(200).json(response);
  },
);
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