import { Identifiable } from '.';

export interface IUsers extends Identifiable {
  username: string,
  role: string,
  email: string,
  password: string,
}
