'use strict';

const path = require('path');
const Command = require('./lib/command');

class MakaBin extends Command {
  constructor(rawArgv) {
    super(rawArgv);
    this.usage = 'Usage: maka [command] [options]';

    // load directory
    this.load(path.join(__dirname, 'lib/cmd'));
  }
}

module.exports = exports = MakaBin;
exports.Command = Command;
exports.TestCommand = require('./lib/cmd/test');
