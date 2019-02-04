const resolveAlias = require('./config/resolveAlias').eslint;

module.exports = {
  settings: {
    'import/resolver': {
//      'node': { 'paths': ['src', 'src/global', 'src/store'] },
      alias: resolveAlias
    }
  },
  parser: 'babel-eslint',
  plugins: [
    'module-resolver',
    'babel',
    'flowtype',
    'jest'
  ],
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'react-app'
  ],
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/aria-props': 0,
    'jsx-a11y/aria-role': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/interactive-supports-focus': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/role-has-required-aria-props': 0,
    'jsx-a11y/href-no-hash': 'off',
    'linebreak-style': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-console': 'off'
  },
  overrides: [
    {
      files: ['src/store/**'],
      rules: {
        'import/prefer-default-export': 0
      }
    }
  ],
  env: {
    browser: true,
    'jest/globals': true
  },
  globals: {}
};
