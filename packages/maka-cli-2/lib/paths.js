

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const resolveOwn = relativePath => path.resolve(__dirname, '..', relativePath);
const requireResolve = (id, options) => {
  if (!options) {
    options = { paths: [
      process.cwd(),
      path.join(process.cwd(), 'node_modules'),
      path.join(__dirname, '..', 'node_modules'),
    ] };
  }

  return require.resolve(id, options);

};

module.exports = {
  appPath: resolveApp('.'),
  ownPath: resolveOwn('.'),
  ownNodeModules: resolveOwn('node_modules'),
  rr: requireResolve,
};
