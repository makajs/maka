'use strict';

const Command = require('../../../../../');

class EchoCommand extends Command {
  get description() {
    return 'echo test';
  }

  * run(context) {
    console.log('argv: %j', context.argv);
    console.log('debugPort: %s', context.debugPort);
    console.log('debugOptions: %j', context.debugOptions);
    console.log('execArgv: %j', context.execArgv);
  }
}

module.exports = EchoCommand;
