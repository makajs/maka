"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrapMapDispatchToProps;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _redux = require("redux");

var _parseName = _interopRequireDefault(require("./parseName"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    return _objectSpread({}, (0, _redux.bindActionCreators)(wrapActionCreators, dispatch), {}, actionCreators.getDirectFuns && actionCreators.getDirectFuns(parsedName) || {});
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