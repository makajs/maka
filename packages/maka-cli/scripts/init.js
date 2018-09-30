'use strict';

process.on('unhandledRejection', err => {
  throw err;
});

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const utils = require('./utils');
const paths = require('../config/paths');
const Alphabet = require('alphabetjs');

module.exports = function (
  appPath,
  appName,
  originalDirectory
) {
  const appPackage = require(path.join(appPath, 'package.json'));
  const useYarn = true;

  const templatePath = path.join(__dirname, '..', 'template', 'app');
  if (fs.existsSync(templatePath)) {
    fs.copySync(templatePath, appPath);

    var styleContent = fs.readFileSync(path.join(appPath, 'style.less'), 'utf-8');
    styleContent = styleContent.replace(/<appName>/g, utils.fixName(appPackage.name));
    fs.writeFileSync(path.join(appPath, 'style.less'), styleContent);


    var indexContent = fs.readFileSync(path.join(appPath, 'index.js'), 'utf-8');
    indexContent = indexContent.replace(/<appName>/g, utils.fixName(appPackage.name));
    fs.writeFileSync(path.join(appPath, 'index.js'), indexContent);

    var htmlContent = fs.readFileSync(path.join(appPath, 'index.html'), 'utf-8');
    htmlContent = htmlContent.replace(/<appName>/g, utils.fixName(appPackage.name));
    fs.writeFileSync(path.join(appPath, 'index.html'), htmlContent);

    var readmeContent = fs.readFileSync(path.join(appPath, 'README.md'), 'utf-8');
    readmeContent = readmeContent.replace(/<appName>/g, utils.fixName(appPackage.name));
    fs.writeFileSync(path.join(appPath, 'README.md'), readmeContent);

  } else {
    console.error(
      `Application template not found: ${chalk.green(templatePath)}`
    );
    return;
  }

  fs.move(
    path.join(appPath, 'gitignore'),
    path.join(appPath, '.gitignore'),
    [],
    err => {
      if (err) {
        //Alternate content already exists
        if (err.code === 'EEXIST') {
          const data = fs.readFileSync(path.join(appPath, 'gitignore'));
          fs.appendFileSync(path.join(appPath, '.gitignore'), data);
          fs.unlinkSync(path.join(appPath, 'gitignore'));
        } else {
          throw err;
        }
      }
    }
  );

  fs.move(
    path.join(appPath, 'npmignore'),
    path.join(appPath, '.npmignore'),
    [],
    err => {
      if (err) {
        //Alternate content already exists
        if (err.code === 'EEXIST') {
          const data = fs.readFileSync(path.join(appPath, 'npmignore'));
          fs.appendFileSync(path.join(appPath, '.npmignore'), data);
          fs.unlinkSync(path.join(appPath, 'npmignore'));
        } else {
          throw err;
        }
      }
    }
  );

  let cdpath;
  if (originalDirectory && path.join(originalDirectory, appName) === appPath) {
    cdpath = appName;
  } else {
    cdpath = appPath;
  }

  const displayedCommand = useYarn ? 'yarn' : 'npm';

  console.log();
  console.log(`Create app ${appName} success，directory：${appPath}`);
  console.log('Enter the directory and Run command:');
  console.log();
  console.log(chalk.cyan(`  ${displayedCommand} start`));
  console.log('    Start the development server.');
  console.log();
  console.log(
    chalk.cyan(`  ${displayedCommand} ${useYarn ? '' : 'run '}build`)
  );
  console.log('    Compile the application.');
  console.log();
  console.log(
    chalk.cyan(`  ${displayedCommand} ${useYarn ? '' : 'run '}pkg`)
  );
  console.log('    Packaged application.');
  console.log();
  console.log('Start run command:');
  console.log();
  console.log(chalk.cyan('  cd'), appName);
  console.log(`  ${chalk.cyan(`${displayedCommand} start`)}`);
  console.log();
  const str = Alphabet('MAKA', 'stereo')
  console.log(str)
};