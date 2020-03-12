'use strict';

const Command = require('../command');
const debug = require('debug')('maka-cli');
const EXCLUDES = Symbol('lint#excludes');

class LintCommand extends Command {
  constructor(rawArgv) {
    super(rawArgv);
    this.usage = 'Usage: maka2 lint';
    this.options = {
    };

    this[EXCLUDES] = new Set([
      'node_modules/',
      'coverage/',
      'test/fixtures/',
    ]);
  }

  get description() {
    return 'eslint';
  }

  * run(context) {
    const { cwd, execArgv, env } = context;
    const lintArgs = yield this.getLintArgs(context);
    const eslintCli = require.resolve('eslint/bin/eslint.js');
    if (!lintArgs) return;

    const opt = {
      cwd,
      execArgv,
      env: Object.assign({
        NODE_ENV: 'eslint',
      }, env),
    };


    debug('lintArgs: %j', lintArgs);
    yield this.helper.forkNode(eslintCli, lintArgs, opt);
  }

  /**
   * get lint args
   * @param {Object} context - { cwd, argv, ...}
   * @return {Array} args for eslint
   * @protected
   */
  * getLintArgs(context) {
    const lintArgs = [];

    lintArgs.push('--config', require.resolve('eslint-config-maka/index.js'));

    const excludes = (process.env.COV_EXCLUDES && process.env.COV_EXCLUDES.split(',')) || [];
    for (const exclude of excludes) {
      this.addExclude(exclude);
    }
    for (const exclude of this[EXCLUDES]) {
      lintArgs.push('--ignore-pattern');
      lintArgs.push(exclude);
    }

    const testArgs = yield this.formatLintArgs(context);

    return lintArgs.concat(testArgs);
  }

  addExclude(exclude) {
    this[EXCLUDES].add(exclude);
  }

  * formatLintArgs({ argv }) {
    const lintArgv = Object.assign({}, argv);
    const pattern = lintArgv._.slice();

    if (!pattern.length) {
      lintArgv._ = [ '.' ];
    }

    return this.helper.unparseArgv(lintArgv);
  }
}

module.exports = LintCommand;
