import { SwaggerConfig } from './Swagger';

test('The default value for the OPENAPI_VERSION name is set to.', () => {
  expect(SwaggerConfig.OPENAPI_VERSION).toBe('3.0.0');
});

test('The default value for the SWAGGER_TITLE name is set to.', () => {
  expect(SwaggerConfig.SWAGGER_TITLE).toBe('Api documentation');
});

test('The default value for the API_VERSION name is set to.', () => {
  expect(SwaggerConfig.API_VERSION).toBe('1.0.0');
});

test('The default value for the SERVER_URL name is set to.', () => {
  expect(SwaggerConfig.SERVER_URL).toBe('http://localhost:3000/docs');
});

test('The default value for the SERVER_DESCRIPTION name is set to.', () => {
  expect(SwaggerConfig.SERVER_DESCRIPTION).toBe('Dev server');
});

test('The default value for the DOCS_ENDPOINT name is set to.', () => {
  expect(SwaggerConfig.DOCS_ENDPOINT).toBe('/docs');
});
