'use strict';

const Command = require('../command');
const path = require('path');
const paths = require('../paths');

class AutodCommand extends Command {
  constructor(rawArgv) {
    super(rawArgv);
    this.usage = 'Usage: maka2 autod';
    this.options = {
      check: {
        description: 'dependencies checker',
      },
    };
  }

  get description() {
    // 自动生成依赖
    return 'Generate pkg.dependencies and pkg.devDependencies automatically';
  }

  * run({ cwd, argv }) {
    const args = [];
    if (argv.check) args.push('--check');
    args.push('--registry=https://registry.npm.taobao.org/');
    const autodBin = path.join(paths.ownNodeModules, 'autod/bin/autod.js');
    yield this.helper.forkNode(autodBin, args, { cwd });
  }
}

module.exports = AutodCommand;
