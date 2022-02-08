export interface IConfig {
  AppConfig: IAppConfig;
  ApiConfig: IApiConfig;
  HttpConfig: IHttpConfig;
  LoggerConfig: ILoggerConfig;
  SwaggerConfig: ISwaggerConfig;
}

export interface IApiConfig {
  API_PREFIX: string;
}
export interface IAppConfig {
  IS_PRODUCTION: boolean;
}
export interface IHttpConfig {
  PORT: number;
  DOMAIN: string;
  COMPRESSION_LEVEL: number;
  MAX_REQUEST_BODY_SIZE: string;
  MAX_REQUEST_URL_SIZE: string;
  URL_EXTENDED_ENABLED: boolean;
  RATE_LIMIT_WINDOWS_MS: number;
  RATE_LIMIT_MAX_REQUESTS: number;
  BASIC_AUTH_PASSWORD: string;
}
export interface ILoggerConfig {
  ACCESS_LOG_MAX_FILE_SIZE_IN_BYTES: number;
  ACCESS_LOG_MAX_FILES: number;
  ERROR_LOG_MAX_FILE_SIZE_IN_BYTES: number;
  ERROR_LOG_MAX_FILES: number;
  SENTRY_DSN: string;
  TELEGRAM_BOT_TOKEN: string;
  TELEGRAM_CHAT_ID: number;
}
export interface ISwaggerConfig {
  OPENAPI_VERSION: string;
  SWAGGER_TITLE: string;
  API_VERSION: string;
  SERVER_URL: string;
  SERVER_DESCRIPTION: string;
  DOCS_ENDPOINT: string;
}

export interface ProcessEnv {
  [key: string]: string | undefined;
}
