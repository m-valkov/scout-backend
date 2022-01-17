import { APIConfig } from './Api';
import { HttpConfig } from './Http';

export class SwaggerConfig {
  private static _defaultServerUrl = `http://${HttpConfig.DOMAIN}:${HttpConfig.PORT}${APIConfig.API_PREFIX}`;
  static readonly OPENAPI_VERSION: string = process.env.OPENAPI_VERSION || '3.0.0';

  static readonly SWAGGER_TITLE: string = process.env.SWAGGER_TITLE || 'Api documentation';

  static readonly API_VERSION: string = process.env.API_VERSION || '1.0.0';

  static readonly SERVER_URL: string = process.env.SERVER_URL || SwaggerConfig._defaultServerUrl;

  static readonly SERVER_DESCRIPTION: string = process.env.SERVER_DESCRIPTION || 'Dev server';

  static readonly DOCS_ENDPOINT: string = process.env.DOCS_ENDPOINT || '/docs';
}
