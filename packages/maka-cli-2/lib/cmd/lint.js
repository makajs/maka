'use strict';

const Command = require('../command');
const debug = require('debug')('maka-cli');
const EXCLUDES = Symbol('lint#excludes');
const paths = require('../paths');

class LintCommand extends Command {
  constructor(rawArgv) {
    super(rawArgv);
    this.usage = 'Usage: maka2 lint';
    this.options = {
      'config-style': {
        description: '选择一种配置分割，默认index',
        type: 'string',
      },
    };

    this[EXCLUDES] = new Set([
      'node_modules/',
      'coverage/',
      'test/fixtures/',
      'dist/',
      'test/',
      'docs/',
      'build/',
      'run/',
    ]);
  }

  get description() {
    return 'eslint';
  }

  * run(context) {
    const { cwd, execArgv, env } = context;
    const lintArgs = yield this.getLintArgs(context);
    const eslintCli = paths.rr('eslint/bin/eslint.js');
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
    let lintArgs = [];

    const excludes = (process.env.COV_EXCLUDES && process.env.COV_EXCLUDES.split(',')) || [];
    for (const exclude of excludes) {
      this.addExclude(exclude);
    }
    for (const exclude of this[EXCLUDES]) {
      lintArgs.push('--ignore-pattern');
      lintArgs.push(exclude);
    }

    const userArgs = yield this.formatLintArgs(context);

    lintArgs = lintArgs.concat(userArgs);

    return lintArgs;
  }

  addExclude(exclude) {
    this[EXCLUDES].add(exclude);
  }

  * formatLintArgs({ argv }) {
    const lintArgv = Object.assign({}, argv);
    if (!lintArgv.configStyle) {
      lintArgv.config = paths.rr('eslint-config-maka/index.js');
    } else {
      lintArgv.config = paths.rr(`eslint-config-maka/${lintArgv.configStyle}.js`);
      delete lintArgv['config-style'];
      delete lintArgv.configStyle;
    }

    const pattern = lintArgv._.slice();

    if (!pattern.length) {
      lintArgv._ = [ '.' ];
    }

    return this.helper.unparseArgv(lintArgv);
  }
}

module.exports = LintCommand;
