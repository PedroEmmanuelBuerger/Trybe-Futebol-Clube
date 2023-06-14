import { NextFunction, Request, Response } from 'express';
import jwtUtil from '../utils/jwt.util';

interface AuthenticatedRequest extends Request {
  token?: object;
}

class Validations {
  static validateToken(req: AuthenticatedRequest, _res: Response, next: NextFunction): void {
    const { authorization } = req.headers;
    if (!authorization) {
      return next({ status: 401, message: 'Token not found' });
    }
    try {
      const decodedToken = jwtUtil.verify(authorization);
      req.token = decodedToken;
      return next();
    } catch (e) {
      return next({ status: 401, message: 'Token must be a valid token' });
    }
  }
}

export default Validations;
