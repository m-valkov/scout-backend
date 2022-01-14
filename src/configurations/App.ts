export class AppConfig {
  public static IS_PRODUCTION: boolean = process.env.NODE_ENV === 'production';
}
