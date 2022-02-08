import { ILoggerConfig, ProcessEnv } from '../types/config';

export class LoggerConfig implements ILoggerConfig {
  private static _instance: LoggerConfig;
  private _env!: ProcessEnv;
  ACCESS_LOG_MAX_FILE_SIZE_IN_BYTES!: number;
  ACCESS_LOG_MAX_FILES!: number;
  ERROR_LOG_MAX_FILE_SIZE_IN_BYTES!: number;
  ERROR_LOG_MAX_FILES!: number;
  SENTRY_DSN!: string;
  TELEGRAM_BOT_TOKEN!: string;
  TELEGRAM_CHAT_ID!: number;
  constructor(env: ProcessEnv) {
    if (LoggerConfig._instance) {
      return LoggerConfig._instance;
    }
    this._init(env);
    LoggerConfig._instance = this;
  }

  private _init(env: ProcessEnv) {
    this.ACCESS_LOG_MAX_FILE_SIZE_IN_BYTES = Number(env.ACCESS_LOG_MAX_FILE_SIZE_IN_BYTES || 10_485_760);
    this.ACCESS_LOG_MAX_FILES = Number(env.ACCESS_LOG_MAX_FILES) || 5;
    this.ERROR_LOG_MAX_FILE_SIZE_IN_BYTES = Number(env.ERROR_LOG_MAX_FILE_SIZE_IN_BYTES || 10_485_760);
    this.ERROR_LOG_MAX_FILES = Number(env.ERROR_LOG_MAX_FILES) || 5;
    this.SENTRY_DSN = env.SENTRY_DSN || '';
    this.TELEGRAM_BOT_TOKEN = env.TELEGRAM_BOT_TOKEN || 'token';
    this.TELEGRAM_CHAT_ID = Number(env.TELEGRAM_CHAT_ID) || -1;
  }
}
