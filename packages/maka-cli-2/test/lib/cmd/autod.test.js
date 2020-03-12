'use strict';

const path = require('path');
const coffee = require('coffee');

const makaCli = require.resolve('../../../bin/maka-cli.js');

describe('test/lib/cmd/autod.test.js', () => {
  it('should autod modify', function* () {
    const cwd = path.join(__dirname, '../../fixtures/autod-missing');
    yield coffee.fork(makaCli, [ 'autod' ], { cwd })
      //.debug()
      .expect('stdout', /"urllib": "\d+.\d+.\d+/)
      .expect('code', 0)
      .end();
  });

  it('should autod check fail', function* () {
    const cwd = path.join(__dirname, '../../fixtures/autod-missing');
    yield coffee.fork(makaCli, [ 'autod', '--check' ], { cwd })
      //.debug()
      .expect('code', 1)
      .expect('stderr', /\[ERROR\].*Missing dependencies: \["urllib"\]/)
      .end();
  });

  /*
  it('should autod check pass', function* () {
    const cwd = path.join(__dirname, '../../fixtures/autod-exists');
    yield coffee.fork(makaCli, [ 'autod', '--check' ], { cwd })
      // .debug()
      .expect('code', 0)
      .end();
  });*/
});
