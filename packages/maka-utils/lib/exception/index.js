"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.error = error;
exports.clear = clear;
exports.getExceptions = getExceptions;
exports.default = void 0;
var exceptions = [];

function error(err) {
  console.error(err);
  exceptions.unshift(err);
}

function clear() {
  exceptions.splice(0, exceptions.length);
}

function getExceptions() {
  return exceptions;
}

var _default = {
  error: error,
  clear: clear,
  getExceptions: getExceptions
};
exports.default = _default;