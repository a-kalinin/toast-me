/* global __dirname, require, module*/

const path = require('path');
const fs = require('fs');
const env = require('yargs').argv.env; // use --env with webpack 2
const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const pkg = require('../../package.json');
const ESLintPlugin = require('eslint-webpack-plugin');

let libraryName = pkg.name;

let outputFile, mode;
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

if (env === 'build') {
  mode = 'production';
  outputFile = libraryName + '.min.js';
} else {
  mode = 'development';
  outputFile = libraryName + '.js';
}

const config = {
  bail: true,
  mode: mode,
  entry: resolveApp('src/index.js'),
  output: {
    path: resolveApp('lib'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.scss$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: 'TM-[local]_[hash:base64:4]'
              }
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              postcssOptions: {
                plugins: [
                  require.resolve('postcss-flexbugs-fixes'),
                  autoprefixer({
                    overrideBrowserslist: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9', // React doesn't support IE8 anyway
                    ],
                    flexbox: 'no-2009',
                  }),
                  require('cssnano')(),
                ]
              },
            },
          },
          "sass-loader",
        ],
      }
    ]
  },
  plugins: [
    new ESLintPlugin({ extensions: ['jsx', 'js'] }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    modules: [
      path.resolve('./node_modules'),
      path.resolve('./src'),
    ],
    extensions: ['.json', '.js']
  }
};

module.exports = config;
