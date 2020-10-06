

const paths = require('../config/paths');
const utils = require('./utils');
const chalk = require('chalk');

const appName = process.argv[2];

if (typeof appName === 'undefined') {
  console.error('Please enter appName:');
  console.log();
  console.log('example:');
  console.log(`  maka remove ${chalk.green('login')}`);
  console.log();
  process.exit(0);
}

utils.yarn([ 'remove', appName, '--exact' ], paths.appSrc);
