import { Request, Response } from 'express';
import LeaderBoardService from '../service/LeaderBoardService';

export default class LeaderController {
  constructor(
    private LeadBoardService = new LeaderBoardService(),
  ) { }

  public async getTeamsInfoHome(_req: Request, res: Response) {
    const infos = await this.LeadBoardService.getTeamsInfoHome();
    res.status(200).json(infos.data);
  }
}
