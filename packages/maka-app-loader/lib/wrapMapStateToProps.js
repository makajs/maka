"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrapMapStateToProps;

var _parseName = _interopRequireDefault(require("./parseName"));

function wrapMapStateToProps(fullName) {
  var parsedName = (0, _parseName.default)(fullName);
  return function (state) {
    return {
      appName: parsedName.name,
      appFullName: parsedName.fullName,
      appQuery: parsedName.query,
      appParams: parsedName.params,
      payload: state.get(parsedName.fullName)
    };
  };
}