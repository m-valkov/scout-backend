/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageReporters: ['clover', 'json', 'lcov', 'json-summary'],
  collectCoverageFrom: ['src/**/*.ts', '!**/node_modules/**', '!**/vendor/**', '!src/index.ts'],
};
