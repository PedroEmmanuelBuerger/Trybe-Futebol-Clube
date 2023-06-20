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

const reqPost = {
  homeTeamId: 1, // O valor deve ser o id do time
  awayTeamId: 2, // O valor deve ser o id do time
  homeTeamGoals: 0,
  awayTeamGoals: 1
};

const teamone = {
  id: 1,
  teamName: "Avaí/Kindermann"
}

const teamtwo = {
  id: 2,
  teamName: "Bahia"
}

const newMatchRes = {
  id: 1,
  homeTeamId: 1,
  homeTeamGoals: 0,
  awayTeamId: 2,
  awayTeamGoals: 1,
  inProgress: true,
}

const reqpostError = {
  homeTeamId: 1, // O valor deve ser o id do time
  awayTeamId: 1, // O valor deve ser o id do time
  homeTeamGoals: 0,
  awayTeamGoals: 1
}

const updateMatch = {
    homeTeamGoals: 3,
    awayTeamGoals: 1
}

const errorMsg = { message: 'It is not possible to create a match with two equal teams' }

const noUserMsg = { message: 'There is no team with such id!' }

const tokenmsg = { message: 'Token not found' }

const sucessNewMsg = { message: 'Update' }

const finishMsg = { message: 'finished' }

export default {
  matches,
  finishMatch,
  reqPost,
  teamone,
  teamtwo,
  newMatchRes,
  reqpostError,
  errorMsg,
  noUserMsg,
  tokenmsg,
  updateMatch,
  sucessNewMsg,
  finishMsg,
}