const execSync = require('child_process').execSync;
const dns = require('dns');
const chalk = require('chalk');
const spawn = require('react-dev-utils/crossSpawn');
const fs = require('fs-extra');
const path = require('path');

async function yarn(args, root) {
    let command;
    let isOnline = await checkIfOnline()

    command = 'yarnpkg';
    if (!isOnline) {
        args.push('--offline');
    }
    args.push('--cwd');
    args.push(root);

    if (!isOnline) {
        console.log(chalk.yellow('Please connect to the network.'));
        console.log();
    }
    spawn.sync(command, args, { stdio: 'inherit' });
}

function getProxy() {
    if (process.env.https_proxy) {
        return process.env.https_proxy;
    } else {
        try {
            let httpsProxy = execSync('npm config get https-proxy')
                .toString()
                .trim();
            return httpsProxy !== 'null' ? httpsProxy : undefined;
        } catch (e) {
            return;
        }
    }
}

function checkIfOnline(useYarn) {
    return new Promise(resolve => {
        dns.lookup('registry.yarnpkg.com', err => {
            let proxy;
            if (err != null && (proxy = getProxy())) {
                dns.lookup(url.parse(proxy).hostname, proxyErr => {
                    resolve(proxyErr == null);
                });
            } else {
                resolve(err == null);
            }
        });
    });
}

function fixName(name) {
    if (name.indexOf('@') == -1) return name
    return name.replace('@', '').replace('makajs', 'maka').replace('/', '-')
}

function delSdkFiles(dir){
    var fileNames = [
        'css.js', 
        'css.min.js',
        'immutable.js',
        'immutable.min.js', 
        'maka-sdk.js',
        'maka-sdk.min.js',
        'main.js',
        'main.min.js',
        'prop-types.js',
        'prop-types.min.js',
        'react-dom.development.js',
        'react-dom.production.min.js',
        'react-redux.js',
        'react-redux.min.js',
        'react.development.js',
        'react.production.min.js',
        'redux.js',
        'redux.min.js',
        'require.js',
        'require.min.js'
      ]

    fileNames.forEach(f=>{
        if( fs.existsSync(path.join(dir, f)) ){
            fs.unlinkSync(path.join(dir, f))
        }
    })
}

module.exports = {
    yarn,
    fixName,
    delSdkFiles
}

