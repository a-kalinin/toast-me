/* global __dirname, require, module*/

const path = require('path');
const fs = require('fs');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ESLintPlugin = require('eslint-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const port = process.env.PORT || 3005;

const config = {
    bail: true,
    mode: 'development',
    entry: resolveApp('dev/index.js'),
    devtool: 'source-map',
    // devtool: 'eval',
    output: {
      path: resolveApp('dev'),
      // filename: outputFile,
      filename: "index.js",
      library: 'dev-env',
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
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: '[name]__[local]___[hash:base64:5]'
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
            require.resolve("sass-loader"),
          ],
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            // require.resolve('style-loader'),
            // require.resolve('css-loader'),
            // {
            //   loader: require.resolve('css-loader'),
            //   options: {
            //     importLoaders: 1,
            //     modules: {
            //       localIdentName: '[name]__[local]___[hash:base64:5]'
            //     }
            //   },
            // },
            // {
            //   loader: require.resolve('postcss-loader'),
            //   options: {
            //     postcssOptions: {
            //       plugins: [
            //         require.resolve('postcss-flexbugs-fixes'),
            //         autoprefixer({
            //           overrideBrowserslist: [
            //             '>1%',
            //             'last 4 versions',
            //             'Firefox ESR',
            //             'not ie < 9', // React doesn't support IE8 anyway
            //           ],
            //           flexbox: 'no-2009',
            //         }),
            //         require('cssnano')(),
            //       ]
            //     },
            //   },
            // },
            // require.resolve("sass-loader"),
          ],
        },
        {
          test: /\.html$/,
          use: ["html-loader"]
        },
      ]
    },
    plugins: [
      // new ESLintPlugin({ extensions: ['jsx', 'js'] }),
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        title: 'Test Toast-Me',
      }),
    ],
    resolve: {
      modules: [
        path.resolve('./node_modules'),
        path.resolve('./dev'),
        path.resolve('./lib'),
      ],
      extensions: ['.json', '.js']
    },
    devServer: {
      watchFiles: `${resolveApp('dev')}/**/*`,
      port: port,
      open: true,
    }
  };

module.exports = config;
