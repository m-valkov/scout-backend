import { ErrorRequestHandler } from 'express';
import { ErrorsCatcher } from '../middlewares/ErrorsCatcher';
import { ErrorClientSender } from '../middlewares/ErrorsClientSender';

export const ErrorHandlers: ErrorRequestHandler[] = [ErrorsCatcher, ErrorClientSender];
