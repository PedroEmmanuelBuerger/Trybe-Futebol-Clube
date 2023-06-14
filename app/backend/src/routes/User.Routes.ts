import { Request, Router, Response } from 'express';
import UserController from '../controller/UserController';
import Validations from '../middlwares/LoginMiddle';
import validateToken from '../middlwares/TokkenMiddle';
import { ITokenObjRes } from '../Interfaces/ITokenObjRes';

const UsersController = new UserController();

const router = Router();

router.post(
  '/',
  Validations.validateUser,
  Validations.validateEmail,
  Validations.validatePassword,
  (req: Request, res: Response) => UsersController.makeLogin(req, res),
);

router.get(
  '/role',
  validateToken.validateToken,
  (req: Request, res: Response) => UsersController.getRole(req, res),
);

export default router;
