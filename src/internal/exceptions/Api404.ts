import { BaseError } from './BaseError';
import { HttpStatusCode } from '../configurations/HttpStatusCode';

export class Api404Error extends BaseError {
  constructor(
    message: string,
    name = 'Error404',
    statusCode = HttpStatusCode.NOT_FOUND,
    description = 'Not found',
    isOperational = true,
  ) {
    super(name, message, statusCode, isOperational, description);
  }
}
