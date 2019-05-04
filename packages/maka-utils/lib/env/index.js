"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getGlobal = void 0;

var getGlobal = function getGlobal() {
  // the only reliable means to get the global object is
  // `Function('return this')()`
  // However, this causes CSP violations in Chrome apps.
  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  throw new Error('unable to locate global object');
};

exports.getGlobal = getGlobal;
var _default = {
  getGlobal: getGlobal
};
exports.default = _default;