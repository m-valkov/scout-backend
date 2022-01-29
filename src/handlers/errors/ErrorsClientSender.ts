import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { BaseError } from '../../exceptions/BaseError';
import { ResponseMessage } from '../../types/responses';

export const ErrorClientSender: ErrorRequestHandler = (err: BaseError, _req: Request, res: Response, next: NextFunction): void => {
  const responseMessage: ResponseMessage = {
    status: 'FAIL',
    error: {
      statusCode: err.statusCode || 500,
      description: err.description || 'Uncaught Exception',
      message: err.message || 'Contact the developer!',
    },
  };
  res.status(err.statusCode || 500).json(responseMessage);
  next(err);
};
