const chalk = require('chalk');

console.log(chalk.green('Reading jest config'));

module.exports = {
  verbose: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx,mjs}',
  ],
  setupFiles: [
    '<rootDir>/scripts/config/polyfills.js',
    '<rootDir>/scripts/config/jestSetup.js',
  ],
  testMatch: [
    '**/+(*).(spec|test).{js,jsx,mjs}',
    '**/__tests__/**/+(*.)(spec|test).{js,jsx,mjs}',
  ],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/scripts/config/cssTransform.js',
    '^(?!.*\\.(js|jsx|ts|tsx|mjs|css|json)$)': '<rootDir>/scripts/config/fileTransform.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx|mjs)$',
  ],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: [
    'web.js',
    'js',
    'ts',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
    'node',
    'mjs',
  ],
};
