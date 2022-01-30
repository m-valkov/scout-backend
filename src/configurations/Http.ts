export class HttpConfig {
  /**
   * Which port to use for the server
   */
  static readonly PORT: number = Number(process.env.PORT) || 80;

  static readonly DOMAIN: string = process.env.DOMAIN || 'localhost';

  static readonly COMPRESSION_LEVEL: number = Number(process.env.COMPRESSION_LEVEL) || 0;

  static readonly MAX_REQUEST_BODY_SIZE: string = process.env.MAX_REQUEST_BODY_SIZE || '2mb';

  static readonly MAX_REQUEST_URL_SIZE: string = process.env.MAX_REQUEST_URL_SIZE || '1kb';

  static readonly URL_EXTENDED_ENABLED: boolean = process.env.URL_EXTENDED_ENABLED !== 'false';

  static readonly RATE_LIMIT_WINDOWS_MS: number = Number(process.env.RATE_LIMIT_WINDOWS_MS) || 6000;

  static readonly RATE_LIMIT_MAX_REQUESTS: number = Number(process.env.RATE_LIMIT_MAX_REQUESTS) || 100;

  static readonly BASIC_AUTH_PASSWORD: string = process.env.BASIC_AUTH_PASSWORD || 'password';
}
