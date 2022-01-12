import { LoggerConfig } from './Logger';

test('The default value for the ACCESS_LOG_MAX_FILE_SIZE_IN_BYTES name is set to.', () => {
  expect(LoggerConfig.ACCESS_LOG_MAX_FILE_SIZE_IN_BYTES).toBe(10_485_760);
});

test('The default value for the ACCESS_LOG_MAX_FILES name is set to.', () => {
  expect(LoggerConfig.ACCESS_LOG_MAX_FILES).toBe(5);
});
