"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _appLoader = _interopRequireDefault(require("@makajs/app-loader"));

var _utils = require("@makajs/utils");

var Root =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(Root, _React$PureComponent);

  function Root(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Root);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Root).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "listen", function (location, action) {
      var full = location.pathname + location.search;

      if ((!full || full == '/') && _this.props.appName == _this.state.currentApp) {
        _utils.navigate.redirect(_this.state.currentApp);

        return;
      }

      full = full.substr(0, 1) == '/' ? full.substr(1) : full;
      var target = full.split('/')[0];
      if (target == _this.state.currentApp) return;

      _this.setState({
        currentApp: target
      });
    });

    _utils.navigate.listen(_this.listen);

    var currentApp,
        _location = _utils.navigate.getLocation(),
        _full = _location.pathname + _location.search;

    if (!_full || _full == '/') {
      currentApp = props.appName;
    } else {
      _full = _full.substr(0, 1) == '/' ? _full.substr(1) : _full;
      currentApp = _full.split('/')[0];
    }

    _this.state = {
      currentApp: currentApp
    };
    if (!_full || _full == '/') _utils.navigate.redirect('/' + currentApp);else _utils.navigate.redirect('/' + _full);
    return _this;
  }

  (0, _createClass2.default)(Root, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _utils.navigate.unlisten(this.listen);
    }
  }, {
    key: "render",
    value: function render() {
      var _notClearAppState = location.hash.indexOf('_notClearAppState') != -1;

      return _react.default.createElement(_appLoader.default.AppLoader, {
        key: this.state.currentApp,
        name: this.state.currentApp,
        _notClearAppState: _notClearAppState
      });
    }
  }]);
  return Root;
}(_react.default.PureComponent);

exports.default = Root;