module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.(js|ts|tsx)$': 'babel-jest',
  },
  roots: ['./src'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-navigation|static-container|redux-persist|lodash-es|recyclerlistview|@react-navigation/.*)',
  ],
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    '<rootDir>/jest.setup.js',
  ],
};
