"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _wrapper = _interopRequireDefault(require("./wrapper"));

var _dec, _class;

var C = (_dec = (0, _wrapper.default)(), _dec(_class =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(C, _Component);

  function C() {
    (0, _classCallCheck2.default)(this, C);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(C).apply(this, arguments));
  }

  (0, _createClass2.default)(C, [{
    key: "render",
    value: function render() {
      return this.props.maka((0, _objectSpread2.default)({}, this.props, {
        path: 'root'
      }));
    }
  }]);
  return C;
}(_react.Component)) || _class);
exports.default = C;