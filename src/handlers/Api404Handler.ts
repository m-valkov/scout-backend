import { Request } from 'express';
import { Api404Error } from '../exceptions/Api404';
import { Middleware } from '../interfaces/express';

export const Api404Handler: Middleware = (req: Request): void => {
  throw new Api404Error(`${req.url} not found`);
};
