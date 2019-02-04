'use strict';

const path = require('path');

const paths = {
  components: 'src/components',
  utils: 'src/global/utils',
};

const keys = Object.keys(paths);
const webpackPaths =
  keys
    .map(key => ({ [key]: path.resolve(paths[key]) }))
    .reduce((acc, val) => ({ ...acc, ...val }), {});

const babelPaths =
  keys
    .map(key => ({ [key]: `./${paths[key]}` }))
    .reduce((acc, val) => ({ ...acc, ...val }), {});

const eslintPaths =
  keys.map(key => ([key, path.resolve(paths[key])]));

module.exports = {
  paths,
  keys,
  webpack: webpackPaths,
  eslint: eslintPaths,
  babel: babelPaths, // Babel6 seems to have problems with JS config file, so this is unused
};
