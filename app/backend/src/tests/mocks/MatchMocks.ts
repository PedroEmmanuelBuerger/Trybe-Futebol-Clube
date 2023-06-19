const matches = [
    {
      id: 1,
      homeTeamId: 16,
      homeTeamGoals: 1,
      awayTeamId: 8,
      awayTeamGoals: 1,
      inProgress: false,
      homeTeam: {
        teamName: "São Paulo"
      },
      awayTeam: {
        teamName: "Grêmio"
      }
    },
]

const finishMatch = [
    {
        id: 1,
        homeTeamId: 16,
        homeTeamGoals: 1,
        awayTeamId: 8,
        awayTeamGoals: 1,
        inProgress: false,
        homeTeam: {
          teamName: "São Paulo"
        },
        awayTeam: {
          teamName: "Grêmio"
        }
      },
      {
        id: 2,
        homeTeamId: 3,
        homeTeamGoals: 0,
        awayTeamId: 4,
        awayTeamGoals: 1,
        inProgress: true,
        homeTeam: {
          teamName: "Internacional"
        },
        awayTeam: {
          teamName: "Palmeiras"
        }
      }, 
]

export default {
    matches,
    finishMatch,
}