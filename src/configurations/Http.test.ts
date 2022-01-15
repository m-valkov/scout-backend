import { HttpConfig } from './Http';

test('The default value for the DOMAIN name is set to.', () => {
  expect(HttpConfig.DOMAIN).toBe('localhost');
});

test('The default value for the PORT is set to.', () => {
  expect(HttpConfig.PORT).toBe(3000);
});

test('The default value for the COMPRESSION_LEVEL is set to.', () => {
  expect(HttpConfig.COMPRESSION_LEVEL).toBe(0);
});

test('The default value for the MAX_REQUEST_BODY_SIZE is set to.', () => {
  expect(HttpConfig.MAX_REQUEST_BODY_SIZE).toBe('2mb');
});

test('The default value for the MAX_REQUEST_URL_SIZE is set to.', () => {
  expect(HttpConfig.MAX_REQUEST_URL_SIZE).toBe('1kb');
});

test('The default value for the IS_URL_EXTENDED is set to.', () => {
  expect(HttpConfig.URL_EXTENDED_ENABLED).toBe(true);
});

test('The default value for the RATE_LIMIT_WINDOW_MS is set to.', () => {
  expect(HttpConfig.RATE_LIMIT_WINDOWS_MS).toBe(6000);
});

test('The default value for the RATE_LIMIT_MAX_REQUESTS is set to.', () => {
  expect(HttpConfig.RATE_LIMIT_MAX_REQUESTS).toBe(100);
});

test('The default value for the BASIC_AUTH_PASSWORD is set to.', () => {
  expect(HttpConfig.BASIC_AUTH_PASSWORD).toBe('password');
});
