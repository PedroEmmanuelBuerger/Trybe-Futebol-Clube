import { Router } from 'express';
import TeamRouter from './Team.Routes';

const router = Router();

router.use('/teams', TeamRouter);

export default router;
