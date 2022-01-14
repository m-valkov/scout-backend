import { Request, RequestHandler } from 'express';
import { Api404Error } from '../exceptions/Api404';

export const Api404Handler: RequestHandler = (req: Request): void => {
  throw new Api404Error(`${req.url} not found`);
};
