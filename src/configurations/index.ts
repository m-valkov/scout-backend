export class HttpConfig {
  /**
   * Which port to use for the server
   */
  static readonly PORT: number = Number(process.env.PORT) || 3000;
  static readonly COMPRESSION_LEVEL: number = Number(process.env.COMPRESSION_LEVEL) || 0;
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
}
