export class LoggerConfig {
  static readonly ACCESS_LOG_MAX_FILE_SIZE_IN_BYTES: number = Number(process.env.ACCESS_LOG_MAX_FILE_SIZE_IN_BYTES || 10_485_760);

  static readonly ACCESS_LOG_MAX_FILES: number = Number(process.env.ACCESS_LOG_MAX_FILES) || 5;

  static readonly ERROR_LOG_MAX_FILE_SIZE_IN_BYTES: number = Number(process.env.ERROR_LOG_MAX_FILE_SIZE_IN_BYTES || 10_485_760);

  static readonly ERROR_LOG_MAX_FILES: number = Number(process.env.ERROR_LOG_MAX_FILES) || 5;
  static readonly SENTRY_DSN: string = process.env.SENTRY_DSN || '';

  static readonly TELEGRAM_BOT_TOKEN: string = process.env.TELEGRAM_BOT_TOKEN || 'token';

  static readonly TELEGRAM_CHAT_ID: number = Number(process.env.TELEGRAM_CHAT_ID) || -1;
}
