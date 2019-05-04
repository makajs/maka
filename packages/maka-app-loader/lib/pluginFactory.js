"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _utils = require("@makajs/utils");

var globalObj = (0, _utils.getGlobal)();

var pluginFactory = function pluginFactory() {
  var _this = this;

  (0, _classCallCheck2.default)(this, pluginFactory);
  (0, _defineProperty2.default)(this, "registerPlugin", function (name, forApp) {
    if (!name || !forApp) return;

    if (_this.plugins.findIndex(function (o) {
      return o.name == name;
    }) != -1) {
      console.log("Already registered this plugin\uFF0Cname: ".concat(name, ",please ignore"));
      return;
    }

    var regExp;

    if (/^\/[^\/]+\//.test(forApp)) {
      regExp = new RegExp(forApp);
    }

    _this.plugins.push({
      name: name,
      forApp: forApp,
      regExp: regExp
    });
  });
  (0, _defineProperty2.default)(this, "removePlugin", function (name) {
    if (!name) return;

    var index = _this.plugins.findIndex(function (o) {
      return o.name == name;
    });

    if (index != -1) _this.plugins.splice(index, 1);
  });
  (0, _defineProperty2.default)(this, "existsPlugin", function (forApp) {
    if (!forApp) return;
    return _this.plugins.findIndex(function (o) {
      return o.forApp === forApp || o.regExp && o.regExp.test(forApp);
    }) != -1;
  });
  (0, _defineProperty2.default)(this, "filter", function (appName) {
    if (!appName) return [];
    return _this.plugins.filter(function (o) {
      return o.forApp === appName || o.regExp && o.regExp.test(forApp);
    });
  });
  (0, _defineProperty2.default)(this, "getPluginNames", function (appName) {
    return _this.filter(appName).map(function (o) {
      return o.name;
    });
  });
  this.plugins = [];
  globalObj.__maka_plugins__ = this.plugins;
};

var pluginFactoryInstance = new pluginFactory();
var _default = pluginFactoryInstance;
exports.default = _default;