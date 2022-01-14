import { BaseError } from './BaseError';
import { HttpStatusCode } from '../configurations/HttpStatusCode';

export class Api404Error extends BaseError {
  constructor(message: string, statusCode = HttpStatusCode.NOT_FOUND, description = 'Not found', isOperational = true) {
    super(message, statusCode, isOperational, description);
  }
}
