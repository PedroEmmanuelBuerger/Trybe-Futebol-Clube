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

function verifyWIn(claf:string, match:IMatches): number {
  if (claf === 'home') {
    if (match.homeTeamGoals > match.awayTeamGoals) {
      return 1;
    }
    return 0;
  }
  if (match.awayTeamGoals > match.homeTeamGoals) {
    return 1;
  }
  return 0;
}

function verifyLose(claf:string, match:IMatches): number {
  if (claf === 'home') {
    if (match.homeTeamGoals < match.awayTeamGoals) {
      return 1;
    }
    return 0;
  }
  if (match.awayTeamGoals < match.homeTeamGoals) {
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

function getTeamsInfoHome(teamId: number, teamName: string, matches: IMatches[], obj = teamsObj) {
  const teamMatchesHome = matches.filter((team) => team.homeTeamId === teamId);
  const team = {
    name: teamName,
    ...obj,
  };
  teamMatchesHome.forEach((t) => {
    team.totalGames += 1;
    team.goalsFavor += t.homeTeamGoals;
    team.goalsOwn += t.awayTeamGoals;
    team.totalVictories += verifyWIn('home', t);
    team.totalLosses += verifyLose('home', t);
    team.totalDraws += verifyDraw(t);
  });
  team.totalPoints += (team.totalVictories * 3);
  team.totalPoints += team.totalDraws;
  team.goalsBalance = team.goalsFavor - team.goalsOwn;
  team.efficiency = calcPorcent(team.totalPoints, team.totalGames);
  return team;
}

function getTeamsInfoAway(teamId: number, teamName: string, matches: IMatches[], obj = teamsObj) {
  const TeamMatchsAway = matches.filter((team) => team.awayTeamId === teamId);
  const team = {
    name: teamName,
    ...obj,
  };
  TeamMatchsAway.forEach((t) => {
    team.totalGames += 1;
    team.goalsFavor += t.awayTeamGoals;
    team.goalsOwn += t.homeTeamGoals;
    team.totalVictories += verifyWIn('away', t);
    team.totalLosses += verifyLose('away', t);
    team.totalDraws += verifyDraw(t);
  });
  team.totalPoints += (team.totalVictories * 3);
  team.totalPoints += team.totalDraws;
  team.goalsBalance = team.goalsFavor - team.goalsOwn;
  team.efficiency = calcPorcent(team.totalPoints, team.totalGames);
  return team;
}

function getAllTeamsBoard(teamId: number, teamName: string, matches: IMatches[]) {
  const teamPointH = getTeamsInfoHome(teamId, teamName, matches);
  const teamPointA = getTeamsInfoAway(teamId, teamName, matches);

  const newObj = { name: teamName, ...teamsObj };
  newObj.totalGames = teamPointH.totalGames + teamPointA.totalGames;
  newObj.goalsFavor = teamPointH.goalsFavor + teamPointA.goalsFavor;
  newObj.goalsOwn = teamPointH.goalsOwn + teamPointA.goalsOwn;
  newObj.totalVictories = teamPointH.totalVictories + teamPointA.totalVictories;
  newObj.totalLosses = teamPointH.totalLosses + teamPointA.totalLosses;
  newObj.totalDraws = teamPointH.totalDraws + teamPointA.totalDraws;
  newObj.totalPoints = teamPointH.totalPoints + teamPointA.totalPoints;
  newObj.goalsBalance = teamPointH.goalsBalance + teamPointA.goalsBalance;
  newObj.efficiency = calcPorcent(newObj.totalPoints, newObj.totalGames);

  return newObj;
}

export { getTeamsInfoAway, getTeamsInfoHome, getAllTeamsBoard };
