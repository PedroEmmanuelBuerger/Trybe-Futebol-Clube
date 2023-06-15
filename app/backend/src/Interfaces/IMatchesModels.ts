import { IMatches } from './IMatches';

export interface ICRUDModelReader {
  findAll(): Promise<IMatches[]>,
}

export interface ICRUDUpdate {
  finishMatch(id: number): void;
  updateMatch(id: number, homeG: number, awayG:number) : Promise<boolean>
}

export interface ICRUDAdd {
  addMatch(hid: number, aid: number, hg: number, ag: number) : Promise<IMatches>
}

export interface ICRUDModel
  extends
  ICRUDModelReader,
  ICRUDAdd,
  ICRUDUpdate {}
