'use strict';

const path = require('path');
const fs = require('fs');
const BaseCommand = require('common-bin');

class Command extends BaseCommand {
  constructor(rawArgv) {
    super(rawArgv);
    this.parserOptions = {
      execArgv: true,
      removeAlias: true,
    };

    // common-bin setter, don't care about override at sub class
    // https://github.com/node-modules/common-bin/blob/master/lib/command.js#L158
    this.options = {
    };
  }

  /**
   * default error handler
   * @param {Error} err - err obj
   */
  errorHandler(err) {
    console.error(err);
    process.nextTick(() => process.exit(1));
  }

  get context() {
    const context = super.context;
    const { argv, debugPort, execArgvObj, cwd, env } = context;

    // compatible
    if (debugPort) context.debug = debugPort;

    // remove unuse args
    argv.$0 = undefined;

    // read package.json
    let baseDir = argv.baseDir || cwd;
    if (!path.isAbsolute(baseDir)) baseDir = path.join(cwd, baseDir);
    execArgvObj.require = execArgvObj.require || [];
    return context;
  }
}

module.exports = Command;
