

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
// const webpack = require('webpack');
const paths = require('../config/paths');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
// const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const printBuildError = require('react-dev-utils/printBuildError');
const spawn = require('cross-spawn');
const utils = require('./utils');
const packageJson = require(paths.appPackageJson);
const beautify = require('js-beautify');

const versionArg = process.argv.find(a => a.indexOf('version:') !== -1);
const version = versionArg ? versionArg.replace('version:', '') : '';

// const webserverArg = process.argv.find(a => a.indexOf('webserver:') != -1);
// const webserver = webserverArg ? webserverArg.replace('webserver:', '') : '';

// const apiserverArg = process.argv.find(a => a.indexOf('apiserver:') != -1);
// const apiserver = apiserverArg ? apiserverArg.replace('apiserver:', '') : '';

const isDev = process.argv[process.argv.length - 1] === 'true';
const outputPath = isDev ? paths.appDeployDev : paths.appDeploy;


/*
const createWebpackConfig = require('../config/webpack.config');
const config = createWebpackConfig({ isProd: !isDev, outputPath: `${outputPath}/${packageJson.name}/${packageJson.version}` });
*/

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

let coreDirectory,
  coreVersion;

async function main() {
  // delSdkFiles()
  // await build()
  clearTargetDirectory();
  copyCoreLib();
  copyDep();
  createMainJsFile();
  createHtmlFile();
  copyAssets();

  console.log(chalk.green(`Packaged successfully,Output directory:${outputPath}\n`));
  return Promise.resolve();
}

/*
function delSdkFiles() {
  console.log(`  ${chalk.bold('[1/6]')} Clear maka sdk files, directory:${outputPath}`);
  utils.delSdkFiles(outputPath + '/core');
}
*/
function clearTargetDirectory() {
  console.log(`  ${chalk.bold('[1/5]')} Clear target directory, directory:${outputPath}`);
  utils.delDir(outputPath);
  if (!fs.existsSync(outputPath)) { fs.mkdirSync(outputPath); }
}

/*
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
*/

function copyCoreLib() {
  console.log(`  ${chalk.bold('[2/5]')} Copy sdk...`);
  let ver = version;
  const libPath = path.resolve(__dirname, '..', 'node_modules', '@makajs', 'sdk', 'dist', isDev ? 'debug' : 'release');
  if (!ver) {

    const packageJson = require(path.resolve(__dirname, '..', 'node_modules', '@makajs', 'sdk', 'package.json'));
    ver = packageJson.version;
  }

  const target = `${outputPath}/core/v${ver}/`;
  coreVersion = ver;
  coreDirectory = target;

  if (!fs.existsSync(`${outputPath}/core`)) { fs.mkdirSync(`${outputPath}/core`); }

  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
  }
  fs.copySync(libPath, target);
  // fs.copySync(libPath, outputPath)
}

function copyDep() {
  console.log(`  ${chalk.bold('[3/5]')} Copy dependency app...`);
  spawn.sync('node',
    [ path.resolve(__dirname, '..', 'scripts', 'copy-dep-deploy.js'), isDev, outputPath, version ],
    { stdio: 'inherit' }
  );
}

function createMainJsFile() {
  console.log(`  ${chalk.bold('[4/5]')} Create an main file...`);
  const tplPath = path.resolve(__dirname, '..', 'template', isDev ? 'main.js' : 'main.min.js');
  let content = fs.readFileSync(tplPath, 'utf-8');
  if (packageJson.requirejs && packageJson.requirejs.paths) {
    const strPaths = JSON.stringify(packageJson.requirejs.paths);
    content = content.replace('<ext>', strPaths.substr(1, strPaths.length - 2));
  } else {
    content = content.replace('<ext>', '');
  }

  const configJson = fs.readFileSync(path.resolve(outputPath, 'config.json'), 'utf-8');
  content = content.replace('window.MAKA = maka;', `
        window.MAKA = maka;
        window.MAKA.version = '${version}';
        maka.init({
            baseUrl: "",
            appUrls:  ${beautify.js(configJson)}
        });
    `);

  fs.writeFileSync(path.resolve(coreDirectory, isDev ? 'main.js' : 'main.min.js'), content);
  fs.writeFileSync(path.resolve(coreDirectory, isDev ? 'maka-main.js' : 'maka-main.min.js'), content);

  if (fs.existsSync(path.resolve(outputPath, 'config.json'))) {
    fs.unlinkSync(path.resolve(outputPath, 'config.json'));
  }
}

function createHtmlFile() {
  // console.log(`  ${chalk.bold('[5/5]')} Create an html file...`)
  /*
    const htmlTplPath = path.resolve(paths.appPath, 'index.html');
    let html = fs.readFileSync(htmlTplPath, 'utf-8');
    if (isDev) {
        html = html.replace('require.min.js', 'require.js').replace('maka-main.min.js', 'maka-main.js')
    }

    fs.writeFileSync(path.resolve(outputPath, 'index.html'), html);
    */
  const htmlTplPath = path.resolve(paths.appPath, 'index.html');
  let html = fs.readFileSync(htmlTplPath, 'utf-8');

  html = html.replace(/__assets__/gm, `_assets/v${coreVersion}/`);
  if (isDev) {
    html = html.replace('require.min.js', `core/v${coreVersion}/require.js`).replace('maka-main.min.js', `core/v${coreVersion}/maka-main.js`);
  } else {
    html = html.replace('require.min.js', `core/v${coreVersion}/require.min.js`).replace('maka-main.min.js', `core/v${coreVersion}/maka-main.min.js`);
  }

  fs.writeFileSync(path.resolve(outputPath, 'index.html'), html);
}

function copyAssets() {
  console.log(`  ${chalk.bold('[5/5]')} Copy assets...`);
  const assetsPath = path.resolve(paths.appPath, 'assets');
  const version = coreVersion;
  if (fs.existsSync(assetsPath)) {
    if (!fs.existsSync(`${outputPath}/_assets`)) {
      fs.mkdirSync(`${outputPath}/_assets`);
    }

    if (!fs.existsSync(`${outputPath}/_assets/v${version}`)) {
      fs.mkdirSync(`${outputPath}/_assets/v${version}`);
      fs.copySync(assetsPath, `${outputPath}/_assets/v${version}`);
    }
  }
}

