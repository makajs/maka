'use strict';

const sleep = require('my-sleep');

describe('sleep.test.js', () => {
  it('should fail with simplify stack', done => {
    sleep(() => {
      done(new Error('this is an error'));
    });
  });
});
