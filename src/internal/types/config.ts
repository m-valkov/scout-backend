export interface IConfig {
  AppConfig: IAppConfig;
  ApiConfig: IApiConfig;
  HttpConfig: IHttpConfig;
  LoggerConfig: ILoggerConfig;
  SwaggerConfig: ISwaggerConfig;
  DbConfig: IDbConfig;
  EntityConfig: IEntityConfig;
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

export interface IEntityConfig {
  USER_LOGIN_MIN_LENGTH: number;
  USER_LOGIN_MAX_LENGTH: number;
  USER_PASSWORD_MIN_LENGTH: number;
  USER_PASSWORD_MAX_LENGTH: number;
}

export interface ProcessEnv {
  [key: string]: string | undefined;
}

export interface IDbConfig {
  MONGO_DB_URI: string;
}
