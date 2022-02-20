import { Config } from '../internal/providers/Config';

describe('Configuration', () => {
  test('should use the default values', async () => {
    const c: Config = new Config();

    expect(c.ApiConfig.API_PREFIX).toBe('/api');

    expect(c.AppConfig.IS_PRODUCTION).toBe(false);

    expect(c.HttpConfig.PORT).toBe(80);
    expect(c.HttpConfig.DOMAIN).toBe('localhost');
    expect(c.HttpConfig.COMPRESSION_LEVEL).toBe(0);
    expect(c.HttpConfig.MAX_REQUEST_BODY_SIZE).toBe('2mb');
    expect(c.HttpConfig.MAX_REQUEST_URL_SIZE).toBe('1kb');
    expect(c.HttpConfig.URL_EXTENDED_ENABLED).toBe(true);
    expect(c.HttpConfig.RATE_LIMIT_WINDOWS_MS).toBe(6000);
    expect(c.HttpConfig.RATE_LIMIT_MAX_REQUESTS).toBe(100);
    expect(c.HttpConfig.BASIC_AUTH_PASSWORD).toBe('password');

    expect(c.LoggerConfig.ACCESS_LOG_MAX_FILE_SIZE_IN_BYTES).toBe(10_485_760);
    expect(c.LoggerConfig.ACCESS_LOG_MAX_FILES).toBe(5);
    expect(c.LoggerConfig.ERROR_LOG_MAX_FILE_SIZE_IN_BYTES).toBe(10_485_760);
    expect(c.LoggerConfig.ERROR_LOG_MAX_FILES).toBe(5);
    expect(c.LoggerConfig.SENTRY_DSN).toBe('');
    expect(c.LoggerConfig.TELEGRAM_BOT_TOKEN).toBe('token');
    expect(c.LoggerConfig.TELEGRAM_CHAT_ID).toBe(-1);

    expect(c.SwaggerConfig.OPENAPI_VERSION).toBe('3.0.0');
    expect(c.SwaggerConfig.SWAGGER_TITLE).toBe('Api documentation');
    expect(c.SwaggerConfig.API_VERSION).toBe('1.0.0');
    expect(c.SwaggerConfig.SERVER_URL).toBe('http://localhost:80/api');
    expect(c.SwaggerConfig.SERVER_DESCRIPTION).toBe('Dev server');
    expect(c.SwaggerConfig.DOCS_ENDPOINT).toBe('/docs');

    expect(c.DbConfig.MONGO_DB_URI).toBe('');
  });
});
