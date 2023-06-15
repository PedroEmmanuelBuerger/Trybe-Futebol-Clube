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
}
