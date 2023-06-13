import { ICRUDModel } from '../Interfaces/ITeamsModel';
import TeamModel from '../model/TeamModel';
import { ITeams } from '../Interfaces/ITeams';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

export default class TeamService {
  constructor(
    private TeamsModel: ICRUDModel = new TeamModel(),
  ) { }

  public async getAllTeams(): Promise<ServiceResponse<ITeams[]>> {
    const allTeams = await this.TeamsModel.findAll();
    return { status: null, data: allTeams };
  }

  public async getTeamId(id: number): Promise<ServiceResponse<ITeams>> {
    const team = await this.TeamsModel.findById(id);
    if (team) {
      return { status: null, data: team };
    }
    return { status: 404, data: { message: 'USER_NOT_FOUND' } };
  }
}
