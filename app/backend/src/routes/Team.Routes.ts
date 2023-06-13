import { Request, Router, Response } from 'express';
import TeamControler from '../controller/TeamController';

const TeamsControler = new TeamControler();

const router = Router();

router.get('/:id', (req: Request, res: Response) => TeamsControler.getTeam(req, res));
router.get('/', (req: Request, res: Response) => TeamsControler.getAllTeams(req, res));

export default router;
