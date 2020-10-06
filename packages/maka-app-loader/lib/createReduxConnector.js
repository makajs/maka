"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createReduxConnector;

var _reactRedux = require("react-redux");

function createReduxConnector(WrappedComponent, mapStateToProps, mapDispatchToProps, mergeProps, options) {
  return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, mergeProps, options)(WrappedComponent);
}