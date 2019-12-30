module.exports = {
  roots: ['<rootDir>/packages/components/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/packages/components/src/**/?(*.)(spec|tests).ts?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/scripts/setupTests.ts'],
  snapshotSerializers: ['jest-emotion', 'enzyme-to-json/serializer'],
}
