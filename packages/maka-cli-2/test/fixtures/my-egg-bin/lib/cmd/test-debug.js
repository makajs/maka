'use strict';

const Command = require('../../../../../').TestCommand;

class TestDebugCommand extends Command {
  get description() {
    return 'test';
  }

  * run(context) {
    const testArgs = yield this.formatTestArgs(context);
    console.log('%j', testArgs);
  }
}

module.exports = TestDebugCommand;
