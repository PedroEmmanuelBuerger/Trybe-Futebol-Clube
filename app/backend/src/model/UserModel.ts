import { NewEntity } from '../Interfaces';
import { ICRUDModel } from '../Interfaces/IUsersModels';
import SequelizeUsers from '../database/models/SequelizeUsers';
import { IUsers } from '../Interfaces/IUsers';

export default class UserModel implements ICRUDModel {
  private model = SequelizeUsers;

  async log(data: NewEntity<IUsers>): Promise<void> {
    await this.model.create(data);
  }

  async findByPk(email: string): Promise<IUsers | null> {
    const user = await this.model.findOne({ where: { email } });
    if (!user) {
      return null;
    }
    const { id, username, role, password }: IUsers = user;
    return { id, username, role, email, password };
  }

  async findById(id: number): Promise<IUsers | null> {
    const user = await this.model.findOne({ where: { id } });
    if (!user) {
      return null;
    }
    const { username, role, email, password }: IUsers = user;
    return { id, username, role, email, password };
  }
}
