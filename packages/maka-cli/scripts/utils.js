const execSync = require('child_process').execSync;
const dns = require('dns');
const chalk = require('chalk');
const spawn = require('react-dev-utils/crossSpawn');
const fs = require('fs-extra');
const path = require('path');

async function yarn(args, root) {
  const isOnline = await checkIfOnline();

  const command = 'yarnpkg';
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


async function npm(args) {
  const isOnline = await checkIfOnline();

  const command = 'npm';
  if (!isOnline) {
    args.push('--offline');
  }
  args.push('--cwd');

  if (!isOnline) {
    console.log(chalk.yellow('Please connect to the network.'));
    console.log();
  }
  spawn.sync(command, args, { stdio: 'inherit' });
}

function getProxy() {
  if (process.env.https_proxy) {
    return process.env.https_proxy;
  }
  try {
    const httpsProxy = execSync('npm config get https-proxy')
      .toString()
      .trim();
    return httpsProxy !== 'null' ? httpsProxy : undefined;
  } catch (e) {
    return;
  }

}

function checkIfOnline() {
  return new Promise(resolve => {
    dns.lookup('registry.yarnpkg.com', err => {
      let proxy;
      if (err != null && (proxy = getProxy())) {
        const url = 'registry.yarnpkg.com';
        dns.lookup(url.parse(proxy).hostname, proxyErr => {
          resolve(proxyErr === null);
        });
      } else {
        resolve(err == null);
      }
    });
  });
}

function fixName(name) {
  if (name.indexOf('@') === -1) return name;
  return name.replace('@', '').replace('makajs', 'maka').replace('/', '-');
}

function delSdkFiles(dir) {
  const fileNames = [
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
    'require.min.js',
  ];

  fileNames.forEach(f => {
    if (fs.existsSync(path.join(dir, f))) {
      fs.unlinkSync(path.join(dir, f));
    }
  });
}

function delDir(path) {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach(file => {
      const curPath = path + '/' + file;
      if (fs.statSync(curPath).isDirectory()) {
        delDir(curPath); // 递归删除文件夹
      } else {
        fs.unlinkSync(curPath); // 删除文件
      }
    });
    fs.rmdirSync(path);
  }
}

module.exports = {
  yarn,
  npm,
  fixName,
  delSdkFiles,
  delDir,
};

