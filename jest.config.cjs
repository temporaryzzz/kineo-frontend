module.exports = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/test/setup.cjs'],
  verbose: true,
  reporters: ['default'],
  testMatch: ['<rootDir>/test/**/*.test.ts?(x)'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleNameMapper: {
    '^@/(.*)\\.js$': '<rootDir>/src/$1',
    '^@/(.*)$': '<rootDir>/src/$1',

    '^@shared/(.*)\\.js$': '<rootDir>/src/data/shared/$1',
    '^@shared/(.*)$': '<rootDir>/src/data/shared/$1',

    '^@entities/(.*)\\.js$': '<rootDir>/src/data/entities/$1',
    '^@entities/(.*)$': '<rootDir>/src/data/entities/$1',

    '^@ui/(.*)\\.js$': '<rootDir>/src/ui/$1',
    '^@ui/(.*)$': '<rootDir>/src/ui/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/test/tsconfig.json',
        useESM: true,
      },
    ],
  },
};
