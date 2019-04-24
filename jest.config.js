const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

console.log(chalk.green('Reading config from root'));

module.exports = {
  verbose: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,mjs}',
  ],
  setupFiles: [
    '<rootDir>/scripts/config/polyfills.js',
    '<rootDir>/scripts/config/jestSetup.js',
  ],
  testMatch: [
    // resolveApp('src/*/__tests__/**/*.js'),
    // resolveApp('src/__tests__/**/*.js'),
    // resolveApp('src/__tests__/*.js'),
    // '<rootDir>/../../src/**/__tests__/**/*.js}',
    // '<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}}',
    // '<rootDir>/src/**/+(*.)(spec|test).{js,jsx,mjs}',
    // resolveApp('**/+(*.)(spec|test).{js,jsx,mjs}'),
    '**/+(*).(spec|test).{js,jsx,mjs}',
    '**/__tests__/**/+(*.)(spec|test).{js,jsx,mjs}',
    // '<rootDir>/dev/**/+(*.)(spec|test).{js,jsx,mjs}',
  ],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/scripts/config/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|css|json)$)': '<rootDir>/scripts/config/fileTransform.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$',
  ],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: [
    'web.js',
    'js',
    'json',
    'web.jsx',
    'jsx',
    'node',
    'mjs',
  ],
};
