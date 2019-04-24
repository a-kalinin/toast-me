/* global __dirname, require, module*/

const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const env = require('yargs').argv.env; // use --env with webpack 2
const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const pkg = require('../../package.json');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

let libraryName = pkg.name;

let outputFile, mode, outputPath;

if (env === 'build') {
  mode = 'production';
  outputFile = libraryName + '.min.js';
  outputPath = resolveApp('lib');
} else {
  mode = 'development';
  outputFile = libraryName + '.js';
  outputPath = resolveApp('dev');
}

const config = [
  {
    bail: true,
    mode: 'development',
    // mode: mode,
    watch: true,
    watchOptions: {
      ignored: ['node_modules']
    },
    entry: resolveApp('src/index.js'),
    devtool: 'source-map',
    // devtool: 'eval',
    output: {
      // path: outputPath,
      path: resolveApp('dev'),
      // filename: outputFile,
      // filename: "[name].js",
      filename: libraryName + '.js',
      library: libraryName,
      libraryTarget: 'umd',
      umdNamedDefine: true,
      globalObject: "typeof self !== 'undefined' ? self : this",
      // Point sourcemap entries to original disk location (format as URL on Windows)
      devtoolModuleFilenameTemplate: info =>
        path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
    },
    module: {
      rules: [
        {
          test: /(\.jsx|\.js)$/,
          loader: 'babel-loader',
          exclude: /(node_modules|bower_components)/
        },
        {
          test: /(\.jsx|\.js)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: [
            require.resolve('style-loader'),
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              },
            },
            {
              loader: require.resolve('postcss-loader'),
              options: {
                // Necessary for external CSS imports to work
                // https://github.com/facebookincubator/create-react-app/issues/2677
                ident: 'postcss',
                plugins: () => [
                  require('postcss-flexbugs-fixes'),
                  autoprefixer({
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9', // React doesn't support IE8 anyway
                    ],
                    flexbox: 'no-2009',
                  }),
                  require('cssnano')(),
                ],
              },
            },
            "sass-loader",
          ],
        },
        {
          test: /\.html$/,
          use: ["html-loader"]
        },
      ]
    },
    plugins: [
      // new CleanWebpackPlugin(),
      // new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
      modules: [
        path.resolve('./node_modules'),
        path.resolve('./src'),
      ],
      extensions: ['.json', '.js']
    }
  },
];

module.exports = config;
