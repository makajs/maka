'use strict';
const co = require('co');
const sleep = require('mz-modules/sleep');
module.exports = class Helper {
  constructor(command) {
    this.command = command;
    this.inquirer = command.inquirer;
    this.originPrompt = this.inquirer.prompt;
    this.KEY_UP = '\u001b[A';
    this.KEY_DOWN = '\u001b[B';
    this.KEY_LEFT = '\u001b[D';
    this.KEY_RIGHT = '\u001b[C';
    this.KEY_ENTER = '\n';
    this.KEY_SPACE = ' ';
  }

  /**
   * send keys after `inquirer.prompt` trigger
   *
   * @param {Array} actions - each item will be sent after once call, if item is array, then send sub item after a tick
   *
   * @example
   *   mock([ helper.KEY_DOWN + helper.KEY_DOWN, [ 'test', 'this is xxx', 'TZ' ]]);
   */
  mock(actions) {
    this.inquirer.prompt = opts => {
      const result = this.originPrompt.call(this.inquirer, opts);
      const rl = result.ui.rl;
      let keys = actions.shift() || '\n';
      if (!Array.isArray(keys)) {
        keys = [ keys ];
      }

      let questionNumber = 1;
      if (Array.isArray(opts)) {
        questionNumber = opts.length;
      }
      if (questionNumber !== keys.length) {
        throw new Error('the number of prompt question  must equal the number of mock keys');
      }
      co(this.sendKey(rl, keys));

      /**
       * Window will block after input.emit,input resume and sleep can fix this.
       * The bug only happen when simulate user input.
       * detail: https://github.com/SBoudrias/Inquirer.js/issues/870
       */
      return result.then(co.wrap(function* (v) {
        rl.input.resume();
        yield sleep(10);
        return v;
      }));

    };
  }

  /**
   * restore prompt to origin fn
   */
  restore() {
    this.inquirer.prompt = this.originPrompt;
  }

  /**
   * send key to process.stdin
   *
   * @param {Object} rl - the instance of readline
   * @param {Array} arr - key list, send one by one after a tick
   */
  * sendKey(rl, arr) {

    for (const key of arr) {
      yield sleep(200);

      if (typeof key === 'string') {
        rl.input.emit('keypress', key + '\r');
      } else {

        /**
         * the key is a object
         * @example {name:'return'}
         */
        rl.input.emit('keypress', '', key);
      }
    }
  }
};
