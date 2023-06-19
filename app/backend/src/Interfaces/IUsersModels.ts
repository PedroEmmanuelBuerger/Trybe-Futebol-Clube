import { IUsers } from './IUsers';

export interface ICRUDModelFInd {
  findByPk(email: string): Promise<IUsers | null>,
  findById(id: number): Promise<IUsers | null>,
}

export type ICRUDModel = ICRUDModelFInd;
