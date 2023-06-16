import { Request, Router, Response } from 'express';
import LeaderBoardCOntroller from '../controller/LeaderBoardController';

const LeadBoardCOntroller = new LeaderBoardCOntroller();

const router = Router();

router.get('/home', (req: Request, res: Response) => LeadBoardCOntroller
  .getTeamsInfoHome(req, res));

router.get('/away', (req: Request, res: Response) => LeadBoardCOntroller
  .getTeamsInfoAway(req, res));

export default router;
