

const chalk = require('chalk');
const paths = require('../config/paths');
const utils = require('./utils');
const got = require('got');
// const consts = require('../config/consts');

const appName = process.argv[2];

if (typeof appName === 'undefined') {
  console.error('please input appName:');
  console.log();
  console.log('example:');
  console.log(`  maka add ${chalk.green('login')}`);
  console.log();
  process.exit(0);
}

const add = async () => {
  const res = await got(`https://hub.makajs.org/${appName}/latest`);
  const version = JSON.parse(res.body).version;
  utils.yarn([ 'add', `https://hub.makajs.org/${appName}/-/@${version}`, '--exact' ], paths.appSrc);
};
add();

