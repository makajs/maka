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
var appsDirectory = path.join(paths.appPath, packageJson.subAppDir);
const targetPath = process.argv[3];
const isDev = process.argv[2] === 'true';
var depPaths = [];

scanLocalApps(appsDirectory)
scanRemoteApps(packageJson)


depPaths.forEach(p => {
  let buildPath = path.resolve(p, 'build', isDev ? 'dev' : 'prod')
  var stat = fs.statSync(buildPath);
  if(stat.isDirectory()){
    fs.copySync(buildPath, targetPath);
  }
  else{
    console.log('fewfew')
  }
})


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
            depPaths.push(appPath)
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
  Object.keys(json.dependencies).forEach(k => {
    let pkg = JSON.parse(fs.readFileSync(path.resolve(paths.appSrc, 'node_modules', k, 'package.json'), 'utf-8'))
    if (pkg.isMakaApp) {
      let appPath = path.join(paths.appSrc, 'node_modules', k)
      if (depPaths.indexOf(appPath) == -1) {
        depPaths.push(appPath)
        scanRemoteApps(pkg)
      }
    }
  })
}