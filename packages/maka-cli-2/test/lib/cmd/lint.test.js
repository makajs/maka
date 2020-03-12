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


});
