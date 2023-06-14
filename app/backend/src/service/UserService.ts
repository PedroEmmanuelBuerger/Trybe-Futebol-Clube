import { ICRUDModel } from '../Interfaces/IUsersModels';
import UserModel from '../model/UserModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { LoginBody } from '../Interfaces/LoginBody';
import { IToken } from '../Interfaces/IToken';
import jwtUtil from '../utils/jwt.util';

export default class UserService {
  constructor(
    private UsersModel: ICRUDModel = new UserModel(),
  ) { }

  public async loginService(body: LoginBody): Promise<ServiceResponse<IToken>> {
    const user = await this.UsersModel.findByPk(body.email);
    if (!user) {
      return { status: 404, data: { message: 'USER_NOT_FOUND' } };
    }
    const token = jwtUtil.sign({ id: user.id });
    return { status: null, data: { token } };
  }
}
