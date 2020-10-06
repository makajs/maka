

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

// The promise does not handle the exception of the reject
process.on('unhandledRejection', err => {
  throw err;
});

require('../config/env');

const path = require('path');
const chalk = require('chalk');
const fs = require('fs-extra');
const webpack = require('webpack');
const paths = require('../config/paths');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const printBuildError = require('react-dev-utils/printBuildError');
const spawn = require('cross-spawn');
const utils = require('./utils');
const packageJson = require(paths.appPackageJson);
const isDev = process.argv[process.argv.length - 1] === 'true';
const outputPath = isDev ? paths.appPackageDev : paths.appPackage;

const createWebpackConfig = require('../config/webpack.config');
const config = createWebpackConfig({ isProd: !isDev, outputPath });

if (!checkRequiredFiles([ paths.appIndexJs ])) {
  process.exit(0);
}
console.log(chalk.green('Start packaging ...'));

try {
  main();
} catch (err) {
  console.log(chalk.red('Package failure.\n'));
  // Output compilation exception
  printBuildError(err);
  process.exit(0);
}


async function main() {
  delSdkFiles();
  await build();
  copyCoreLib();
  copyDep();
  createMainJsFile();
  createHtmlFile();
  copyAssets();

  console.log(chalk.green(`Packaged successfully,Output directory:${outputPath}\n`));
  return Promise.resolve();
}

function delSdkFiles() {
  console.log(`  ${chalk.bold('[1/6]')} Clear maka sdk files, directory:${outputPath}`);
  utils.delSdkFiles(outputPath);
}

function build() {
  console.log(`  ${chalk.bold('[2/6]')} Compile app...`);
  const compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err);
      }
      const messages = formatWebpackMessages(stats.toJson({}, true));
      if (messages.errors.length) {
        if (messages.errors.length > 1) {
          messages.errors.length = 1;
        }
        return reject(new Error(messages.errors.join('\n\n')));
      }
      return resolve({
        warnings: messages.warnings,
      });
    });
  });
}

function copyCoreLib() {
  console.log(`  ${chalk.bold('[3/6]')} Copy sdk...`);
  const libPath = path.resolve(__dirname, '..', 'node_modules', '@makajs', 'sdk', 'dist', isDev ? 'debug' : 'release');
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
  }
  fs.copySync(libPath, outputPath);
}

function copyDep() {
  console.log(`  ${chalk.bold('[4/6]')} Copy dependency app...`);
  spawn.sync('node',
    [ path.resolve(__dirname, '..', 'scripts', 'copy-dep.js'), isDev, outputPath ],
    { stdio: 'inherit' }
  );
}

function createMainJsFile() {
  console.log(`  ${chalk.bold('[5/6]')} Create an main file...`);
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
  console.log(`  ${chalk.bold('[6/6]')} Create an html file...`);

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

