import { RequestHandler, Request, Response, NextFunction } from 'express';
import { HttpStatusCode } from '../../internal/configurations/HttpStatusCode';
import { BadRequestError } from '../../internal/exceptions/BadRequest';
import { ResponseMessage } from '../../internal/types/responses';
import { isEmpty, isUser } from './user.validators';
import { createNewUser } from './user.service';
import { IUser } from './user.model';

export const NewUser: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (isEmpty(req.body) || !isUser(req.body)) {
    const err = new BadRequestError('Is not valid payload');
    next(err);
    return;
  }

  const user: IUser = {
    name: req.body.name,
  };

  createNewUser(user)
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
