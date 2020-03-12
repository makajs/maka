'use strict';

const fs = require('fs');
const path = require('path');
const assert = require('assert');
const coffee = require('coffee');
const mm = require('mm');
const rimraf = require('mz-modules/rimraf');

describe('test/lib/cmd/cov.test.js', () => {
  const makaBin = require.resolve('../../../bin/maka-cli.js');
  const cwd = path.join(__dirname, '../../fixtures/test-files');

  beforeEach(() => rimraf(path.join(cwd, 'coverage')));
  afterEach(mm.restore);

  function assertCoverage(cwd) {
    assert.ok(fs.existsSync(path.join(cwd, 'coverage/coverage-final.json')));
    assert.ok(fs.existsSync(path.join(cwd, 'coverage/coverage-summary.json')));
    assert.ok(fs.existsSync(path.join(cwd, 'coverage/lcov-report/index.html')));
    assert.ok(fs.existsSync(path.join(cwd, 'coverage/lcov.info')));
  }

  it('should success', function* () {
    mm(process.env, 'TESTS', 'test/**/*.test.js');
    mm(process.env, 'NYC_CWD', cwd);
    const child = coffee.fork(makaBin, [ 'cov' ], { cwd })
    // .debug()
      .expect('stdout', /should success/)
      .expect('stdout', /a\.test\.js/)
      .expect('stdout', /b[\/|\\]b\.test\.js/)
      .notExpect('stdout', /a.js/);

    // only test on npm run test
    if (!process.env.NYC_ROOT_ID) {
      child.expect('stdout', /Statements {3}: 80% \( 4[\/|\\]5 \)/);
    }

    yield child.expect('code', 0).end();
    // only test on npm run test
    if (!process.env.NYC_ROOT_ID) assertCoverage(cwd);
  });

  it('should exit when not test files', done => {
    mm(process.env, 'NYC_CWD', cwd);
    coffee.fork(makaBin, [ 'cov', 'test/**/*.nth.js' ], { cwd })
      // .debug()
      .expect('stdout', /No test files found/)
      .expect('code', 0)
      .end(done);
  });

  it('should hotfixSpawnWrap success on mock windows', function* () {
    mm(process.env, 'TESTS', 'test/**/*.test.js');
    mm(process.env, 'NYC_CWD', cwd);
    const child = coffee.fork(makaBin, [ 'cov' ], { cwd })
      // .debug()
      .beforeScript(path.join(__dirname, 'mock-win32.js'))
      .expect('stdout', /should success/)
      .expect('stdout', /a\.test\.js/)
      .expect('stdout', /b[\/|\\]b\.test\.js/)
      .notExpect('stdout', /a.js/);

    // only test on npm run test
    if (!process.env.NYC_ROOT_ID) {
      child.expect('stdout', /Statements {3}: 80% \( 4[\/|\\]5 \)/);
    }

    yield child.expect('code', 0).end();
    // only test on npm run test
    if (!process.env.NYC_ROOT_ID) assertCoverage(cwd);
  });

  it('should success with COV_EXCLUDES', function* () {
    mm(process.env, 'TESTS', 'test/**/*.test.js');
    mm(process.env, 'COV_EXCLUDES', 'ignore/*');
    const child = coffee.fork(makaBin, [ 'cov' ], { cwd })
      // .debug()
      .expect('stdout', /should success/)
      .expect('stdout', /a\.test\.js/)
      .expect('stdout', /b[\/|\\]b\.test\.js/)
      .notExpect('stdout', /a.js/);

    // only test on npm run test
    if (!process.env.NYC_ROOT_ID) {
      child.expect('stdout', /Statements {3}: 75% \( 3[\/|\\]4 \)/);
    }

    yield child.expect('code', 0).end();
    // only test on npm run test
    if (!process.env.NYC_ROOT_ID) {
      assertCoverage(cwd);
      const lcov = fs.readFileSync(path.join(cwd, 'coverage/lcov.info'), 'utf8');
      assert(!/ignore[\/|\\]a.js/.test(lcov));
    }
  });

  it('should success with -x to ignore one dirs', function* () {
    const child = coffee.fork(makaBin, [ 'cov', '-x', 'ignore/', 'test/**/*.test.js' ], { cwd })
      // .debug()
      .expect('stdout', /should success/)
      .expect('stdout', /a\.test\.js/)
      .expect('stdout', /b[\/|\\]b\.test\.js/)
      .notExpect('stdout', /a.js/);

    // only test on npm run test
    if (!process.env.NYC_ROOT_ID) {
      child.expect('stdout', /Statements {3}: 75% \( 3[\/|\\]4 \)/);
    }

    yield child.expect('code', 0).end();
    // only test on npm run test
    if (!process.env.NYC_ROOT_ID) {
      assertCoverage(cwd);
      const lcov = fs.readFileSync(path.join(cwd, 'coverage/lcov.info'), 'utf8');
      assert(!/ignore[\/|\\]a.js/.test(lcov));
    }
  });

  it('should success with -x to ignore multi dirs', function* () {
    const child = coffee.fork(makaBin, [ 'cov', '-x', 'ignore2/*', '-x', 'ignore/', 'test/**/*.test.js' ], { cwd })
      // .debug()
      .expect('stdout', /should success/)
      .expect('stdout', /a\.test\.js/)
      .expect('stdout', /b[\/|\\]b\.test\.js/)
      .notExpect('stdout', /a.js/);

    // only test on npm run test
    if (!process.env.NYC_ROOT_ID) {
      child.expect('stdout', /Statements {3}: 75% \( 3[\/|\\]4 \)/);
    }

    yield child.expect('code', 0).end();
    // only test on npm run test
    if (!process.env.NYC_ROOT_ID) {
      assertCoverage(cwd);
      const lcov = fs.readFileSync(path.join(cwd, 'coverage/lcov.info'), 'utf8');
      assert(!/ignore[\/|\\]a.js/.test(lcov));
    }
  });

  it('should fail when test fail', done => {
    mm(process.env, 'TESTS', 'test/fail.js');
    coffee.fork(makaBin, [ 'cov' ], { cwd })
      // .debug()
      .expect('stdout', /1\) should fail/)
      .expect('stdout', /1 failing/)
      .expect('code', 1)
      .end(done);
  });

  it('should fail when test fail with power-assert', done => {
    mm(process.env, 'TESTS', 'test/power-assert-fail.js');
    coffee.fork(makaBin, [ 'cov' ], { cwd })
      // .debug()
      .expect('stdout', /1\) should fail/)
      .expect('stdout', /1 failing/)
      .expect('stdout', /assert\(1 === 2\)/)
      .expect('code', 1)
      .end(done);
  });

  it('should warn when require intelli-espower-loader', done => {
    mm(process.env, 'TESTS', 'test/power-assert-fail.js');
    coffee.fork(makaBin, [ 'cov', '-r', 'intelli-espower-loader' ], { cwd })
      // .debug()
      .expect('stderr', /manually require `intelli-espower-loader`/)
      .expect('stdout', /1\) should fail/)
      .expect('stdout', /1 failing/)
      .expect('stdout', /assert\(1 === 2\)/)
      .expect('code', 1)
      .end(done);
  });

  it('should run cov when no test files', function* () {
    mm(process.env, 'TESTS', 'noexist.js');
    const cwd = path.join(__dirname, '../../fixtures/prerequire');
    yield coffee.fork(makaBin, [ 'cov' ], { cwd })
      // .debug()
      .expect('code', 0)
      .end();
  });

  it('should set EGG_BIN_PREREQUIRE', function* () {
    mm(process.env, 'TESTS', 'test/**/*.test.js');
    const cwd = path.join(__dirname, '../../fixtures/prerequire');
    yield coffee.fork(makaBin, [ 'cov' ], { cwd })
      // .debug()
      .coverage(false)
      .expect('stdout', /EGG_BIN_PREREQUIRE undefined/)
      .expect('code', 0)
      .end();

    yield coffee.fork(makaBin, [ 'cov', '--prerequire' ], { cwd })
      // .debug()
      .coverage(false)
      .expect('stdout', /EGG_BIN_PREREQUIRE true/)
      .expect('code', 0)
      .end();
  });

  it('should passthrough nyc args', done => {
    mm(process.env, 'TESTS', 'test/**/*.test.js');
    mm(process.env, 'NYC_CWD', cwd);
    coffee.fork(makaBin, [ 'cov', '--nyc=-r teamcity -r text' ], { cwd })
      // .debug()
      .expect('stdout', /should success/)
      .expect('stdout', /##teamcity\[blockOpened name='Code Coverage Summary'\]/)
      .expect('stdout', /##teamcity\[blockClosed name='Code Coverage Summary'\]/)
      .end(done);
  });
});
