import { IConfig, ISwaggerConfig, ProcessEnv } from '../types/config';

export class SwaggerConfig implements ISwaggerConfig {
  private static _instance: SwaggerConfig;
  OPENAPI_VERSION!: string;
  SWAGGER_TITLE!: string;
  API_VERSION!: string;
  SERVER_URL!: string;
  SERVER_DESCRIPTION!: string;
  DOCS_ENDPOINT!: string;
  constructor(env: ProcessEnv, config: IConfig) {
    if (SwaggerConfig._instance) {
      return SwaggerConfig._instance;
    }
    this._init(config, env);
    SwaggerConfig._instance = this;
  }

  private _init(config: IConfig, env: ProcessEnv) {
    this.OPENAPI_VERSION = env.OPENAPI_VERSION || '3.0.0';
    this.SWAGGER_TITLE = env.SWAGGER_TITLE || 'Api documentation';
    this.API_VERSION = env.API_VERSION || '1.0.0';
    this.SERVER_URL = env.SERVER_URL || this._defaultServerUrl(config);
    this.SERVER_DESCRIPTION = env.SERVER_DESCRIPTION || 'Dev server';
    this.DOCS_ENDPOINT = env.DOCS_ENDPOINT || '/docs';
  }
  private _defaultServerUrl = (config: IConfig): string => {
    let url: string;
    if (config.AppConfig.IS_PRODUCTION) {
      url = `https://${config.HttpConfig.DOMAIN}${config.ApiConfig.API_PREFIX}`;
    } else {
      url = `http://${config.HttpConfig.DOMAIN}:${config.HttpConfig.PORT}${config.ApiConfig.API_PREFIX}`;
    }
    return url;
  };
}
