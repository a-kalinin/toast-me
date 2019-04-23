const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const path = require('path');
const chalk = require('chalk');

const port = 3005;
const config = require('../webpack.config.dev');
const options = {
  contentBase: path.resolve(__dirname, 'dev'),
  hot: true,
  watchContentBase: true,
  open: true,
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(port, 'localhost', () => {
  console.log();
  console.log(chalk.green(`dev server listening on port ${port}`));
  console.log();
});