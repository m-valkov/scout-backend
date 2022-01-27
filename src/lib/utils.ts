import { Request } from 'express';
import { BaseError } from '../exceptions/BaseError';

export const makeMessageFromErrorAndRequest = (err: Error | BaseError, req: Request): string => {
  const stack = err.stack;
  const url = req.url;
  const headers = JSON.stringify(req.headers, null, '\t');
  const body = JSON.stringify(req.body, null, '\t');

  return `$\n${stack}\n\n${url}\n\n${headers}\n\n${body}`;
};
