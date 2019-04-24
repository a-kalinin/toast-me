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

let compilerToastMe = webpack(configToastMe);

compilerToastMe.run(function(err, stats) {
  if (err) {
    console.error(err);
    return;
  }

  console.log();
  console.log(chalk.blue('Compiler ToastMe run successfully'));

  const options = {
    contentBase: resolveApp('dev'),
    // hot: true,
    // watchContentBase: true,
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
  });

});

