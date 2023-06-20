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
    }
  ]

export default {
    teamsArr,
    matches,
}