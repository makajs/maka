'use strict';

const path = require('path');
const coffee = require('coffee');
const mm = require('mm');
const assert = require('assert');
const semver = require('semver');
const changed = require('jest-changed-files');
const Command = require('../../../lib/cmd/test');

describe('test/lib/cmd/test.test.js', () => {
  const makaBin = require.resolve('../../../bin/maka-cli.js');
  const cwd = path.join(__dirname, '../../fixtures/test-files');

  // 测试用例运行之后运行
  afterEach(mm.restore);

  it('should success', done => {
    mm(process.env, 'TESTS', 'test/**/*.test.js');
    coffee.fork(makaBin, [ 'test' ], { cwd })
      // .debug()
      .expect('stdout', /should success/)
      .expect('stdout', /a\.test\.js/)
      .expect('stdout', /b\/b\.test\.js/)
      .notExpect('stdout', /\ba\.js/)
      .expect('code', 0)
      .end(done);
  });

  // 忽略node_modules和fixtures目录
  it('should ignore node_modules and fixtures', done => {
    mm(process.env, 'TESTS', 'test/**/*.test.js');
    coffee.fork(makaBin, [ 'test' ], { cwd: path.join(__dirname, '../../fixtures/test-files-glob') })
    // .debug()
      .expect('stdout', /should test index/)
      .expect('stdout', /should test sub/)
      .notExpect('stdout', /no-load\.test\.js/)
      .expect('code', 0)
      .end(done);
  });

  // 只测试指定的单个测试文件
  it('should only test files specified by TESTS', done => {
    mm(process.env, 'TESTS', 'test/a.test.js');
    coffee.fork(makaBin, [ 'test' ], { cwd })
      .expect('stdout', /should success/)
      .expect('stdout', /a\.test\.js/)
      .notExpect('stdout', /b\/b.test.js/)
      .expect('code', 0)
      .end(done);
  });

  // 只测试指定的多个测试文件
  it('should only test files specified by TESTS with multi pattern', done => {
    mm(process.env, 'TESTS', 'test/a.test.js,test/b/b.test.js');
    coffee.fork(makaBin, [ 'test' ], { cwd })
      .expect('stdout', /should success/)
      .expect('stdout', /a\.test\.js/)
      .expect('stdout', /b\/b.test.js/)
      .expect('code', 0)
      .end(done);
  });

  // 只测试argv指定的测试文件
  it('should only test files specified by TESTS argv', done => {
    mm(process.env, 'TESTS', 'test/**/*.test.js');
    coffee.fork(makaBin, [ 'test', 'test/a.test.js' ], { cwd })
      .expect('stdout', /should success/)
      .expect('stdout', /a\.test\.js/)
      .notExpect('stdout', /b\/b.test.js/)
      .expect('code', 0)
      .end(done);
  });

  // 没有测试文件正常退出
  it('should exit when not test files', done => {
    coffee.fork(makaBin, [ 'test', 'test/**/*.nth.js' ], { cwd })
    // .debug()
      .expect('stdout', /No test files found/)
      .expect('code', 0)
      .end(done);
  });

  // 指定process.env.TEST_REPORTER为JSON格式测试
  it('should use process.env.TEST_REPORTER', done => {
    mm(process.env, 'TESTS', 'test/**/*.test.js');
    mm(process.env, 'TEST_REPORTER', 'json');
    coffee.fork(makaBin, [ 'test' ], { cwd })
    // .debug()
      .expect('stdout', /"stats":/)
      .expect('stdout', /"tests":/)
      .expect('code', 0)
      .end(done);
  });

  // 指定process.env.TEST_TIMEOUT超时设置测试
  it('should use process.env.TEST_TIMEOUT', done => {
    mm(process.env, 'TESTS', 'test/**/*.test.js');
    mm(process.env, 'TEST_TIMEOUT', '60000');
    coffee.fork(makaBin, [ 'test' ], { cwd })
      .expect('stdout', /should success/)
      .expect('code', 0)
      .end(done);
  });


  // 使用power-assert测试失败
  it('should fail when test fail with power-assert', done => {
    mm(process.env, 'TESTS', 'test/power-assert-fail.js');
    coffee.fork(makaBin, [ 'test' ], { cwd })
    // .coverage(false)
      // .debug()
      .expect('stdout', /1\) should fail/)
      .expect('stdout', /assert\(1 === 2\)/)
      .expect('stdout', /1 failing/)
      .expect('code', 1)
      .end(done);
  });

  // 测试使用intelli-espower-loader警告
  it('should warn when require intelli-espower-loader', () => {
    mm(process.env, 'TESTS', 'test/power-assert-fail.js');
    return coffee.fork(makaBin, [ 'test', '-r', 'intelli-espower-loader' ], { cwd })
    // .coverage(false)
      // .debug()
      .expect('stderr', /manually require `intelli-espower-loader`/)
      .expect('stdout', /1\) should fail/)
      .expect('stdout', /assert\(1 === 2\)/)
      .expect('stdout', /1 failing/)
      .expect('code', 1)
      .end();
  });

  // 测试自动加载test/.setup.js
  it('should auto require test/.setup.js', () => {
    // example: https://github.com/lelandrichardson/enzyme-example-mocha
    mm(process.env, 'TESTS', 'test/Foo.test.js');
    return coffee.fork(makaBin, [ 'test' ], { cwd: path.join(__dirname, '../../fixtures/enzyme-example-mocha') })
    // .debug()
      .expect('stdout', /before hook: delay 10ms/)
      .expect('stdout', /3 passing/)
      .expect('code', 0)
      .end();
  });

  // 测试自动加载test/.setup.ts
  it('should auto require test/.setup.ts', () => {
    // example: https://github.com/lelandrichardson/enzyme-example-mocha
    mm(process.env, 'TESTS', 'test/a.test.ts');
    return coffee.fork(makaBin, [ 'test', '--typescript' ], { cwd: path.join(__dirname, '../../fixtures/setup-ts') })
    // .debug()
      .expect('stdout', /this is a before function/)
      .expect('stdout', /hello egg/)
      .expect('stdout', /is end!/)
      .expect('code', 0)
      .end();
  });


  // 测试强制退出
  it('should force exit', () => {
    const cwd = path.join(__dirname, '../../fixtures/no-exit');
    return coffee.fork(makaBin, [ 'test' ], { cwd })
      // .debug()
      .expect('code', 0)
      .end();
  });

  // 测试排演选项
  it('run not test with dry-run option', () => {
    const cwd = path.join(__dirname, '../../fixtures/mocha-test');
    mm(process.env, 'TESTS', 'test/foo.test.js');
    return coffee.fork(makaBin, [ 'test', '--timeout=12345', '--dry-run' ], { cwd })
      // .debug()
      .expect('stdout', [
        /_mocha/g,
        /--timeout=12345/,
        /--exit/,
        /.*mocha-clean\.js/,
        /.*co-mocha\.js/,
        /.*intelli-espower-loader\.js/,
        /foo\.test\.js/,
      ])
      .notExpect('stdout', /--dry-run/)
      .expect('code', 0)
      .end();
  });

  // 测试mocha异常堆栈
  describe('simplify mocha error stack', () => {
    const cwd = path.join(__dirname, '../../fixtures/test-files-stack');

    // 测试异常堆栈断言优化
    it('should clean assert error stack', done => {
      mm(process.env, 'TESTS', 'test/assert.test.js');
      coffee.fork(makaBin, [ 'test' ], { cwd })
        // .debug()
        .end((err, { stdout, code }) => {
          // console.log(process.version)
          assert(stdout.match(/AssertionError/));
          // 当前版本是否满足
          if (semver.satisfies(process.version, '^6.0.0')) {
            // assert stack missing these three lines on node >= 7.0.0
            assert(stdout.match(/at forEach .*assert.test.js:\d+:\d+/));
            assert(stdout.match(/at Context.it .*assert.test.js:\d+:\d+/));
            assert(stdout.match(/\bat\s+/g).length === 3);
          }
          assert(code === 1);
          done(err);
        });
    });

    // 测试异常全部堆栈断言
    it('should should show full stack trace', done => {
      mm(process.env, 'TESTS', 'test/assert.test.js');
      coffee.fork(makaBin, [ 'test', '--full-trace' ], { cwd })
      // .debug()
        .end((err, { stdout, code }) => {
          assert(stdout.match(/AssertionError/));

          // 当前版本是否满足
          if (semver.satisfies(process.version, '^6.0.0')) {
            assert(stdout.match(/at .*node_modules.*mocha/));
            assert(stdout.match(/\bat\s+/g).length > 10);
          }
          assert(code === 1);
          done(err);
        });
    });

    // 测试co异常堆栈
    it('should clean co error stack', done => {
      mm(process.env, 'TESTS', 'test/promise.test.js');
      coffee.fork(makaBin, [ 'test' ], { cwd })
      // .debug()
        .end((err, { stdout, code }) => {
          // console.log(stdout)
          assert(stdout.match(/Error: this is an error/));
          // assert(stdout.match(/at Promise .*promise.test.js:\d+:\d+/g));
          // assert(stdout.match(/at Context\.<anonymous> .*promise.test.js:\d+:\d+/g));
          assert(stdout.match(/at new Promise/));
          assert(stdout.match(/at Context\.<anonymous>/));
          assert(stdout.match(/.*promise.test.js:\d+:\d+/));
          assert(stdout.match(/\bat\s+/g).length >= 3);
          assert(code === 1);
          done(err);
        });
    });

    // 测试回调异常堆栈
    it('should clean callback error stack', done => {
      mm(process.env, 'TESTS', 'test/sleep.test.js');
      coffee.fork(makaBin, [ 'test' ], { cwd })
      // .debug()
        .end((err, { stdout, code }) => {
          // console.log(stdout)
          assert(stdout.match(/Error: this is an error/));
          // assert(stdout.match(/at sleep .*sleep.test.js:\d+:\d+/));
          // assert(stdout.match(/at Timeout.setTimeout .*node_modules.*my-sleep.*index.js:\d+:\d+/));
          assert(stdout.match(/at Timeout._onTimeout .*node_modules.*my-sleep.*index.js:\d+:\d+/));
          assert(stdout.match(/at .*sleep.test.js:\d+:\d+/));
          assert(stdout.match(/\bat\s+/g).length > 2);
          assert(code === 1);
          done(err);
        });
    });
  });

  // changed need to mock getChangedFilesForRoots, so we just test formatTestArgs directly
  // 使用mm直接mock getChangedFilesForRoots方法进行测试
  describe('changed', () => {
    // 测试无文件变化
    it('should return undefined if no test file changed', function* () {
      const cmd = new Command([ '--changed' ]);
      mm.data(changed, 'getChangedFilesForRoots', {
        changedFiles: new Set(),
      });
      const args = yield cmd.formatTestArgs(cmd.context);
      assert(!args);
    });

    // 测试有文件变化
    it('should return file changed', function* () {
      const cmd = new Command([ '--changed' ]);
      mm.data(changed, 'getChangedFilesForRoots', {
        changedFiles: new Set([ __filename ]),
      });
      const args = yield cmd.formatTestArgs(cmd.context);
      // console.log(args)
      assert(args.includes('--changed', __filename));
    });

    // 测试文件过滤，tmp文件和不存在的文件应该会被过滤掉
    it('should filter not test file', function* () {
      const cmd = new Command([ '--changed' ]);
      mm.data(changed, 'getChangedFilesForRoots', {
        changedFiles: new Set([ __filename + '.tmp', 'abc.test.js' ]),
      });
      const args = yield cmd.formatTestArgs(cmd.context);
      assert(!args);
    });
  });


  describe('no-timeouts', () => {
    // 测试超时选项
    it('should timeout', done => {
      mm(process.env, 'TEST_TIMEOUT', '5000');
      mm(process.env, 'TESTS', 'test/**/no-timeouts.test.js');
      coffee.fork(makaBin, [ 'test' ], { cwd })
        // .debug()
        .expect('stdout', /timeout: 5000/)
        .expect('code', 0)
        .end(done);
    });

    // 测试debug模式，不会启用超时选项
    it('should no-timeout at debug mode', done => {
      mm(process.env, 'TESTS', 'test/**/no-timeouts.test.js');
      coffee.fork(makaBin, [ 'test', '--inspect' ], { cwd })
      // .debug()
        .expect('stdout', /timeout: 0/)
        .expect('code', 0)
        .end(done);
    });

    // 测试 WebStorm debug 模式，不会启用超时选项
    it('should no-timeout at WebStorm debug mode', done => {
      mm(process.env, 'TESTS', 'test/**/no-timeouts.test.js');
      mm(process.env, 'JB_DEBUG_FILE', __filename);
      coffee.fork(makaBin, [ 'test' ], { cwd })
      // .debug()
        .expect('stdout', /timeout: 0/)
        .expect('code', 0)
        .end(done);
    });
  });
});
