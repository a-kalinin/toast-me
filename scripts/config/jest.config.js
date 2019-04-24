module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx,mjs}',
  ],
  setupFiles: [
    '<rootDir>/polyfills.js',
    '<rootDir>/jestSetup.js',
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}',
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