

const path = require('path');
const fs = require('fs');
const url = require('url');

// 应用目录
const appDirectory = fs.realpathSync(process.cwd());

const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const resolveOwn = relativePath => path.resolve(__dirname, '..', relativePath);
const resolveAppIndex = fileName => {
  let filePath = path.resolve(appDirectory, fileName);
  if (!fs.existsSync(filePath)) {
    filePath = path.resolve(appDirectory, 'src', fileName);
  }
  return filePath;
};

const envPublicUrl = process.env.PUBLIC_URL;


// 路径中末尾反斜杆的处理
function ensureSlash(path, needsSlash) {
  const hasSlash = path.endsWith('/');
  if (hasSlash && !needsSlash) {
    return path.substr(path, path.length - 1);
  } else if (!hasSlash && needsSlash) {
    return `${path}/`;
  }
  return path;

}


const getPublicUrl = appPackageJson => {
  try {
    const obj = require(appPackageJson);
    return envPublicUrl || (obj && obj.homepage);
  } catch (ex) {
    return;
  }
};


function getServedPath(appPackageJson) {
  const publicUrl = getPublicUrl(appPackageJson);
  const servedUrl =
        envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : '/');
  return ensureSlash(servedUrl, true);
}

module.exports = {
  dotenv: resolveApp('.env'),
  appPath: resolveApp('.'),
  appBuild: resolveApp('build'),
  appDevBuild: resolveApp('build/dev'),
  appProdBuild: resolveApp('build/prod'),
  appPackage: resolveApp('build/pkg'),
  appPackageDev: resolveApp('build/pkg-dev'),
  appDeploy: resolveApp('build/deploy'),
  appDeployDev: resolveApp('build/deploy-dev'),
  appPublic: resolveApp('dist'),
  appIndexJs: resolveAppIndex('index.js'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('.'),
  yarnLockFile: resolveApp('yarn.lock'),
  appNodeModules: resolveApp('node_modules'),
  publicUrl: getPublicUrl(resolveApp('package.json')),
  servedPath: getServedPath(resolveApp('package.json')),
  ownPath: resolveOwn('.'),
  ownNodeModules: resolveOwn('node_modules'),

};
