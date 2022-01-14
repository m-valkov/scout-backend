import { AppConfig } from './App';

test('The default value for the DOMAIN name is set to.', () => {
  expect(AppConfig.IS_PRODUCTION).toBe(false);
});
