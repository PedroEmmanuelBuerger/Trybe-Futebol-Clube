import { NextFunction, Request, Response } from 'express';

class Validations {
  static validateUser(req: Request, res: Response, next: NextFunction): void {
    const user = req.body;
    if (!user.email || !user.password) {
      return next({ status: 400, message: 'All fields must be filled' });
    }

    return next();
  }

  static validateEmail(req: Request, _res: Response, next: NextFunction): void {
    const user = req.body;
    const emailRegex = /^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,3}$/;

    if (!emailRegex.test(user.email)) {
      return next({ status: 401, message: 'Invalid email or password' });
    }
    next();
  }

  static validatePassword(req: Request, _res: Response, next: NextFunction): void {
    const user = req.body;
    if (user.password.length < 6) {
      return next({ status: 401, message: 'Invalid email or password' });
    }
    next();
  }
}

export default Validations;
