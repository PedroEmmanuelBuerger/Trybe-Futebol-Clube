import { ICRUDModel } from '../Interfaces/IUsersModels';
import UserModel from '../model/UserModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { LoginBody } from '../Interfaces/LoginBody';
import { IToken } from '../Interfaces/IToken';
import jwtUtil from '../utils/jwt.util';
import Bcrypter from '../utils/Bcrypter.util';

export default class UserService {
  constructor(
    private UsersModel: ICRUDModel = new UserModel(),
    private encrypter: Bcrypter = new Bcrypter(),
  ) { }

  public async loginService(body: LoginBody): Promise<ServiceResponse<IToken>> {
    const user = await this.UsersModel.findByPk(body.email);
    if (!user) {
      return { status: 401, data: { message: 'Invalid email or password' } };
    }

    const verifyPassword = await this.encrypter.compare(body.password, user.password);
    if (!verifyPassword) {
      return { status: 401, data: { message: 'Invalid email or password' } };
    }
    const token = jwtUtil.sign({ id: user.id });
    return { status: null, data: { token } };
  }

  public async getRoleService(id: number): Promise<ServiceResponse<string>> {
    const user = await this.UsersModel.findById(id);
    if (!user) {
      return { status: 401, data: { message: 'USER_NOT_FOUND' } };
    }
    return { status: null, data: user.role };
  }
}
