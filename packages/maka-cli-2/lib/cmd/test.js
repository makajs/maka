'use strict';

const debug = require('debug')('maka-cli');
const fs = require('fs');
const path = require('path');
const globby = require('globby');
const Command = require('../command');
const changed = require('jest-changed-files');

class TestCommand extends Command {
  constructor(rawArgv) {
    super(rawArgv);

    // 命令用法说明
    this.usage = 'Usage: maka test [files] [options]';

    // 设置Test命令可接受的选项，例如 --require
    this.options = {
      require: {
        description: 'require the given module', // 必须给定模块
        alias: 'r',
        type: 'array',
      },
      grep: {
        description: 'only run tests matching <pattern>', // 仅运行与<模式>匹配的测试
        alias: 'g',
        type: 'array',
      },
      timeout: {
        description: 'set test-case timeout in milliseconds', // 设置测试用例超时（毫秒）
        alias: 't',
        type: 'number',
      },
      'full-trace': {
        description: 'display the full stack trace', // 显示完整堆栈跟踪
      },
      changed: {
        // 只测试更改的文件并匹配${cwd}/test/**/*.test。（js | ts）
        description: 'only test with changed files and match ${cwd}/test/**/*.test.(js|ts)',
        alias: 'c',
      },
      'dry-run': {
        type: 'boolean',
        description: 'whether show test command, no test will be executed', // 用户排练，显示测试命令，不执行任何测试
        alias: 'd',
      },
    };
  }

  get description() {
    return 'Run test with mocha'; // 使用mocha库执行测试
  }

  * run(context) {
    debug('rawArgv: %s', context.rawArgv);
    const opt = {
      env: Object.assign({
        NODE_ENV: 'test',
      }, context.env),
      execArgv: context.execArgv,
    };
    // mocha命令行入口点文件
    const mochaFile = require.resolve('mocha/bin/_mocha');
    const testArgs = yield this.formatTestArgs(context);
    if (!testArgs) return;

    // 排练，不运行
    if (context.argv['dry-run']) {
      debug('test with dry-run');
      console.log(mochaFile);
      console.log(testArgs.join('\n'));
      return;
    }

    debug('run test: %s %s', mochaFile, testArgs.join(' '));

    // 使用node运行命令
    yield this.helper.forkNode(mochaFile, testArgs, opt);
  }

  get context() {
    const context = super.context;
    const { argv, execArgvObj } = context;

    // remove ts-node, ts-node and espower-typescript can't coexist
    // because espower-typescript@9 has already register ts-node
    if (argv.typescript) {
      execArgvObj.require.splice(execArgvObj.require.indexOf(require.resolve('ts-node/register')), 1);
    }

    return context;
  }

  /**
   * format test args then change it to array style
   * 格式化测试命令参数，然后将其更改为数组样式
   * @param {Object} context - { cwd, argv, ...}
   * @return {Array} [ '--require=xxx', 'xx.test.js' ]
   * @protected
   */
  * formatTestArgs({ argv, debugOptions }) {
    const testArgv = Object.assign({}, argv);

    /* istanbul ignore next */
    // 护额略覆盖测试
    testArgv.timeout = testArgv.timeout || process.env.TEST_TIMEOUT || 60000;
    testArgv.reporter = testArgv.reporter || process.env.TEST_REPORTER;
    // force exit
    testArgv.exit = true;

    // whether is debug mode, if pass --inspect then `debugOptions` is valid
    // 是否为调试模式，如果--inspect，则“debugOptions”有效
    // others like WebStorm 2019 will pass NODE_OPTIONS, and maka-cli itself will be debug, so could detect `process.env.JB_DEBUG_FILE`.
    // 其他的如WebStorm 2019将通过NODE_OPTIONS，而maka-cli本身将被调试，因此可以检测“process.env.JB_DEBUG_FILE”。
    if (debugOptions || process.env.JB_DEBUG_FILE) {
      // --no-timeout
      testArgv.timeout = false;
    }

    // collect require
    // 收集必录项
    let requireArr = testArgv.require || testArgv.r || [];
    /* istanbul ignore next */
    if (!Array.isArray(requireArr)) requireArr = [ requireArr ];

    // clean mocha stack, inspired by https://github.com/rstacruz/mocha-clean
    // 清除mocha堆栈
    // [mocha built-in](https://github.com/mochajs/mocha/blob/master/lib/utils.js#L738) don't work with `[npminstall](https://github.com/cnpm/npminstall)`, so we will override it.
    if (!testArgv.fullTrace) requireArr.unshift(require.resolve('../mocha-clean'));

    requireArr.push(require.resolve('co-mocha'));

    if (requireArr.includes('intelli-espower-loader')) {
      console.warn('[maka-cli] don\'t need to manually require `intelli-espower-loader` anymore');
    } else {
      requireArr.push(require.resolve('intelli-espower-loader'));
    }

    // for power-assert
    if (testArgv.typescript) {
      // remove ts-node in context getter on top.
      requireArr.push(require.resolve('espower-typescript/guess'));
    }

    testArgv.require = requireArr;

    let pattern;
    // changed
    if (testArgv.changed) {
      pattern = yield this._getChangedTestFiles();
      if (!pattern.length) {
        // console.log('No changed test files');
        debug('No changed test files');
        return;
      }
    }

    if (!pattern) {
      // specific test files
      pattern = testArgv._.slice();
    }
    if (!pattern.length && process.env.TESTS) {
      pattern = process.env.TESTS.split(',');
    }

    // collect test files
    if (!pattern.length) {
      pattern = [ `test/**/*.test.${testArgv.typescript ? 'ts' : 'js'}` ];
    }
    pattern = pattern.concat([ '!test/fixtures', '!test/node_modules' ]);

    // expand glob and skip node_modules and fixtures
    const files = globby.sync(pattern);
    files.sort();

    if (files.length === 0) {
      console.log(`No test files found with ${pattern}`);
      return;
    }

    // auto add setup file as the first test file
    const setupFile = path.join(process.cwd(), `test/.setup.${testArgv.typescript ? 'ts' : 'js'}`);
    if (fs.existsSync(setupFile)) {
      files.unshift(setupFile);
    }
    testArgv._ = files;

    // remove alias
    testArgv.$0 = undefined;
    testArgv.r = undefined;
    testArgv.t = undefined;
    testArgv.g = undefined;
    testArgv.typescript = undefined;
    testArgv['dry-run'] = undefined;
    testArgv.dryRun = undefined;

    return this.helper.unparseArgv(testArgv);
  }

  /**
   * 获取变更的文件数组
   */
  * _getChangedTestFiles() {
    const cwd = process.cwd();
    const res = yield changed.getChangedFilesForRoots([ cwd ]);
    const changedFiles = res.changedFiles;
    const files = [];
    for (const file of changedFiles) {
      // only find ${cwd}/test/**/*.test.(js|ts)
      // 只查找test目录下js和ts后缀的文件
      if (file.startsWith(path.join(cwd, 'test')) && file.match(/\.test\.(js|ts)$/)) {
        files.push(file);
      }
    }
    return files;
  }
}

module.exports = TestCommand;
