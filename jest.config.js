module.exports = {
  transform: {
    '^.+\\.ts?(x)?$': 'ts-jest',
  },
  testMatch: ['<rootDir>/{components,packages}/*/src/**/?(*.)(spec|specs|test|tests).ts?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/scripts/setupTests.ts'],
  snapshotSerializers: ['jest-emotion', 'enzyme-to-json/serializer'],
}
