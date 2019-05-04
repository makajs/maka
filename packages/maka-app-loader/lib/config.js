"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _options = {};

function config(options) {
  if (options.appUrls && _options.appUrls) {
    options.appUrls = (0, _objectSpread2.default)({}, _options.appUrls, options.appUrls);
  }

  Object.assign(_options, options);
}

config.current = _options;
var _default = config;
exports.default = _default;