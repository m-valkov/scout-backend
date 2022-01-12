import { APIConfig } from './Api';

test('The default value for the API_PREFIX name is set to.', () => {
  expect(APIConfig.API_PREFIX).toBe('/api');
});
