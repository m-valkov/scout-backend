import { RequestHandler, Request, Response } from 'express';
import { HttpStatusCode } from '../configurations/HttpStatusCode';

export const HelloHandler: RequestHandler = (req: Request, res: Response): void => {
  res.status(HttpStatusCode.OK).json({ status: HttpStatusCode.OK, data: { message: 'Hello World' } });
};
