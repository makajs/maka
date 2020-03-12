'use strict';

const co = require('co');

describe('promise.test.js', () => {
  it('should fail with simplify stack', function* () {
    yield co(function* () {
      return yield new Promise((resolve, reject) => {
        reject(new Error('this is an error'));
      });
    });
  });
});
