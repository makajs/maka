"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _config = _interopRequireDefault(require("./config"));

var _utils = require("@makajs/utils");

var globalObj = (0, _utils.getGlobal)();

var appFactory = function appFactory() {
  var _this = this;

  (0, _classCallCheck2.default)(this, appFactory);
  (0, _defineProperty2.default)(this, "registerApp", function (name, app) {
    if (_this.apps[name]) {
      console.log("Already registered this app\uFF0Cname: ".concat(name, ",please ignore"));
      return;
    }

    _this.apps[name] = app;
  });
  (0, _defineProperty2.default)(this, "registerApps", function (apps) {
    Object.assign(_this.apps, apps);
  });
  (0, _defineProperty2.default)(this, "existsApp", function (name) {
    name = name.replace(/(\.js)|(\.min\.js)/, '');
    return !!_this.apps[name];
  });
  (0, _defineProperty2.default)(this, "getApp", function (name) {
    name = name.replace(/(\.js)|(\.min\.js)/, '');
    return _this.apps[name];
  });
  (0, _defineProperty2.default)(this, "getApps", function () {
    return _this.apps;
  });
  (0, _defineProperty2.default)(this, "removeApp", function (name) {
    delete _this.apps[name];
  });
  this.apps = {};
  globalObj.__maka_apps__ = this.apps;
};

var appFactoryInstance = new appFactory();
var _default = appFactoryInstance;
exports.default = _default;