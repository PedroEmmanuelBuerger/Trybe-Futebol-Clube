import { Router } from 'express';
import TeamRouter from './Team.Routes';
import UserRouter from './User.Routes';

const router = Router();

router.use('/teams', TeamRouter);
router.use('/login', UserRouter);

export default router;
