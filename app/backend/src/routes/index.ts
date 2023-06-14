import { Router } from 'express';
import TeamRouter from './Team.Routes';
import UserRouter from './User.Routes';
import MatchesRouter from './Matches.Routes';

const router = Router();

router.use('/teams', TeamRouter);
router.use('/login', UserRouter);
router.use('/matches', MatchesRouter);
export default router;
