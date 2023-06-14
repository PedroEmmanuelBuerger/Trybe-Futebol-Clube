import { Request, Router, Response } from 'express';
import UserController from '../controller/UserController';
import Validations from '../middlwares/LoginMiddle';

const UsersController = new UserController();

const router = Router();

router.post(
  '/',
  Validations.validateUser,
  (req: Request, res: Response) => UsersController.makeLogin(req, res),
);

export default router;
