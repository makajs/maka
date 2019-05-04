"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AppLoader", {
  enumerable: true,
  get: function get() {
    return _appLoader.default;
  }
});
Object.defineProperty(exports, "appMiddleware", {
  enumerable: true,
  get: function get() {
    return _appMiddleware.default;
  }
});
Object.defineProperty(exports, "reducer", {
  enumerable: true,
  get: function get() {
    return _reducer.default;
  }
});
Object.defineProperty(exports, "config", {
  enumerable: true,
  get: function get() {
    return _config.default;
  }
});
Object.defineProperty(exports, "start", {
  enumerable: true,
  get: function get() {
    return _start.default;
  }
});
Object.defineProperty(exports, "appFactory", {
  enumerable: true,
  get: function get() {
    return _appFactory.default;
  }
});
Object.defineProperty(exports, "pluginFactory", {
  enumerable: true,
  get: function get() {
    return _pluginFactory.default;
  }
});
Object.defineProperty(exports, "init", {
  enumerable: true,
  get: function get() {
    return _init.default;
  }
});
Object.defineProperty(exports, "loadApp", {
  enumerable: true,
  get: function get() {
    return _loadApp.default;
  }
});
Object.defineProperty(exports, "removeApp", {
  enumerable: true,
  get: function get() {
    return _removeApp.default;
  }
});
exports.removePlugin = exports.existsPlugin = exports.getPluginsByAppName = exports.registerPlugin = exports.existsApp = exports.getApps = exports.getApp = exports.registerApps = exports.registerApp = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _appLoader = _interopRequireDefault(require("./appLoader"));

var _appMiddleware = _interopRequireDefault(require("./appMiddleware"));

var _reducer = _interopRequireDefault(require("./reducer"));

var _config = _interopRequireDefault(require("./config"));

var _start = _interopRequireDefault(require("./start"));

var _appFactory = _interopRequireDefault(require("./appFactory"));

var _pluginFactory = _interopRequireDefault(require("./pluginFactory"));

var _init = _interopRequireDefault(require("./init"));

var _loadApp = _interopRequireDefault(require("./loadApp"));

var _removeApp = _interopRequireDefault(require("./removeApp"));

var registerApp = _appFactory.default.registerApp,
    registerApps = _appFactory.default.registerApps,
    getApp = _appFactory.default.getApp,
    getApps = _appFactory.default.getApps,
    existsApp = _appFactory.default.existsApp;
exports.existsApp = existsApp;
exports.getApps = getApps;
exports.getApp = getApp;
exports.registerApps = registerApps;
exports.registerApp = registerApp;
var registerPlugin = _pluginFactory.default.registerPlugin,
    getPluginsByAppName = _pluginFactory.default.getPluginsByAppName,
    existsPlugin = _pluginFactory.default.existsPlugin,
    removePlugin = _pluginFactory.default.removePlugin;
exports.removePlugin = removePlugin;
exports.existsPlugin = existsPlugin;
exports.getPluginsByAppName = getPluginsByAppName;
exports.registerPlugin = registerPlugin;
var _default = {
  AppLoader: _appLoader.default,
  appMiddleware: _appMiddleware.default,
  reducer: _reducer.default,
  config: _config.default,
  init: _init.default,
  start: _start.default,
  registerApp: registerApp,
  registerApps: registerApps,
  getApp: getApp,
  getApps: getApps,
  existsApp: existsApp,
  loadApp: _loadApp.default,
  removeApp: _removeApp.default,
  appFactory: _appFactory.default,
  registerPlugin: registerPlugin,
  getPluginsByAppName: getPluginsByAppName,
  existsPlugin: existsPlugin,
  removePlugin: removePlugin,
  pluginFactory: _pluginFactory.default
};
exports.default = _default;