import { IMatches } from './IMatches';

export interface ICRUDModelReader {
  findAll(): Promise<IMatches[]>,
}

export interface ICRUDUpdate {
  finishMatch(id: number): void;
}

export interface ICRUDModel
  extends
  ICRUDModelReader,
  ICRUDUpdate {}
