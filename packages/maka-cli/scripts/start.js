

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

process.on('unhandledRejection', err => {
  throw err;
});

require('../config/env');

const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
// const clearConsole = require('react-dev-utils/clearConsole');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const paths = require('../config/paths');
const utils = require('./utils');
const readlineSync = require('readline-sync');

const createDevServerConfig = require('../config/webpackDevServer.config');
const spawn = require('react-dev-utils/crossSpawn');

const packageJson = require(paths.appPackageJson);

const isDev = process.argv[process.argv.length - 1] === 'true';
const outputPath = paths.appPublic;

const createWebpackConfig = require('../config/webpack.config');
const config = createWebpackConfig({ isProd: !isDev, outputPath, isStart: true });

const {
  choosePort,
  createCompiler,
  // prepareProxy,
  prepareUrls,
} = require('react-dev-utils/WebpackDevServerUtils');

if (!checkRequiredFiles([ paths.appIndexJs ])) {
  process.exit(0);
}

try {
  main();
} catch (err) {
  if (err && err.message) {
    console.log(err);
  }
  process.exit(0);
}


async function main() {
  createDir();
  copyCoreLib();
  copyDep();
  createMainJsFile();
  createHtmlFile();
  copyAssets();
  const ret = getServerOption();
  const port = await choosePort(ret.host, ret.port);
  startServer({ ...ret, port });

}


function createDir() {
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
  } else {
    utils.delSdkFiles(outputPath);
  }
}

function copyCoreLib() {
  const coreLibPath = path.resolve(__dirname, '..', 'node_modules', '@makajs', 'sdk', 'dist', isDev ? 'debug' : 'release');
  fs.copySync(coreLibPath, outputPath);
}


function copyDep() {
  const r = spawn.sync('node',
    [ path.resolve(__dirname, '..', 'scripts', 'copy-dep.js'), isDev, outputPath ]
    // { stdio: 'inherit' }
  );

  const stdout = r.stdout && r.stdout.toString();
  if (stdout) {
    console.log(chalk.yellow(stdout));
    if (readlineSync.keyInYN('Exists warning, Continue?')) { //eslint-disable-line
    } else {
      process.exit(0);
    }
  }
}

function createMainJsFile() {
  const tplPath = path.resolve(__dirname, '..', 'template', isDev ? 'main.js' : 'main.min.js');
  let content = fs.readFileSync(tplPath, 'utf-8');
  if (packageJson.requirejs && packageJson.requirejs.paths) {
    const strPaths = JSON.stringify(packageJson.requirejs.paths);
    content = content.replace('<ext>', strPaths.substr(1, strPaths.length - 2));
  } else {
    content = content.replace('<ext>', '');
  }
  fs.writeFileSync(path.resolve(outputPath, isDev ? 'main.js' : 'main.min.js'), content);
  fs.writeFileSync(path.resolve(outputPath, isDev ? 'maka-main.js' : 'maka-main.min.js'), content);
}

function createHtmlFile() {
  const htmlTplPath = path.resolve(paths.appPath, 'index.html');
  let html = fs.readFileSync(htmlTplPath, 'utf-8');
  if (isDev) {
    html = html.replace('require.min.js', 'require.js').replace('main.min.js', 'main.js');
  }
  fs.writeFileSync(path.resolve(outputPath, 'index.html'), html);
}

function copyAssets() {
  const assetsPath = path.resolve(paths.appPath, 'assets');
  if (fs.existsSync(assetsPath)) {
    const target = outputPath;
    fs.copySync(assetsPath, target);
  }
}


function getServerOption() {

  const serverOption = packageJson.server;
  const DEFAULT_PORT = parseInt(serverOption.port, 10) || 8000;
  const HOST = serverOption.host || '0.0.0.0';
  return {
    port: DEFAULT_PORT,
    host: HOST,
    serverOption,
  };
}

function startServer(option) {
  const serverOption = option.serverOption;
  const port = option.port;
  const host = option.host;
  if (port == null) {
    // No port to return directly
    return;
  }


  const protocol = serverOption.https === 'true' ? 'https' : 'http';
  const appName = utils.fixName(require(paths.appPackageJson).name);
  const urls = prepareUrls(protocol, host, port);

  // const compiler = createCompiler(webpack, config, appName, urls, true);
  const compiler = createCompiler({ webpack, config, appName, urls, useYarn: true });
  // Load agent configuration
  const proxyConfig = serverOption.proxy || undefined;
  // const proxyConfig = prepareProxy(proxySetting, paths.appPublic);
  // server configuration
  const serverConfig = createDevServerConfig(
    proxyConfig,
    urls.lanUrlForConfig
  );

  const devServer = new WebpackDevServer(compiler, serverConfig);
  // Start the server
  devServer.listen(port, host, err => {
    if (err) {
      return console.log(err);
    }

    // clearConsole();
    console.log(chalk.cyan('Start the server...\n'));
    // openBrowser(urls.localUrlForBrowser);
  });

  [ 'SIGINT', 'SIGTERM' ].forEach(function(sig) {
    process.on(sig, function() {
      devServer.close();
      process.exit();
    });
  });

}
