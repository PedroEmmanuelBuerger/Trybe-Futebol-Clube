import { ICRUDModel } from '../Interfaces/IMatchesModels';
import { ICRUDModelT } from '../Interfaces/ITeamsModel';
import MatchesModel from '../model/MatchesModel';
import TeamModel from '../model/TeamModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { ITeamsInfo } from '../Interfaces/ITeamsInfo';
import { getTeamsInfoHome, getTeamsInfoAway, getAllTeamsBoard } from '../utils/getTeamsInfo';
import orderTeams from '../utils/orderTeamsEff';

export default class LeaderBoardService {
  constructor(
    private MatchsModel: ICRUDModel = new MatchesModel(),
    private TeamsModel: ICRUDModelT = new TeamModel(),
  ) { }

  public async getTeamsInfoHome(claf: string): Promise<ServiceResponse<ITeamsInfo[]>> {
    const allTeams = await this.TeamsModel.findAll(); const m = await this.MatchsModel.findAll();
    const newMatchs = m.filter((match) => match.inProgress === false);
    if (claf === 'home') {
      const teamsinfo = allTeams.map((team) => {
        const infos = getTeamsInfoHome(team.id, team.teamName, newMatchs); return infos;
      });
      const result = orderTeams(teamsinfo); return { status: null, data: result };
    }
    if (claf === 'away') {
      const teamsinfo = allTeams.map((team) => {
        const infos = getTeamsInfoAway(team.id, team.teamName, newMatchs); return infos;
      });
      const result = orderTeams(teamsinfo); return { status: null, data: result };
    }
    const teamsinfo = allTeams.map((team) => {
      const infos = getAllTeamsBoard(team.id, team.teamName, newMatchs); return infos;
    });
    const result = orderTeams(teamsinfo); return { status: null, data: result };
  }
}
