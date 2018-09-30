'use strict';

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';


process.on('unhandledRejection', err => {
  throw err;
});

require('../config/env');

const chalk = require('chalk');
const fs = require('fs-extra');
const webpack = require('webpack');

const paths = require('../config/paths');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const printBuildError = require('react-dev-utils/printBuildError');
const isDev = process.argv[process.argv.length - 1] === 'true'
const outputPath = isDev ? paths.appDevBuild : paths.appProdBuild

const createWebpackConfig = require('../config/webpack.config');
const config = createWebpackConfig({ isProd: !isDev, outputPath: outputPath });

//file does not exist
if (!checkRequiredFiles([paths.appIndexJs])) {
  process.exit(1);
}

console.log(chalk.green(`Start compiling ...`));

try {
  main()
}
catch (err) {
  console.log(chalk.red('Compile failed.\n'));
  //Output compilation exception
  printBuildError(err);
  process.exit(1);
}


async function main() {
  emptyDir()
  var ret = await build()
  if (ret.warnings) {
    //Warning
    if (ret.warnings.length) {
      console.log(chalk.yellow('Compile warning.\n'));
      console.log(ret.warnings.join('\n\n'));
    } else {
      console.log(chalk.green(`Compile successfully, output directory:${outputPath}`));
    }
  }
}

function emptyDir() {
  console.log(`  ${chalk.bold('[1/2]')} empty directory:${outputPath}`)
  //empty files in the directory
  fs.emptyDirSync(outputPath);
}

function build(previousFileSizes) {
  console.log(`  ${chalk.bold('[2/2]')} compile app...`)

  let compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err);
      }
      const messages = formatWebpackMessages(stats.toJson({}, true));

      //Compile exception
      if (messages.errors.length) {
        if (messages.errors.length > 1) {
          messages.errors.length = 1;
        }
        return reject(new Error(messages.errors.join('\n\n')));
      }
      return resolve({
        stats,
        previousFileSizes,
        warnings: messages.warnings,
      });
    });
  });
}

