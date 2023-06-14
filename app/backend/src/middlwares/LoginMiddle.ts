import { NextFunction, Request, Response } from 'express';

class Validations {
  static validateUser(req: Request, res: Response, next: NextFunction): void {
    const user = req.body;
    if (!user.email || !user.password) {
      return next({ status: 400, message: 'All fields must be filled' });
    }

    return next();
  }
}

export default Validations;
