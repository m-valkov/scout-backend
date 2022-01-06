export class HttpConfig {
  /**
   * Used to set CORS headers
   */
  static readonly DOMAIN: string = process.env.DOMAIN || 'localhost';
  /**
   * Which port to use for the server
   */
  static readonly PORT: string = process.env.PORT || '3000';
  /**
   * Whether to use CORS middleware
   */
  static readonly USE_CORS: boolean = process.env.USE_CORS !== 'false';
  /**
   * Whether to use Helmet.js middleware
   */
  static readonly USE_HELMET: boolean = process.env.USE_HELMET !== 'false';
}
