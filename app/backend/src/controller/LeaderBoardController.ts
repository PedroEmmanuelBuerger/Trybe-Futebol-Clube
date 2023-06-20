import { Request, Response } from 'express';
import LeaderBoardService from '../service/LeaderBoardService';

export default class LeaderController {
  constructor(
    private LeadBoardService = new LeaderBoardService(),
  ) { }

  public async getTeamsInfoHome(_req: Request, res: Response) {
    const infos = await this.LeadBoardService.getTeamsInfoHome('home');
    res.status(200).json(infos.data);
  }

  public async getTeamsInfoAway(_req: Request, res: Response) {
    const infos = await this.LeadBoardService.getTeamsInfoHome('away');
    console.log(infos);
    res.status(200).json(infos.data);
  }

  public async getTeamsAll(_req: Request, res: Response) {
    const infos = await this.LeadBoardService.getTeamsInfoHome('all');
    res.status(200).json(infos.data);
  }
}
