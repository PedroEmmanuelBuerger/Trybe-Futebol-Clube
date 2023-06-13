import { Request, Response } from 'express';
import TeamService from '../service/TeamService';

export default class TeamController {
  constructor(
    private TeamsService = new TeamService(),
  ) { }

  public async getAllTeams(_req: Request, res: Response) {
    const serviceResponse = await this.TeamsService.getAllTeams();
    res.status(200).json(serviceResponse.data);
  }

  public async getTeam(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this.TeamsService.getTeamId(Number(id));
    if (serviceResponse.status) {
      return res.status(serviceResponse.status).json(serviceResponse.data);
    }
    res.status(200).json(serviceResponse.data);
  }
}
