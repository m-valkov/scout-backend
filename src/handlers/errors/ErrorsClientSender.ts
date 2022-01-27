import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { BaseError } from '../../exceptions/BaseError';

export const ErrorClientSender: ErrorRequestHandler = (err: BaseError, _req: Request, res: Response, next: NextFunction): void => {
  const errorBody = {
    statusCode: err.statusCode || 500,
    description: err.description || 'Uncaught Exception',
    message: err.message || 'Contact the developer!',
  };
  res.status(err.statusCode || 500).json({ error: errorBody });
  next(err);
};
