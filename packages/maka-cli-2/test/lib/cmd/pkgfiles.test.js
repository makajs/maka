'use strict';

const path = require('path');
const assert = require('assert');
const coffee = require('coffee');
const fs = require('mz/fs');

describe('test/lib/cmd/pkgfiles.test.js', () => {
  const makaBin = require.resolve('../../../bin/maka-cli.js');

  let cwd;
  afterEach(() => fs.writeFile(path.join(cwd, 'package.json'), '{}'));

  it('should update pkg.files', function* () {
    cwd = path.join(__dirname, '../../fixtures/pkgfiles');
    yield fs.writeFile(path.join(cwd, 'package.json'), '{}');

    yield coffee.fork(makaBin, [ 'pkgfiles' ], { cwd })
      // .debug()
      .expect('code', 0)
      .end();

    const body = yield fs.readFile(path.join(cwd, 'package.json'), 'utf8');
    assert.deepEqual(JSON.parse(body).files, [
      'app',
      'config',
      'app.js',
    ]);
  });

  it('should check pkg.files', function* () {
    cwd = path.join(__dirname, '../../fixtures/pkgfiles');
    yield fs.writeFile(path.join(cwd, 'package.json'), '{}');

    yield coffee.fork(makaBin, [ 'pkgfiles', '--check' ], { cwd })
      // .debug()
      .expect('stderr', /pkg.files should equal to \[ app, config, app.js ], but got \[ {2}]/)
      .expect('code', 1)
      .end();
  });
});
