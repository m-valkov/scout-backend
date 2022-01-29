import { RequestHandler, Request, Response } from 'express';
import { HttpStatusCode } from '../configurations/HttpStatusCode';
import { ResponseMessage } from '../types/responses';

export const HealthCheckHandler: RequestHandler = (req: Request, res: Response): void => {
  const responseMessage: ResponseMessage = {
    status: 'OK',
    data: {
      message: 'Alive',
    },
  };
  res.status(HttpStatusCode.OK).json(responseMessage);
};
