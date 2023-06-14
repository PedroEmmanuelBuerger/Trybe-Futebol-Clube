import { Request, Response } from 'express';
import MatchesServices from '../service/MatchesService';

export default class MatchesController {
  constructor(
    private MatchsServices = new MatchesServices(),
  ) { }

  public async GetALlMatches(_req: Request, res: Response) {
    const serviceResponse = await this.MatchsServices.getAllMatchs();
    res.status(200).json(serviceResponse.data);
  }
}
