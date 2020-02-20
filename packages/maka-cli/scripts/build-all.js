const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');
const spawn = require('react-dev-utils/crossSpawn');

var root = process.cwd()

if (process.argv[2]) {
    root = path.resolve(root, process.argv[2])
}

if (!fs.existsSync(root)) {
    console.log(chalk.red(`Directory does not exist,${root}`));
    return
}


console.log(chalk.green(`Start build all ...`));

buildApp(root)

console.log(chalk.green(`Build all successfully`));
process.exit(0)

function buildApp(dir) {
    var files = fs.readdirSync(dir, () => { })
    files.forEach(fileName => {
        var stats = fs.statSync(path.join(dir, fileName))
        if (stats.isFile()) {
            if (fileName === 'package.json') {
                let subAppJson = require(path.join(dir, 'package.json'))
                if (subAppJson.isMakaApp) {
                    process.chdir(dir);
                    spawn.sync('node',
                        [path.resolve(__dirname, '..', 'scripts', 'build.js'), true],
                        { stdio: 'inherit' }
                    );
                    spawn.sync('node',
                        [path.resolve(__dirname, '..', 'scripts', 'build.js'), false],
                        { stdio: 'inherit' }
                    );
                }
            }
        }
        else if (stats.isDirectory() && fileName != 'node_modules') {
            buildApp(path.join(dir, fileName))
        }
    })
}