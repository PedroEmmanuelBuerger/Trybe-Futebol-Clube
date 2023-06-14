import { Identifiable } from '.';

export interface IMatches extends Identifiable {
  homeTeamId: number,
  homeTeamGoals: number,
  awayTeamId: number,
  awayTeamGoals: number,
  inProgress: boolean
}
