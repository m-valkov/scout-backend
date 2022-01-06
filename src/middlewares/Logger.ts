import { Request, Response, NextFunction, RequestHandler } from 'express';

export const Logger: RequestHandler = (req: Request, res: Response, next: NextFunction): void => {
  console.log(req.url);
  next();
};
