import { ErrorRequestHandler } from 'express';
import { CriticalErrorHandler } from '../handlers/errors/CriticalErrorHandler';
import { ErrorClientSender } from '../handlers/errors/ErrorsClientSender';
import { SentryErrorHandler } from '../handlers/errors/SentryErrorHandler';

export const ErrorHandlers: ErrorRequestHandler[] = [SentryErrorHandler, ErrorClientSender, CriticalErrorHandler];
