import { Request, Router, Response } from 'express';
import MatchesController from '../controller/MatchesController';

const TeamsControler = new MatchesController();

const router = Router();

router.get('/', (req: Request, res: Response) => TeamsControler.GetALlMatches(req, res));

export default router;
