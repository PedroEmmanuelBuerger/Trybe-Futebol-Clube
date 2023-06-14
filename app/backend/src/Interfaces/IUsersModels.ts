import { NewEntity } from '.';
import { IUsers } from './IUsers';

export interface ICRUDModelCreator {
  log(data: NewEntity<IUsers>): Promise<void>,
}

export interface ICRUDModelFInd {
  findByPk(email: string): Promise<IUsers | null>,
}
export interface ICRUDModel
  extends
  ICRUDModelCreator,
  ICRUDModelFInd {}
