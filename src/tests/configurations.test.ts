describe('Configuration', () => {
  const OLD_ENV = process.env;
  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  test('should use the default values', async () => {
    const { APIConfig } = await import('../configurations/Api');
    const { AppConfig } = await import('../configurations/App');
    const { HttpConfig } = await import('../configurations/Http');
    const { LoggerConfig } = await import('../configurations/Logger');
    const { SwaggerConfig } = await import('../configurations/Swagger');

    expect(APIConfig.API_PREFIX).toBe('/api');

    expect(AppConfig.IS_PRODUCTION).toBe(false);

    expect(HttpConfig.PORT).toBe(3000);
    expect(HttpConfig.DOMAIN).toBe('localhost');
    expect(HttpConfig.COMPRESSION_LEVEL).toBe(0);
    expect(HttpConfig.MAX_REQUEST_BODY_SIZE).toBe('2mb');
    expect(HttpConfig.MAX_REQUEST_URL_SIZE).toBe('1kb');
    expect(HttpConfig.URL_EXTENDED_ENABLED).toBe(true);
    expect(HttpConfig.RATE_LIMIT_WINDOWS_MS).toBe(6000);
    expect(HttpConfig.RATE_LIMIT_MAX_REQUESTS).toBe(100);
    expect(HttpConfig.BASIC_AUTH_PASSWORD).toBe('password');

    expect(LoggerConfig.ACCESS_LOG_MAX_FILE_SIZE_IN_BYTES).toBe(10_485_760);
    expect(LoggerConfig.ACCESS_LOG_MAX_FILES).toBe(5);
    expect(LoggerConfig.ERROR_LOG_MAX_FILE_SIZE_IN_BYTES).toBe(10_485_760);
    expect(LoggerConfig.ERROR_LOG_MAX_FILES).toBe(5);
    expect(LoggerConfig.SENTRY_DSN).toBe('');
    expect(LoggerConfig.TELEGRAM_BOT_TOKEN).toBe('token');
    expect(LoggerConfig.TELEGRAM_CHAT_ID).toBe(-1);

    expect(SwaggerConfig.OPENAPI_VERSION).toBe('3.0.0');
    expect(SwaggerConfig.SWAGGER_TITLE).toBe('Api documentation');
    expect(SwaggerConfig.API_VERSION).toBe('1.0.0');
    expect(SwaggerConfig.SERVER_URL).toBe('http://localhost:3000/api');
    expect(SwaggerConfig.SERVER_DESCRIPTION).toBe('Dev server');
    expect(SwaggerConfig.DOCS_ENDPOINT).toBe('/docs');
  });

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
    process.env.TELEGRAM_BOT_TOKEN = 'token';
    process.env.TELEGRAM_CHAT_ID = '-10';

    process.env.OPENAPI_VERSION = '3.0.1';
    process.env.SWAGGER_TITLE = 'Api documentation 1';
    process.env.API_VERSION = '1.0.1';
    process.env.SERVER_URL = 'http://example.com:5000/api/v1';
    process.env.SERVER_DESCRIPTION = 'Dev server 1';
    process.env.DOCS_ENDPOINT = '/docs1';

    const { APIConfig } = await import('../configurations/Api');
    const { AppConfig } = await import('../configurations/App');
    const { HttpConfig } = await import('../configurations/Http');
    const { LoggerConfig } = await import('../configurations/Logger');
    const { SwaggerConfig } = await import('../configurations/Swagger');

    expect(APIConfig.API_PREFIX).toBe('/api/v1');

    expect(AppConfig.IS_PRODUCTION).toBe(true);

    expect(HttpConfig.PORT).toBe(5000);
    expect(HttpConfig.DOMAIN).toBe('example.com');
    expect(HttpConfig.COMPRESSION_LEVEL).toBe(3);
    expect(HttpConfig.MAX_REQUEST_BODY_SIZE).toBe('3mb');
    expect(HttpConfig.MAX_REQUEST_URL_SIZE).toBe('2kb');
    expect(HttpConfig.URL_EXTENDED_ENABLED).toBe(false);
    expect(HttpConfig.RATE_LIMIT_WINDOWS_MS).toBe(60000);
    expect(HttpConfig.RATE_LIMIT_MAX_REQUESTS).toBe(1000);
    expect(HttpConfig.BASIC_AUTH_PASSWORD).toBe('password1');

    expect(LoggerConfig.ACCESS_LOG_MAX_FILE_SIZE_IN_BYTES).toBe(10_485_761);
    expect(LoggerConfig.ACCESS_LOG_MAX_FILES).toBe(51);
    expect(LoggerConfig.ERROR_LOG_MAX_FILE_SIZE_IN_BYTES).toBe(10_485_761);
    expect(LoggerConfig.ERROR_LOG_MAX_FILES).toBe(51);
    expect(LoggerConfig.SENTRY_DSN).toBe('dsn');
    expect(LoggerConfig.TELEGRAM_BOT_TOKEN).toBe('token');
    expect(LoggerConfig.TELEGRAM_CHAT_ID).toBe(-10);

    expect(SwaggerConfig.OPENAPI_VERSION).toBe('3.0.1');
    expect(SwaggerConfig.SWAGGER_TITLE).toBe('Api documentation 1');
    expect(SwaggerConfig.API_VERSION).toBe('1.0.1');
    expect(SwaggerConfig.SERVER_URL).toBe('http://example.com:5000/api/v1');
    expect(SwaggerConfig.SERVER_DESCRIPTION).toBe('Dev server 1');
    expect(SwaggerConfig.DOCS_ENDPOINT).toBe('/docs1');
  });
});
