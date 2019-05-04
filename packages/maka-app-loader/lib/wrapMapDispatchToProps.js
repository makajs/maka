"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrapMapDispatchToProps;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _redux = require("redux");

var _parseName = _interopRequireDefault(require("./parseName"));

function wrapMapDispatchToProps(fullName, actionCreators, reducer) {
  var parsedName = (0, _parseName.default)(fullName),
      wrapActionCreators = {},
      keys = Object.keys(actionCreators);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key === 'directFuns') continue;
    var wrapActionCreator = wrapAction(actionCreators[key], reducer, parsedName.fullName, parsedName.name, parsedName.query, parsedName.params);
    wrapActionCreators[key] = wrapActionCreator;
  }

  return function (dispatch) {
    return (0, _objectSpread2.default)({}, (0, _redux.bindActionCreators)(wrapActionCreators, dispatch), actionCreators.getDirectFuns && actionCreators.getDirectFuns(parsedName) || {});
  };
}

function wrapAction(actionCreator, reducer, fullName, name, query, params) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return function () {
      return {
        fullName: fullName,
        name: name,
        query: query,
        params: params,
        actionCreator: actionCreator,
        reducer: reducer,
        args: args
      };
    };
  };
}