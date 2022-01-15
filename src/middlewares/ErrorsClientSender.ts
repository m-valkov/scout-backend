import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { BaseError } from '../exceptions/BaseError';

export const ErrorSender: ErrorRequestHandler = (err: BaseError, _req: Request, res: Response, next: NextFunction): void => {
  const errorBody = {
    statusCode: err.statusCode,
    description: err.description,
    message: err.message,
  };
  res.status(err.statusCode).json({ error: errorBody });
  next();
};
