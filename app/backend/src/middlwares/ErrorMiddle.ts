import { NextFunction, Request, Response } from 'express';

interface CustomError extends Error {
  status?: number;
}

export default class ErrorMiddleware {
  static handle(err: CustomError, _req: Request, res: Response, _next: NextFunction) {
    const status = err.status || 500;
    return res.status(status).json({ message: err.message });
  }
}
