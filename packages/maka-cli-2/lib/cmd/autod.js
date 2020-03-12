'use strict';

const Command = require('../command');

class AutodCommand extends Command {
  constructor(rawArgv) {
    super(rawArgv);
    this.usage = 'Usage: maka autod';
    this.options = {
      check: {
        description: 'dependencies checker',
      },
    };
  }

  get description() {
    //自动生成依赖
    return 'Generate pkg.dependencies and pkg.devDependencies automatically';
  }

  * run({ cwd, argv }) {
    const args = [];
    if (argv.check) args.push('--check');
    args.push('--registry=https://registry.npm.taobao.org/');
    const autodBin = require.resolve('autod/bin/autod.js');
    yield this.helper.forkNode(autodBin, args, { cwd });
  }
}

module.exports = AutodCommand;
