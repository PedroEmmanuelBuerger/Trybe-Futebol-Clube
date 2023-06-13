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
}
