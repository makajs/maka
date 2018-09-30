'use strict';

const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');
const spawn = require('react-dev-utils/crossSpawn');

let projectName = process.argv[2];

if (typeof projectName === 'undefined') {
  console.error('Please enter appName:');
  console.log();
  console.log('example:');
  console.log(`  maka app ${chalk.green('hello-world')}`);
  console.log();
  process.exit(1);
}
console.log(chalk.green(`Start creating an app...`));

const root = path.resolve(projectName);
const appName = path.basename(root);

try {
  createDir(root, appName)
  createPackageJson(root, appName)
  init(appName, root)
}
catch (reason) {
  exceptionHandler(reason, root)
}

function createDir(root, name) {
  console.log(`  ${chalk.bold('[1/3]')} Create a directory (${root})`)
  fs.ensureDirSync(name);
  process.chdir(root);
}


function createPackageJson(root, name) {
  console.log(`  ${chalk.bold('[2/3]')} Create a package.json file`)
  const packageJson = {
    isMakaApp: true,
    name: name,
    description: name,
    version: '1.0.0',
    license: 'MIT',
    author: '',
    repository: {
      "type": "git",
      "url": `https://github.com/makajs/${name}.git`
    },
    bugs: {
      url: `https://github.com/makajs/${name}/issues`
    },
    homepage: `https://github.com/makajs/${name}#readme`,
    scripts: {
      'start': 'maka start',
      'dev': 'maka start --dev',
      'build': 'maka build',
      'pkg': 'maka pkg'
    },
    dependencies: {
    },
    server: {
      "proxy": null,
      "port": 8000
    },
    subAppDir: './apps'
  };

  fs.writeFileSync(
    path.join(root, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );
}

function init(name, root) {
  console.log(`  ${chalk.bold('[3/3]')} Initialize the application...`)
  const paths = require('../config/paths');
  const initScriptPath = path.resolve(
    __dirname,
    '..',
    'scripts',
    'init.js'
  );
  const originalDirectory = process.cwd();
  const init = require(initScriptPath);
  console.log(root)
  init(root, name, originalDirectory)
}


function exceptionHandler(reason, root) {
  console.log();
  console.log('Installation exit..');
  if (reason.command) {
    console.log(`  ${chalk.cyan(reason.command)} failure.`);
  } else {
    console.log(chalk.red('Unknown exception, please submit an error report:'));
    console.log(reason);
  }
  console.log();

  const knownGeneratedFiles = [
    'package.json',
    'npm-debug.log',
    'yarn-error.log',
    'yarn-debug.log',
    'node_modules',
  ];
  const currentFiles = fs.readdirSync(path.join(root));
  currentFiles.forEach(file => {
    knownGeneratedFiles.forEach(fileToMatch => {
      if (
        (fileToMatch.match(/.log/g) && file.indexOf(fileToMatch) === 0) ||
        file === fileToMatch
      ) {
        console.log(`Delete generated file... ${chalk.cyan(file)}`);
        fs.removeSync(path.join(root, file));
      }
    });
  });
  const remainingFiles = fs.readdirSync(path.join(root));
  if (!remainingFiles.length) {
    console.log(
      `Delete app ${chalk.cyan(`${appName} /`)}, directory: ${chalk.cyan(
        path.resolve(root, '..')
      )}`
    );
    process.chdir(path.resolve(root, '..'));
    fs.removeSync(path.join(root));
  }
  console.log('Done.');
  process.exit(1);
}
