import { HttpConfig } from './Http';

test('Test default Domain name', () => {
  expect(HttpConfig.DOMAIN).toBe('localhost');
});
