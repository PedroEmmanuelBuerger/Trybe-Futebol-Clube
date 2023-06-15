import { Request, Response } from 'express';
import MatchesServices from '../service/MatchesService';

export default class MatchesController {
  constructor(
    private MatchsServices = new MatchesServices(),
  ) { }

  public async GetALlMatches(req: Request, res: Response) {
    const { inProgress } = req.query;
    const serviceResponse = await this.MatchsServices.getAllMatchs(inProgress as string);
    res.status(200).json(serviceResponse.data);
  }

  public async attFInishMatch(req: Request, res: Response) {
    const result = await this.MatchsServices.attFInishMatch(Number(req.params.id));

    res.status(200).json(result.data);
  }

  public async attMatch(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const result = await this.MatchsServices
      .attMatch(Number(id), Number(homeTeamGoals), Number(awayTeamGoals));
    res.status(200).json(result.data);
  }
}
