import { IMatches } from '../Interfaces/IMatches';

const teamsObj = {
  totalPoints: 0,
  totalGames: 0,
  totalVictories: 0,
  totalDraws: 0,
  totalLosses: 0,
  goalsFavor: 0,
  goalsOwn: 0,
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
  return team;
}

export default getTeamsInfoHome;
