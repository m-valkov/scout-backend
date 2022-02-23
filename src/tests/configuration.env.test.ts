import { Config } from '../internal/providers/Config';

describe('Configuration', () => {
  test('should use the values of the environment variables', async () => {
    process.env.API_PREFIX = '/api/v1';
    process.env.NODE_ENV = 'production';
    process.env.PORT = '5000';
    process.env.DOMAIN = 'example.com';
    process.env.COMPRESSION_LEVEL = '3';
    process.env.MAX_REQUEST_BODY_SIZE = '3mb';
    process.env.MAX_REQUEST_URL_SIZE = '2kb';
    process.env.URL_EXTENDED_ENABLED = 'false';
    process.env.RATE_LIMIT_WINDOWS_MS = '60000';
    process.env.RATE_LIMIT_MAX_REQUESTS = '1000';
    process.env.BASIC_AUTH_PASSWORD = 'password1';
    process.env.ACCESS_LOG_MAX_FILE_SIZE_IN_BYTES = '10485761';
    process.env.ACCESS_LOG_MAX_FILES = '51';
    process.env.ERROR_LOG_MAX_FILE_SIZE_IN_BYTES = '10485761';
    process.env.ERROR_LOG_MAX_FILES = '51';
    process.env.SENTRY_DSN = 'dsn';
    process.env.TELEGRAM_BOT_TOKEN = 'token1';
    process.env.TELEGRAM_CHAT_ID = '-10';

    process.env.OPENAPI_VERSION = '3.0.1';
    process.env.SWAGGER_TITLE = 'Api documentation 1';
    process.env.API_VERSION = '1.0.1';
    process.env.SERVER_URL = 'http://example.com:5000/api/v1';
    process.env.SERVER_DESCRIPTION = 'Dev server 1';
    process.env.DOCS_ENDPOINT = '/docs1';

    process.env.MONGO_DB_URI = 'uri';

    process.env.USER_LOGIN_MIN_LENGHT = '2';
    process.env.USER_LOGIN_MAX_LENGHT = '64';
    process.env.USER_PASSWORD_MIN_LENGHT = '20';
    process.env.USER_PASSWORD_MAX_LENGHT = '256';

    const c: Config = new Config();

    expect(c.ApiConfig.API_PREFIX).toBe('/api/v1');

    expect(c.AppConfig.IS_PRODUCTION).toBe(true);

    expect(c.HttpConfig.PORT).toBe(5000);
    expect(c.HttpConfig.DOMAIN).toBe('example.com');
    expect(c.HttpConfig.COMPRESSION_LEVEL).toBe(3);
    expect(c.HttpConfig.MAX_REQUEST_BODY_SIZE).toBe('3mb');
    expect(c.HttpConfig.MAX_REQUEST_URL_SIZE).toBe('2kb');
    expect(c.HttpConfig.URL_EXTENDED_ENABLED).toBe(false);
    expect(c.HttpConfig.RATE_LIMIT_WINDOWS_MS).toBe(60000);
    expect(c.HttpConfig.RATE_LIMIT_MAX_REQUESTS).toBe(1000);
    expect(c.HttpConfig.BASIC_AUTH_PASSWORD).toBe('password1');

    expect(c.LoggerConfig.ACCESS_LOG_MAX_FILE_SIZE_IN_BYTES).toBe(10_485_761);
    expect(c.LoggerConfig.ACCESS_LOG_MAX_FILES).toBe(51);
    expect(c.LoggerConfig.ERROR_LOG_MAX_FILE_SIZE_IN_BYTES).toBe(10_485_761);
    expect(c.LoggerConfig.ERROR_LOG_MAX_FILES).toBe(51);
    expect(c.LoggerConfig.SENTRY_DSN).toBe('dsn');
    expect(c.LoggerConfig.TELEGRAM_BOT_TOKEN).toBe('token1');
    expect(c.LoggerConfig.TELEGRAM_CHAT_ID).toBe(-10);

    expect(c.SwaggerConfig.OPENAPI_VERSION).toBe('3.0.1');
    expect(c.SwaggerConfig.SWAGGER_TITLE).toBe('Api documentation 1');
    expect(c.SwaggerConfig.API_VERSION).toBe('1.0.1');
    expect(c.SwaggerConfig.SERVER_URL).toBe('http://example.com:5000/api/v1');
    expect(c.SwaggerConfig.SERVER_DESCRIPTION).toBe('Dev server 1');
    expect(c.SwaggerConfig.DOCS_ENDPOINT).toBe('/docs1');

    expect(c.DbConfig.MONGO_DB_URI).toBe('uri');

    expect(c.EntityConfig.USER_LOGIN_MIN_LENGHT).toBe(2);
    expect(c.EntityConfig.USER_LOGIN_MAX_LENGHT).toBe(64);
    expect(c.EntityConfig.USER_PASSWORD_MIN_LENGHT).toBe(20);
    expect(c.EntityConfig.USER_PASSWORD_MAX_LENGHT).toBe(256);
  });
});
