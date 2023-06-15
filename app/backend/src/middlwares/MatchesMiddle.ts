import { NextFunction, Request, Response } from 'express';

class Validations {
  static validateTeams(req: Request, _res: Response, next: NextFunction): void {
    const { homeTeamId, awayTeamId } = req.body;
    if (homeTeamId === awayTeamId) {
      return next({ status: 422,
        message: 'It is not possible to create a match with two equal teams' });
    }
    next();
  }
}

export default Validations;
