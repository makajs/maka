"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = creator;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _immutable = _interopRequireWildcard(require("immutable"));

var _context = _interopRequireDefault(require("./context"));

var common = _interopRequireWildcard(require("./common"));

var reducer = function reducer(_option) {
  var _this = this;

  (0, _classCallCheck2.default)(this, reducer);
  (0, _defineProperty2.default)(this, "init", function (state, option) {
    var _option$data = option.data,
        data = _option$data === void 0 ? {} : _option$data;
    return _this.initByImmutable(state, {
      data: _immutable.default.fromJS(data)
    });
  });
  (0, _defineProperty2.default)(this, "initByImmutable", function (state, option) {
    var data = option.data; //Clear the attribute in the state that is not @@, which is added by maka-app-loader

    var keys = [];
    state.mapKeys(function (key) {
      if (key.indexOf('@@') === -1) keys.push(key);
    });
    keys.forEach(function (key) {
      state = state.remove(key);
    }); //Setting status

    return state.set('data', data);
  });
  (0, _defineProperty2.default)(this, "getMeta", common.getMeta);
  (0, _defineProperty2.default)(this, "getField", common.getField);
  (0, _defineProperty2.default)(this, "getFields", common.getFields);
  (0, _defineProperty2.default)(this, "setField", common.setField);
  (0, _defineProperty2.default)(this, "setFields", common.setFields);
  (0, _defineProperty2.default)(this, "gm", common.getMeta);
  (0, _defineProperty2.default)(this, "gf", common.getField);
  (0, _defineProperty2.default)(this, "gfs", common.getFields);
  (0, _defineProperty2.default)(this, "sf", common.setField);
  (0, _defineProperty2.default)(this, "sfs", common.setFields);
  (0, _defineProperty2.default)(this, "context", _context.default);
  this.appInfo = _option.appInfo;
};

function creator(option) {
  return new reducer(option);
}