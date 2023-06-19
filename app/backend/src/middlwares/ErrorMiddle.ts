import { NextFunction, Request, Response } from 'express';

interface CustomError extends Error {
  status: number;
}

export default class ErrorMiddleware {
  static handle(err: CustomError, _req: Request, res: Response, _next: NextFunction) {
    return res.status(err.status).json({ message: err.message });
  }
}
