"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrapper;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _reactAddonsShallowCompare = _interopRequireDefault(require("react-addons-shallow-compare"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _maka = _interopRequireDefault(require("./maka"));

var _config = _interopRequireDefault(require("./config"));

var _utils = _interopRequireDefault(require("@makajs/utils"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function getHandler(props, eventName) {
  return function () {
    if (props[eventName]) {
      props[eventName].apply(props, arguments);
      return;
    }

    if (props.base && props.base.getAllAction) {
      var action = props.base.getAllAction()[eventName];

      if (action) {
        action.apply(void 0, arguments);
        return;
      }
    }
  };
}

function wrapper(option) {
  return function (WrappedComponent) {
    var WC = WrappedComponent;
    return /*#__PURE__*/function (_Component) {
      (0, _inherits2.default)(internal, _Component);

      var _super = _createSuper(internal);

      function internal(props) {
        var _this;

        (0, _classCallCheck2.default)(this, internal);
        _this = _super.call(this, props);
        _this.state = {
          hasError: false
        };
        return _this;
      }

      (0, _createClass2.default)(internal, [{
        key: "componentWillMount",
        value: function componentWillMount() {
          getHandler(this.props, 'componentWillMount')();
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          this.props.initView && this.props.initView(this);
          getHandler(this.props, 'componentDidMount')();
        }
      }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
          if (this.props.shouldComponentUpdate && this.props.shouldComponentUpdate(nextProps, nextState) === true) return true;else if (this.props.shouldComponentUpdate && this.props.shouldComponentUpdate(nextProps, nextState) === false) return false;

          if (nextState.hasError != this.state.hasError) {
            return true;
          }

          return (0, _reactAddonsShallowCompare.default)(this, nextProps, nextState);
          /*
          for (var o in this.props) {
          	if (this.props[o] != nextProps[o]) {
          		return true
          	}
          }
          return false
          */
        }
      }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
          if (this.state.hasError) {
            this.setState({
              hasError: false,
              error: undefined
            });
          }

          getHandler(this.props, 'componentWillReceiveProps')(nextProps);
        }
      }, {
        key: "componentWillUpdate",
        value: function componentWillUpdate(nextProps, nextState) {
          getHandler(this.props, 'componentWillUpdate')(nextProps, nextState);
        }
      }, {
        key: "componentDidCatch",
        value: function componentDidCatch(error, info) {
          _utils.default.exception.error(error);

          this.setState({
            hasError: true,
            error: error
          });
          getHandler(this.props, 'componentDidCatch')(error, info);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.props.unmount && this.props.unmount();
          getHandler(this.props, 'componentWillUnmount')();
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          getHandler(this.props, 'componentDidUpdate')();
        }
      }, {
        key: "render",
        value: function render() {
          if (this.state.hasError) {
            return /*#__PURE__*/_react.default.createElement("div", {
              style: {
                color: 'red'
              }
            }, this.state.error && this.state.error.message);
          }

          if (this.props.notRender === true || this.props._notRender === true) return null;
          if (!WC) return null;
          if (!this.props.payload || !this.props.payload.get('data')) return null;
          if (this.props.payload.getIn(['data', '_notRender']) === true) return null;
          return /*#__PURE__*/_react.default.createElement(WC, (0, _extends2.default)({}, this.props, {
            maka: _maka.default
          }));
        }
      }]);
      return internal;
    }(_react.Component);
  };
}