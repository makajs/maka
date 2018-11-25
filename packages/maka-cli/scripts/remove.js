'use strict';

const paths = require('../config/paths');
const utils = require('./utils');

let appName = process.argv[2];

if (typeof appName === 'undefined') {
    console.error('Please enter appName:');
    console.log();
    console.log('example:');
    console.log(`  maka remove ${chalk.green('login')}`);
    console.log();
    process.exit(0);
}

utils.yarn(['remove', appName, '--exact'], paths.appSrc)