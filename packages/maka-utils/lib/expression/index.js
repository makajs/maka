"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getExpressionBody = exports.isExpression = void 0;

var _memoize = _interopRequireDefault(require("lodash/memoize"));

// {{***}} 
var reg = /^\s*\{{2}([\s\S]+)\}{2}\s*$/m; // {{{***}}}

var reg1 = /^\s*\{{3}([\s\S]+)\}{3}\s*$/m;
var isExpression = (0, _memoize.default)(function (v) {
  return reg.test(v) || reg1.test(v);
});
exports.isExpression = isExpression;
var getExpressionBody = (0, _memoize.default)(function (v) {
  if (reg1.test(v)) {
    return v.replace(reg1, function (word, group) {
      return group;
    });
  }

  if (reg.test(v)) {
    return "return " + v.replace(reg, function (word, group) {
      return group;
    });
  }

  return v;
});
exports.getExpressionBody = getExpressionBody;
var _default = {
  isExpression: isExpression,
  getExpressionBody: getExpressionBody
};
exports.default = _default;