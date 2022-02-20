import { BaseError } from './BaseError';
import { HttpStatusCode } from '../configurations/HttpStatusCode';

export class BadRequestError extends BaseError {
  constructor(
    message: string,
    name = 'EmptyPayloadError',
    statusCode = HttpStatusCode.BAD_REQUEST,
    description = 'Bad request',
    isOperational = true,
  ) {
    super(name, message, statusCode, isOperational, description);
  }
}
