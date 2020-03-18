'use strict';

const fs = require('fs');
const path = require('path');
const rimraf = require('mz-modules/rimraf');
const assert = require('assert');
// const Helper = require('./helper');
const coffee = require('coffee');
// const mm = require('mm');
const mkdirp = require('mkdirp');
const mm = require('mm');

const tmp = path.join(__dirname, '../.tmp');

// const Command = require('../../../lib/cmd/init');

describe('test/lib/cmd/init.test.js', () => {
  const makaBin = require.resolve('../../../bin/maka-cli.js');
  // let command;
  // let helper;
  before(function* () {
    if (fs.existsSync(tmp)) {
      yield rimraf(tmp);
    }
    mkdirp.sync(tmp);
    // command = new Command();
    // helper = new Helper(command);
  });

  beforeEach(function* () {
    if (fs.existsSync(tmp)) {
      yield rimraf(tmp);
      mkdirp.sync(tmp);
    }
  });

  afterEach(function* () {
    if (fs.existsSync(tmp)) { yield rimraf(tmp); }
    // helper.restore();
  });

  it('should work', function* () {
    const boilerplatePath = path.join(__dirname, '../../', 'fixtures/simple-boilerplate');
    mm(process.env, 'DEBUG', 'maka-cli');
    yield coffee.fork(makaBin, [ 'init',
      '--template', boilerplatePath,
      '--silent',
      '--registry', 'china',
      'helloworld',
    ], { cwd: tmp })
      // .debug()
      .expect('code', 0)
      .end();

    assert(fs.existsSync(path.join(tmp, 'helloworld', '.gitignore')));
    assert(fs.existsSync(path.join(tmp, 'helloworld', '.eslintrc')));
    assert(fs.existsSync(path.join(tmp, 'helloworld', '.npmignore')));
    assert(fs.existsSync(path.join(tmp, 'helloworld', 'package.json')));
    assert(fs.existsSync(path.join(tmp, 'helloworld', 'helloworld')));
    assert(fs.existsSync(path.join(tmp, 'helloworld', 'test', 'helloworld.test.js')));

    const content = fs.readFileSync(path.join(tmp, 'helloworld', 'README.md'), 'utf-8');
    assert(/# helloworld/.test(content));
  });
});
