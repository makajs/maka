'use strict';

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const resolveOwn = relativePath => path.resolve(__dirname, '..', relativePath);

module.exports = {
  appPath: resolveApp('.'),
  ownPath: resolveOwn('.'),
  ownNodeModules: resolveOwn('node_modules'),
};
