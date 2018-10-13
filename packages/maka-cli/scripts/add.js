'use strict';

const chalk = require('chalk');
const paths = require('../config/paths');
const utils = require('./utils');
const got =  require('got')
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

const add = async()=>{
    var res = await got(`https://hub.makajs.org/${appName}/latest`)
    var version = JSON.parse(res.body).version
    utils.yarn(['add', `https://hub.makajs.org/${appName}/-/@${version}`, '--exact'], paths.appSrc)
} 
add()


