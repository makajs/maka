"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = start;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _immutable = require("immutable");

var _appLoader = _interopRequireDefault(require("./appLoader"));

var _appMiddleware = _interopRequireDefault(require("./appMiddleware"));

var _reducer = _interopRequireDefault(require("./reducer"));

var _config = _interopRequireDefault(require("./config"));

var _appFactory = _interopRequireDefault(require("./appFactory"));

var _utils = require("@makajs/utils");

var globalObj = (0, _utils.getGlobal)();

function start() {
  var currentConfig = _config.default.current;

  _appFactory.default.registerApps(currentConfig.apps);

  var mw = [(0, _appMiddleware.default)(currentConfig.actionInjections || {}, currentConfig.reducerInjections || {})];
  if (currentConfig.middlewares) mw = mw.concat(currentConfig.middlewares);
  var store = (0, _redux.createStore)(_reducer.default, (0, _immutable.Map)(), _redux.applyMiddleware.apply(void 0, (0, _toConsumableArray2.default)(mw)));
  globalObj.reduxStore = store;
  globalObj.__maka_store__ = store;

  if (!currentConfig.rootWrapper) {
    currentConfig.rootWrapper = function (child) {
      return child;
    };
  }

  (0, _reactDom.render)(currentConfig.rootWrapper( /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react.default.createElement(_appLoader.default, {
    name: currentConfig.startAppName
  }))), document.getElementById(currentConfig.targetDomId));
}