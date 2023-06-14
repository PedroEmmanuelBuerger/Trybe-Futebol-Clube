import { Request, Response } from 'express';
import UserService from '../service/UserService';

export default class UserController {
  constructor(
    private UsersService = new UserService(),
  ) { }

  public async makeLogin(req: Request, res: Response) {
    const serviceResponse = await this.UsersService.loginService(req.body);
    if (serviceResponse.status) {
      return res.status(serviceResponse.status).json(serviceResponse.data);
    }
    res.status(200).json(serviceResponse.data);
  }
}
