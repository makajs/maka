'use strict';

const path = require('path');
const DevCommand = require('../../../../../').DevCommand;

class MyDevCommand extends DevCommand {
  * run(context) {
    // find your framework
    const yadan = path.join(__dirname, '../../../custom-framework-app/node_modules/yadan');
    context.argv.framework = yadan;
    yield super.run(context);
  }
}

module.exports = MyDevCommand;
