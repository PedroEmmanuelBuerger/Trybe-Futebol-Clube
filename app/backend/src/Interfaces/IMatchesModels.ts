import { IMatches } from './IMatches';

export interface ICRUDModelReader {
  findAll(): Promise<IMatches[]>,
}

export type ICRUDModel = ICRUDModelReader;
