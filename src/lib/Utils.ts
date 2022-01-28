import { Request } from 'express';
import { BaseError } from '../exceptions/BaseError';

export const makeMessageFromErrorAndRequest = (err: BaseError, req?: Request): string => {
  let url = 'Undefined url';
  let headers = 'Undefined headers';
  let body = 'Undefined body';
  const stack = err.stack;

  if (req) {
    url = req.url;
    headers = JSON.stringify(req.headers, null, '\t');
    body = JSON.stringify(req.body, null, '\t');
  }

  return `$\n${stack}\n\n${url}\n\n${headers}\n\n${body}`;
};
