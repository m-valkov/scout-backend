import { BaseError } from '../exceptions/BaseError';
import { DebugLogger } from '../loggers/vendor/DebugLogger';
import { ErrorLogger } from '../loggers/vendor/ErrorLogger';
import { TelegramLogger } from '../loggers/vendor/TelegramLogger';

process.on('unhandledRejection', reason => {
  throw reason;
});

process.on('uncaughtException', (err: BaseError) => {
  ErrorLogger.log(err);
  TelegramLogger.log(err);
  DebugLogger.debug(err.stack);
  DebugLogger.debug('Uncaught error. Emergency application shutdown');
  process.exit(1);
});

export const init = (): void => {
  DebugLogger.debug('Process Controll inited');
};
