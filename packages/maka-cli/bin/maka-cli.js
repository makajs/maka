#!/usr/bin/env node
'use strict';

var chalk = require('chalk');

var currentNodeVersion = process.versions.node;
var semver = currentNodeVersion.split('.');
var major = semver[0];

if (major < 8) {
    console.error(
        chalk.red(
            'You are running Node ' +
            currentNodeVersion +
            '.\n' +
            'Maka requires Node 8 or higher.maka. \n' +
            'Please update your version of Node.'
        )
    );
    process.exit(1);
}

var which = require('which'),
    flag = false

try {
    const resolved = which.sync('yarn')
    if (resolved) {
        flag = true
    }
} catch (err) {
    console.log(err)
}
if (!flag) {
    console.log(chalk.yellowBright('Maka depends on yarn, you do not install it. \n'))
    console.log(chalk.greenBright('Please install yarn first.\n'))
    console.log(chalk.cyan('npm i -g yarn'))
    process.exit(1);
}

const packageJson = require('../package.json');
const program = require('commander');

program
    .version(packageJson.version)

program
    .command('app <appName>')
    .description('create app')
    .action(function (...args) {
        let s = run('app', args);
        process.exit(s);
    })

program
    .command('build')
    .description('build app')
    .option('-d, --dev', 'development')
    .action(function (...args) {
        let s = run('build', args)
        process.exit(s);
    })

program
    .command('pkg')
    .description('packaging app')
    .option('-d, --dev', 'development')
    .action(function (...args) {
        let s = run('pkg', args);
        process.exit(s);
    })

program
    .command('start')
    .description('start app')
    .option('-d, --dev', 'development')
    .action(function (...args) {
        let s = run('start', args);
        process.exit(s);
    })

program
    .command('install')
    .description('install depends')
    .action(function (...args) {
        let s = run('install', args);
        process.exit(s);
    })

program
    .command('upgrade')
    .description('upgrade depends')
    .action(function (...args) {
        let s = run('upgrade', args);
        process.exit(s);
    })

program
    .command('add')
    .description('add depends')
    .action(function (...args) {
        let s = run('add', args);
        process.exit(s);
    })

program
    .command('remove')
    .description('remove depends')
    .action(function (...args) {
        let s = run('remove', args);
        process.exit(s);
    })

program
    .command('publish')
    .description('publish app')
    .action(function (...args) {
        let s = run('publish', args);
        process.exit(s);
    })

program
    .command('adduser')
    .description('adduser')
    .action(function (...args) {
        let s = run('adduser', args);
        process.exit(s);
    })

program
    .command('*')
    .action(function (env) {
        console.log('Unknown command "%s"', env)
    })

program.parse(process.argv)

function run(script, args) {
    var isDev = false

    if (typeof args[args.length - 1] == 'object' && args[args.length - 1].dev) {
        isDev = true
    }

    if (typeof args[0] !== 'string')
        args = []

    if (typeof args[args.length - 1] != 'string')
        args.pop()

    args.push(isDev)
    args.splice(0, 0, require.resolve('../scripts/' + script))
    const spawn = require('react-dev-utils/crossSpawn');
    const result = spawn.sync(
        'node',
        args,
        { stdio: 'inherit' }
    );
    if (result.signal) {
        if (result.signal === 'SIGKILL') {
            console.log('The build failed because the process exited too early. ' +
            'This probably means the system ran out of memory or someone called ' +
            '`kill -9` on the process.');
        } else if (result.signal === 'SIGTERM') {
            console.log('The build failed because the process exited too early. ' +
            'Someone might have called `kill` or `killall`, or the system could ' +
            'be shutting down.');
        }
        process.exit(1);
    }
    return result.status;

}