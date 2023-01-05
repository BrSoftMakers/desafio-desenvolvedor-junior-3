import { Request, Response, Router } from 'express';
import userRouters from './UserRoutes';
import postsRoutes from './postsRoutes';

const router = Router();

router.get('/', (_req: Request, res: Response) => res.json({ ok: true }));

router.use('/', userRouters);
router.use('/posts', postsRoutes);

export default router;