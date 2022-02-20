import { RequestHandler, Request, Response } from 'express';
import { HttpStatusCode } from '../configurations/HttpStatusCode';
import { ResponseMessage } from '../types/responses';

export const HelloHandler: RequestHandler = (
  req: Request,
  res: Response,
): void => {
  const responseMessage: ResponseMessage = {
    status: 'OK',
    data: {
      statusCode: HttpStatusCode.OK,
      message: 'Hello World!',
    },
  };
  res.status(HttpStatusCode.OK).json(responseMessage);
};
