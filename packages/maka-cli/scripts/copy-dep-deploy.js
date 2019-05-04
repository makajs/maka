'use strict';

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

process.on('unhandledRejection', err => {
  throw err;
});

require('../config/env');

const path = require('path');
const fs = require('fs-extra');
const paths = require('../config/paths');

const packageJson = require(paths.appPackageJson);
var appsDirectorys = []

if (packageJson.subAppDir instanceof Array) {
  packageJson.subAppDir.forEach(o => {
    appsDirectorys.push(path.join(paths.appPath, o))
  })
}
else {
  appsDirectorys.push(path.join(paths.appPath, packageJson.subAppDir))
}

//var appsDirectory = path.join(paths.appPath, packageJson.subAppDir);
const chalk = require('chalk');
const targetPath = process.argv[3];
const isDev = process.argv[2] === 'true';
const version = process.argv[4]
var depPaths = [];
appsDirectorys.forEach(p => {
  scanLocalApps(p)
})

scanRemoteApps(packageJson)

var json = {

}

depPaths.forEach(p => {
  let buildPath = path.resolve(p[0], 'build', isDev ? 'dev' : 'prod')

  if (fs.existsSync(buildPath)) {
    var target = `${targetPath}/${p[1]}/v${version? version: p[2]}`
    /*if(!fs.existsSync(target)){
      fs.mkdirSync(target);
    }*/
    fs.copySync(buildPath, target);
    json[p[1]] = isDev ? `${p[1]}/v${version? version: p[2]}/${p[1]}.js` : `${p[1]}/v${version? version: p[2]}/${p[1]}.min.js`
  }
  else {
    console.log(chalk.yellow(`[Warn] Please compile app`));
    console.log(chalk.yellow(`       Name: ${p[1]}`))
    console.log(chalk.yellow(`       Path: ${path.relative(paths.appPath, p[0])}`))
    console.log(chalk.yellow(`       Command: yarn build ${isDev ? '--dev' : ''}`))
    console.log()
  }
})

fs.writeFileSync(targetPath + '/config.json', JSON.stringify(json));

process.exit(0)

function scanLocalApps(dir) {
  if (!fs.existsSync(dir))
    return

  var files = fs.readdirSync(dir, () => { })
  files.forEach(fileName => {
    var stats = fs.statSync(path.join(dir, fileName))
    if (stats.isFile()) {
      if (fileName === 'package.json') {
        let subAppJson = require(path.join(dir, 'package.json'))
        if (subAppJson.isMakaApp) {
          let appPath = path.relative(paths.appPath, dir)
          if (depPaths.indexOf(appPath) == -1) {
            depPaths.push([appPath, subAppJson.name, subAppJson.version])
            scanRemoteApps(subAppJson)
          }
        }
      }
    } else if (stats.isDirectory() && fileName != 'node_modules') {
      scanLocalApps(path.join(dir, fileName))
    }
  })
}

function scanRemoteApps(json) {
  if (!json.dependencies) return
  Object.keys(json.dependencies).forEach(k => {
    var filePath = path.resolve(paths.appSrc, 'node_modules', k, 'package.json')
    if (fs.existsSync(filePath)) {
      let pkg = JSON.parse(fs.readFileSync(path.resolve(paths.appSrc, 'node_modules', k, 'package.json'), 'utf-8'))
      if (pkg.isMakaApp) {
        let appPath = path.join(paths.appSrc, 'node_modules', k)
        if (depPaths.indexOf(appPath) == -1) {
          depPaths.push([appPath, pkg.name, pkg.version])
          scanRemoteApps(pkg)
        }
      }
    }
  })
}