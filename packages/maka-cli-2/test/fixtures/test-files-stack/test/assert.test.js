'use strict';

const assert = require('assert');

describe('assert.test.js', () => {
  it('should fail with simplify stack', () => {
    [ 1 ].forEach(() => {
      assert(1 === 0);
    });
  });
});
