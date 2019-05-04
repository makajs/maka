"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var context =
/*#__PURE__*/
function () {
  function context() {
    (0, _classCallCheck2.default)(this, context);
    this._context = {};
  }

  (0, _createClass2.default)(context, [{
    key: "set",
    value: function set(key, value) {
      if (value) window.localStorage[key] = JSON.stringify(value);else window.localStorage.removeItem(key);
      this._context[key] = value;
    }
  }, {
    key: "get",
    value: function get(key) {
      return this._context[key] || window.localStorage[key] && JSON.parse(window.localStorage[key]);
    }
  }]);
  return context;
}();

var instance = new context();
var _default = instance;
exports.default = _default;