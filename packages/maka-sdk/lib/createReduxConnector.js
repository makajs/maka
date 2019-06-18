"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createReduxConnector;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

function createReduxConnector(WrappedComponent, mapStateToProps, mapDispatchToProps, mergeProps, options) {
  return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, mergeProps, options)(WrappedComponent);
}