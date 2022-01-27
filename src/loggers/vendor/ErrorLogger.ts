import { Request } from 'express';

import * as winston from 'winston';
import { LoggerConfig } from '../../configurations/Logger';
import { makeMessageFromErrorAndRequest } from '../../lib/utils';
import { ILogger } from '../../types/logger';
import { DebugLogger } from './DebugLogger';

const { combine, printf, timestamp } = winston.format;

const errorLoggerOptions: winston.LoggerOptions = {
  format: combine(
    timestamp({ format: 'DD.MM.YYYY HH:mm:ss' }),
    printf(info => `${info.level.toUpperCase()} :: ${info.timestamp} :: ${info.message}`),
  ),
  transports: [
    new winston.transports.File({
      level: 'error',
      filename: './logs/error.log',
      maxsize: LoggerConfig.ERROR_LOG_MAX_FILE_SIZE_IN_BYTES,
      maxFiles: LoggerConfig.ERROR_LOG_MAX_FILES,
    }),
  ],
};

const winstonLogger: winston.Logger = winston.createLogger(errorLoggerOptions);

class Logger implements ILogger {
  async log(err: Error, req: Request): Promise<void> {
    DebugLogger.debug('Write error to file');
    const message = makeMessageFromErrorAndRequest(err, req);
    winstonLogger.log('error', message);
  }
}

export const ErrorLogger: ILogger = new Logger();
