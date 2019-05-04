"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.parsePath = exports.existsParamsInPath = void 0;

var _memoize = _interopRequireDefault(require("lodash/memoize"));

var existsParamsInPath = function existsParamsInPath(path) {
  return /,/.test(path);
};

exports.existsParamsInPath = existsParamsInPath;
var parsePath = (0, _memoize.default)(function (path) {
  if (!path) return;

  if (path.indexOf(',') == -1) {
    return {
      path: path.replace(/\s/g, '')
    };
  } else {
    var segments = path.split(","),
        vars = segments.slice(1);
    return {
      path: segments[0].replace(/\s/g, ''),
      vars: vars.map(function (o) {
        return o.replace(/\s/g, '');
      })
    };
  }
});
exports.parsePath = parsePath;
var _default = {
  existsParamsInPath: existsParamsInPath,
  parsePath: parsePath
};
exports.default = _default;