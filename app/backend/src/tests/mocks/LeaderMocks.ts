const teamsArr = [
    {
        id: 1,
        teamName: "Internacional"
    },
    {
        id: 2,
        teamName: 'Grêmio'
    }
]

const matches = [
    {
      id: 1,
      homeTeamId: 1,
      homeTeamGoals: 1,
      awayTeamId:2,
      awayTeamGoals: 2,
      inProgress: false,
      homeTeam: {
        teamName: "Internacional"
      },
      awayTeam: {
        teamName: "Grêmio"
      }
    },
    {
        id: 2,
        homeTeamId: 2,
        homeTeamGoals: 2,
        awayTeamId:1,
        awayTeamGoals: 1,
        inProgress: false,
        homeTeam: {
          teamName: "Grêmio"
        },
        awayTeam: {
          teamName: "Internacional"
        }
      },{
        id: 3,
        homeTeamId: 2,
        homeTeamGoals: 1,
        awayTeamId:1,
        awayTeamGoals: 3,
        inProgress: false,
        homeTeam: {
          teamName: "Grêmio"
        },
        awayTeam: {
          teamName: "Internacional"
        }
      }

  ]

  const orderResult = [
    {
      name: 'Grêmio',
      totalPoints: 3,
      totalGames: 1,
      totalVictories: 1,
      totalDraws: 0,
      totalLosses: 0,
      goalsFavor: 2,
      goalsOwn: 1,
      goalsBalance: 1,
      efficiency: '100.00'
    },
    {
      name: 'Internacional',
      totalPoints: 0,
      totalGames: 1,
      totalVictories: 0,
      totalDraws: 0,
      totalLosses: 1,
      goalsFavor: 1,
      goalsOwn: 2,
      goalsBalance: -1,
      efficiency: '0.00'
    }
  ]

  const orderResultHome = [
    {
      name: 'Grêmio',
      totalPoints: 3,
      totalGames: 1,
      totalVictories: 1,
      totalDraws: 0,
      totalLosses: 0,
      goalsFavor: 2,
      goalsOwn: 1,
      goalsBalance: 1,
      efficiency: '100.00'
    },
    {
      name: 'Internacional',
      totalPoints: 0,
      totalGames: 1,
      totalVictories: 0,
      totalDraws: 0,
      totalLosses: 1,
      goalsFavor: 1,
      goalsOwn: 2,
      goalsBalance: -1,
      efficiency: '0.00'
    }
]

  const orderResultAway = [
    {
      name: 'Internacional',
      totalPoints: 3,
      totalGames: 2,
      totalVictories: 1,
      totalDraws: 0,
      totalLosses: 1,
      goalsFavor: 4,
      goalsOwn: 3,
      goalsBalance: 1,
      efficiency: '50.00'
    },
    {
      name: 'Grêmio',
      totalPoints: 3,
      totalGames: 1,
      totalVictories: 1,
      totalDraws: 0,
      totalLosses: 0,
      goalsFavor: 2,
      goalsOwn: 1,
      goalsBalance: 1,
      efficiency: '100.00'
    }
  ]

export default {
    teamsArr,
    matches,
    orderResult,
    orderResultHome,
    orderResultAway,
}