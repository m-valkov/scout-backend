import { NextFunction, Request, Response } from 'express';
import { Api404Error } from '../exceptions/Api404';
import { Middleware } from '../interfaces/express';

export const Api404Handler: Middleware = (req: Request, _res: Response, next: NextFunction): void => {
  const err = new Api404Error(`${req.url} :: route not found`);
  next(err);
};
