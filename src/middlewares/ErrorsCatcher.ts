import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { BaseError } from '../exceptions/BaseError';
import { Sender } from '../interfaces/sender';
import { DebugLogger } from '../loggers/DebugLogger';
import { ErrorLogger } from '../loggers/ErrorLogger';
import { ClientSender } from '../senders/ClientSender';

export const ErrorsCatcher: ErrorRequestHandler = (err: BaseError, req: Request, res: Response, next: NextFunction): void => {
  DebugLogger.debug(err.message);
  const clientSender: Sender = new ClientSender(res);

  if (err.isOperational) {
    ErrorLogger.error(err.message);
    clientSender.send(err);
    next();
  } else {
    ErrorLogger.error(err.message);
  }
};
