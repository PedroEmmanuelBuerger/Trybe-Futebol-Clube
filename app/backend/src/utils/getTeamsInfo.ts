import { IMatches } from '../Interfaces/IMatches';

const teamsObj = {
  totalPoints: 0,
  totalGames: 0,
  totalVictories: 0,
  totalDraws: 0,
  totalLosses: 0,
  goalsFavor: 0,
  goalsOwn: 0,
  goalsBalance: 0,
  efficiency: '',
};

function verifyWIn(match:IMatches): number {
  if (match.homeTeamGoals > match.awayTeamGoals) {
    return 1;
  }
  return 0;
}

function verifyLose(match:IMatches): number {
  if (match.homeTeamGoals < match.awayTeamGoals) {
    return 1;
  }
  return 0;
}

function verifyDraw(match: IMatches): number {
  if (match.homeTeamGoals === match.awayTeamGoals) {
    return 1;
  }
  return 0;
}

function calcPorcent(points: number, games: number) : string {
  const eficiencia = ((points / (games * 3))) * 100;
  const arendodado = eficiencia.toFixed(2);
  return (`${arendodado}`);
}

function getTeamsInfoHome(teamId: number, teamName: string, matches: IMatches[]) {
  const teamMatchesHome = matches.filter((team) => team.homeTeamId === teamId);
  const team = {
    name: teamName,
    ...teamsObj,
  };

  teamMatchesHome.forEach((t) => {
    team.totalGames += 1;
    team.goalsFavor += t.homeTeamGoals;
    team.goalsOwn += t.awayTeamGoals;
    team.totalVictories += verifyWIn(t);
    team.totalLosses += verifyLose(t);
    team.totalDraws += verifyDraw(t);
  });

  team.totalPoints += (team.totalVictories * 3);
  team.totalPoints += team.totalDraws;
  team.goalsBalance = team.goalsFavor - team.goalsOwn;
  team.efficiency = calcPorcent(team.totalPoints, team.totalGames);
  return team;
}

export default getTeamsInfoHome;
