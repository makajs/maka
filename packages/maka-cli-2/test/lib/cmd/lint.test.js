'use strict';

const path = require('path');
const coffee = require('coffee');
const mm = require('mm');

describe('test/lib/cmd/lint.test.js', () => {
  const makaBin = require.resolve('../../../bin/maka-cli.js');

  const cwd = path.join(__dirname, '../../fixtures/test-files');

  it('should success', function* () {
    mm(process.env, 'DEBUG', 'maka-cli');
    yield coffee.fork(makaBin, [ 'lint', '.' ], { cwd })
      // .debug()
      .expect('code', 0)
      .end();
  });

  it('should success with config-style option ', function* () {
    mm(process.env, 'DEBUG', 'maka-cli');
    yield coffee.fork(makaBin, [ 'lint', '--config-style', 'index', '.' ], { cwd })
      // .debug()
      .expect('code', 0)
      .end();
  });

  it('should fail with config-style option ', function* () {
    mm(process.env, 'DEBUG', 'maka-cli');
    yield coffee.fork(makaBin, [ 'lint', '--config-style', 'react', '.' ], { cwd })
      // .debug()
      .expect('code', 1)
      .end();
  });


});
