import { ITeamsInfo } from '../Interfaces/ITeamsInfo';

function drawOrder(a: ITeamsInfo, b: ITeamsInfo): number {
  if (a.totalVictories > b.totalVictories) {
    return -1;
  } if (a.totalVictories < b.totalVictories) {
    return 1;
  }
  if (a.goalsBalance > b.goalsBalance) {
    return -1;
  } if (a.goalsBalance < b.goalsBalance) {
    return 1;
  }
  if (a.goalsFavor > b.goalsFavor) {
    return -1;
  } if (a.goalsFavor < b.goalsFavor) {
    return 1;
  }
  return 0;
}

function orderTeams(teams: ITeamsInfo[]): ITeamsInfo[] {
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
