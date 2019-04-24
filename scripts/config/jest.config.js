const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

console.log(resolveApp('**/__tests__/**/*.{js,jsx,mjs}'));

module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx,mjs}',
  ],
  setupFiles: [
    '<rootDir>/polyfills.js',
    '<rootDir>/jestSetup.js',
  ],
  testMatch: [
    resolveApp('src/**/__tests__/**/*.js'),
    '<rootDir>/../../src/**/__tests__/**/*.js}',
    '<rootDir>/../../src/**/?(*.)(spec|test).{js,jsx,mjs}',
    '<rootDir>/../../dev/**/?(*.)(spec|test).{js,jsx,mjs}',
  ],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/../../node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|css|json)$)': '<rootDir>/fileTransform.js',
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
