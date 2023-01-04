import { Request, Response, Router } from 'express';
import UserRouters from './UserRoutes';

const router = Router();

router.get('/', (_req: Request, res: Response) => res.json({ ok: true }));

router.use('/', UserRouters);

export default router;