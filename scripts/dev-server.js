const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const port = process.env.PORT || 3005;
const configDevEnv = require('./config/webpack.config.devEnv');
const configToastMe = require('./config/webpack.config.devLib');

let devIsRunning = false;
const runDev = function() {
  if (devIsRunning) return;

  const options = {
    contentBase: resolveApp('dev'),
    port: port,
    open: true,
    stats: 'errors-only',
  };

  webpackDevServer.addDevServerEntrypoints(configDevEnv, options);
  const compiler = webpack(configDevEnv);
  const server = new webpackDevServer(compiler, options);

  server.listen(port, 'localhost', () => {
    console.log();
    console.log(chalk.green(`dev server listening on port ${port}`));
    console.log();
    devIsRunning = true;
  });
};

const compilerToastMe = webpack(configToastMe);

compilerToastMe.watch({}, function(err, stats) {
  if (err) {
    console.error(err);
    return;
  }
  console.log();
  console.log(chalk.blue('Compiler ToastMe cycle run successfully'));
  runDev();
});

