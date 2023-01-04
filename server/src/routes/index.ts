import { Request, Response, Router } from 'express';
import validateToken from '../middlewares/validateToken';
import UserRouters from './UserRoutes';

const router = Router();

router.get(
  '/',
  validateToken,
  (_req: Request, res: Response) => res.json({ ok: true }),
);

router.use('/', UserRouters);

export default router;