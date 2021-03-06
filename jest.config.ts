/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  coverageReporters: ['clover', 'json', 'lcov', 'json-summary', 'text-summary'],
  collectCoverageFrom: ['src/**/*.ts', '!**/node_modules/**', '!**/vendor/**', '!src/index.ts'],
};
