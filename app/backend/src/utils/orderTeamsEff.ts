import { ITeamsInfo } from '../Interfaces/ITeamsInfo';

function drawOrder(teamone: ITeamsInfo, teamtwo: ITeamsInfo): number {
  if (teamone.totalVictories > teamtwo.totalVictories) {
    return -1;
  }
  if (teamone.goalsBalance > teamtwo.goalsBalance) {
    return -1;
  }
  if (teamone.goalsFavor > teamtwo.goalsFavor) {
    return -1;
  }
  return 1;
}

function orderTeams(teams:ITeamsInfo[]) : ITeamsInfo[] {
  teams.sort((a, b) => {
    if (a.totalPoints < b.totalPoints) {
      return 1;
    } if (a.totalPoints > b.totalPoints) {
      return -1;
    }
    return drawOrder(a, b);
  });
  return teams;
}

export default orderTeams;
