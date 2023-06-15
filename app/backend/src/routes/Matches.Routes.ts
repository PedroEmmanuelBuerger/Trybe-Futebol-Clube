import { Request, Router, Response } from 'express';
import MatchesController from '../controller/MatchesController';
import TokenMiddle from '../middlwares/TokkenMiddle';

const TeamsControler = new MatchesController();

const router = Router();

router.get('/', (req: Request, res: Response) => TeamsControler.GetALlMatches(req, res));

router.patch(
  '/:id/finish',
  TokenMiddle.validateToken,
  (req: Request, res: Response) => TeamsControler.attFInishMatch(req, res),
);

export default router;
