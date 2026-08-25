const chalk = require('chalk');

const port = process.env.PORT || 3005;

async function main() {
  const { default: webpack } = await import('webpack');
  const { default: WebpackDevServer } = await import('webpack-dev-server');

  const configDevEnv = require('./config/webpack.config.devEnv');
  const configToastMe = require('./config/webpack.config.devLib');

  let devIsRunning = false;
  const runDev = function () {
    if (devIsRunning) return;

    const compiler = webpack(configDevEnv);
    const devServerOptions = { ...configDevEnv.devServer, open: true };
    const server = new WebpackDevServer(devServerOptions, compiler);

    (async () => {
      await server.start();
      console.log();
      console.log(chalk.green(`dev server listening on port ${port}`));
      console.log();
      devIsRunning = true;
    })();
  };

  const compilerToastMe = webpack(configToastMe);

  compilerToastMe.watch({}, function (err) {
    if (err) {
      console.error(err);
      return;
    }
    console.log();
    console.log(chalk.blue('Compiler ToastMe cycle run successfully'));
    runDev();
  });
}

main();
