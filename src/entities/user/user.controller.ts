import { RequestHandler, Request, Response, NextFunction } from 'express';
import { HttpStatusCode } from '../../internal/configurations/HttpStatusCode';
import { BadRequestError } from '../../internal/exceptions/BadRequest';
import { ResponseMessage } from '../../internal/types/responses';
import { isValid } from './user.validators';
import { createNewUser } from './user.service';

export const NewUser: RequestHandler = (req: Request, res: Response, next: NextFunction,): void => {
  if (!isValid(req.body)) {
    const err = new BadRequestError('Is not valid payload');
    next(err);
    return;
  }

  createNewUser(req.body)
    .then(() => {
      const responseMessage: ResponseMessage = {
        status: 'OK',
        data: {
          statusCode: HttpStatusCode.OK,
          message: 'User created',
        },
      };
      res.status(HttpStatusCode.OK).json(responseMessage);
    })
    .catch(err => next(err));
};
