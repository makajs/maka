'use strict';

const path = require('path');
const coffee = require('coffee');

describe('test/maka-cli.test.js', () => {
  const makaBin = require.resolve('../bin/maka-cli.js');
  const cwd = path.join(__dirname, 'fixtures/test-files');

  describe('global options', () => {
    it('should show version', done => {
      coffee.fork(makaBin, [ '--version' ], { cwd })
        // .debug()
        .expect('stdout', /\d+\.\d+\.\d+/)
        .expect('code', 0)
        .end(done);
    });

    it('should show help', done => {
      coffee.fork(makaBin, [ '--help' ], { cwd })
      // .debug()
        .expect('stdout', /Usage: .*maka.* \[command] \[options]/)
        .expect('code', 0)
        .end(done);
    });

    it('should show help when command not exists', done => {
      coffee.fork(makaBin, [ 'not-exists' ], { cwd })
      // .debug()
        .expect('stdout', /Usage: .*maka.* \[command] \[options]/)
        .expect('code', 0)
        .end(done);
    });

  });
});
