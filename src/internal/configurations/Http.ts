import { IHttpConfig, ProcessEnv } from '../types/config';

export class HttpConfig implements IHttpConfig {
  private static _instance: HttpConfig;
  PORT!: number;
  DOMAIN!: string;
  COMPRESSION_LEVEL!: number;
  MAX_REQUEST_BODY_SIZE!: string;
  MAX_REQUEST_URL_SIZE!: string;
  URL_EXTENDED_ENABLED!: boolean;
  RATE_LIMIT_WINDOWS_MS!: number;
  RATE_LIMIT_MAX_REQUESTS!: number;
  BASIC_AUTH_PASSWORD!: string;

  constructor(env: ProcessEnv) {
    if (HttpConfig._instance) {
      return HttpConfig._instance;
    }
    this._init(env);
    HttpConfig._instance = this;
  }

  private _init(env: ProcessEnv) {
    this.PORT = Number(env.PORT) || 80;
    this.DOMAIN = env.DOMAIN || 'localhost';
    this.COMPRESSION_LEVEL = Number(env.COMPRESSION_LEVEL) || 0;
    this.MAX_REQUEST_BODY_SIZE = env.MAX_REQUEST_BODY_SIZE || '2mb';
    this.MAX_REQUEST_URL_SIZE = env.MAX_REQUEST_URL_SIZE || '1kb';
    this.URL_EXTENDED_ENABLED = env.URL_EXTENDED_ENABLED !== 'false';
    this.RATE_LIMIT_WINDOWS_MS = Number(env.RATE_LIMIT_WINDOWS_MS) || 6000;
    this.RATE_LIMIT_MAX_REQUESTS = Number(env.RATE_LIMIT_MAX_REQUESTS) || 100;
    this.BASIC_AUTH_PASSWORD = env.BASIC_AUTH_PASSWORD || 'password';
  }
}
