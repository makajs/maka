#!/usr/bin/env node
'use strict';

var chalk = require('chalk');

var currentNodeVersion = process.versions.node;
var semver = currentNodeVersion.split('.');
var major = semver[0];

if (major < 4) {
    console.error(
        chalk.red(
            '您当前的node版本是 ' +
            currentNodeVersion +
            '.\n' +
            'maka依赖>=4的版本. \n' +
            '请升级您的node版本.'
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
    console.log(chalk.yellowBright('maka依赖yarn，您没有安装 \n'))
    console.log(chalk.greenBright('请先安装yarn \n'))
    console.log(chalk.cyan('npm i -g yarn'))
    process.exit(1);
}

const packageJson = require('../package.json');
const program = require('commander');

program
    .version(packageJson.version)

program
    .command('app <appName>')
    .description('创建app')
    .action(function (...args) {
        let s = run('app', args);
        process.exit(s);
    })

program
    .command('build')
    .description('构建app')
    .option('-d, --dev', 'development')
    .action(function (...args) {
        let s = run('build', args)
        process.exit(s);
    })

program
    .command('pkg')
    .description('打包app')
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
    .description('安装依赖')
    .action(function (...args) {
        let s = run('install', args);
        process.exit(s);
    })

program
    .command('upgrade')
    .description('更新依赖')
    .action(function (...args) {
        let s = run('upgrade', args);
        process.exit(s);
    })

program
    .command('add')
    .description('增加依赖')
    .action(function (...args) {
        let s = run('add', args);
        process.exit(s);
    })

program
    .command('remove')
    .description('删除依赖')
    .action(function (...args) {
        let s = run('remove', args);
        process.exit(s);
    })

program
    .command('publish')
    .description('发布app')
    .action(function (...args) {
        let s = run('publish', args);
        process.exit(s);
    })

program
    .command('adduser')
    .description('增加用户')
    .action(function (...args) {
        let s = run('adduser', args);
        process.exit(s);
    })

program
    .command('*')
    .action(function (env) {
        console.log('没有这个命令 "%s"', env)
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
            console.log("构建失败，内存溢出或者进程太早退出导致，使用 kill -9 删除进程");
        } else if (result.signal === 'SIGTERM') {
            console.log('构建失败，进程太早退出，可能有人调用kill 或者killall或者系统关闭. ');
        }
        process.exit(1);
    }
    return result.status;

}