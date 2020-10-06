"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _immutable = require("immutable");

var _reactRedux = require("react-redux");

var _redux = require("redux");

var actions = _interopRequireWildcard(require("./action"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _pluginFactory = _interopRequireDefault(require("./pluginFactory"));

var _parseName = _interopRequireDefault(require("./parseName"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var AppLoader = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(AppLoader, _React$Component);

  var _super = _createSuper(AppLoader);

  function AppLoader() {
    (0, _classCallCheck2.default)(this, AppLoader);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(AppLoader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          fullName = _this$props.name,
          payload = _this$props.payload;

      if (!payload.get('@@require')) {
        this.props.loadApp(fullName);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var fullName = nextProps.name,
          payload = nextProps.payload;
      var req = payload.get('@@require');

      if (!req) {
        this.props.loadApp(fullName, this.props.name);
      } else if (this.props.name !== nextProps.name) {
        // if(this.props._notClearAppState !== true){
        this.props.clearAppState(this.props.name); // }
      } else {
        var cachePlugins = req.get('plugins').toJS();
        var parsedName = (0, _parseName.default)(fullName);
        var plugins = _pluginFactory.default.getPluginNames(parsedName.name) || [];

        if (JSON.stringify(cachePlugins.sort()) !== JSON.stringify(plugins.sort())) {
          this.props.loadPlugin(fullName, this.props.name);
        }
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var fullName = this.props.name;

      if (this.props._notClearAppState !== true) {
        this.props.clearAppState(fullName);
      } else {
        var parentApp = this.props._parentApp;

        if (parentApp) {
          if (!window.MAKA.store.getState().getIn([parentApp, 'data'])) {
            this.props.clearAppState(fullName);
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          fullName = _this$props2.name,
          payload = _this$props2.payload,
          other = (0, _objectWithoutProperties2.default)(_this$props2, ["name", "payload"]),
          ReduxConnector = payload.getIn(['@@require', 'container']);

      if (ReduxConnector) {
        return /*#__PURE__*/_react.default.createElement(ReduxConnector, (0, _extends2.default)({
          store: this.context.store
        }, other, {
          payload: payload,
          key: fullName
        }));
      }

      return null;
    }
  }]);
  return AppLoader;
}(_react.default.Component);

AppLoader.contextTypes = {
  store: _propTypes.default.object
};

var _default = (0, _reactRedux.connect)(function (state, props) {
  var payload = state.get(props.name);
  return {
    payload: payload || (0, _immutable.Map)()
  };
}, function (dispatch) {
  return _objectSpread({}, (0, _redux.bindActionCreators)(actions, dispatch));
}, null, {
  // withRef: true,
  pure: true
})(AppLoader);

exports.default = _default;