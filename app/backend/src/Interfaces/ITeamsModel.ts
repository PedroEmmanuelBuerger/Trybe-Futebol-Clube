import { ITeams } from './ITeams';

export interface ICRUDModelReader {
  findAll(): Promise<ITeams[]>,
  findById(id: number): Promise<ITeams | null>,
}

export type ICRUDModel = ICRUDModelReader;
