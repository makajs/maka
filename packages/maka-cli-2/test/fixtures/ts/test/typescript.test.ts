'use strict';

const assert = require('assert');

describe('typescript.test.ts', () => {
  it('should success', () => {
    const obj = require('./sub');
    console.log('###', obj.default.name);
    assert(obj.default.name === 'egg from ts');
  });

  it('should fail', () => {
    const obj = require('./sub');
    console.log('###', obj.default.name);
    assert(obj.default.name === 'wrong assert ts');
  });
});
