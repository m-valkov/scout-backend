export class HttpConfig {
  /**
   * Which port to use for the server
   */
  static readonly PORT: number = Number(process.env.PORT) || 3000;

  static readonly COMPRESSION_LEVEL: number =
    Number(process.env.COMPRESSION_LEVEL) || 0;

  static readonly MAX_REQUEST_BODY_SIZE: string =
    process.env.MAX_REQUEST_BODY_SIZE || '2mb';

  static readonly MAX_REQUEST_URL_SIZE: string =
    process.env.MAX_REQUEST_URL_SIZE || '1kb';

  static readonly IS_URL_EXTENDED: boolean =
    process.env.IS_URL_EXTENDED !== 'false';

  static readonly RATE_LIMIT_WINDOWS_MS: number =
    Number(process.env.RATE_LIMIT_WINDOW_MS) || 6000;

  static readonly RATE_LIMIT_MAX_REQUESTS: number =
    Number(process.env.RATE_LIMIT_MAX_REQUESTS) || 100;
}

export class LoggerConfig {
  static readonly ACCESS_LOG_MAX_FILE_SIZE_IN_BYTES: number = Number(
    process.env.ACCESS_LOG_MAX_FILE_SIZE_IN_BYTES || 10_485_760,
  );

  static readonly ACCESS_LOG_MAX_FILES: number =
    Number(process.env.ACCESS_LOG_MAX_FILES) || 5;
}
export class CorsConfig {
  /**
   * Used to set CORS headers
   */
  static readonly DOMAIN: string = process.env.DOMAIN || 'localhost';
}

export class APIConfig {
  static readonly API_PREFIX: string = process.env.API_PREFIX || '/api';
}

export class SwaggerConfig {
  static readonly SWAGGER_PREFIX: string = process.env.SWAGGER_PREFIX || '/doc';

  static readonly OPENAPI_VERSION: string =
    process.env.OPENAPI_VERSION || '3.0.0';

  static readonly TITLE: string =
    process.env.SWAGGER_TITLE || 'Api documentation';

  static readonly API_VERSION: string = process.env.API_VERSION || '1.0.0';

  static readonly SERVER_URL: string =
    process.env.SERVER_URL || 'http://localhost:3000/docs';

  static readonly SERVER_DESCRIPTION: string =
    process.env.SERVER_DESCRIPTION || 'Dev server';

  static readonly DOCS_ENDPOINT: string = process.env.DOCS_ENDPOINT || '/docs';
}
