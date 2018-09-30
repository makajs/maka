'use strict';

const chalk = require('chalk');
const paths = require('../config/paths');
const utils = require('./utils');
const consts = require('../config/consts');

let appName = process.argv[2];

if (typeof appName === 'undefined') {
    console.error('please input appName:');
    console.log();
    console.log('example:');
    console.log(`  maka add ${chalk.green('login')}`);
    console.log();
    process.exit(1);
}

utils.yarn(['add', `http://www.makajs.org/${appName}/-/@latest`, '--exact'], paths.appSrc)
