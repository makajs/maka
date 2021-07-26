"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.config = config;
exports.load = load;
exports.setHoc = setHoc;
exports.createAppElement = createAppElement;
exports.render = render;
Object.defineProperty(exports, "appLoader", {
  enumerable: true,
  get: function get() {
    return _appLoader.default;
  }
});
Object.defineProperty(exports, "utils", {
  enumerable: true,
  get: function get() {
    return _utils.default;
  }
});
Object.defineProperty(exports, "metaEngine", {
  enumerable: true,
  get: function get() {
    return _metaEngine.default;
  }
});
exports.context = exports.store = exports.templateFactory = exports.componentFactory = exports.actionFactory = exports.pluginFactory = exports.appFactory = exports.createElement = exports.navigate = exports.fetch = exports.appInstances = exports.actionMixin = exports.removePlugin = exports.registerPlugin = exports.removeApp = exports.registerTemplate = exports.registerAction = exports.registerComponent = exports.asyncGetAction = exports.getAction = exports.getTemplate = exports.getComponent = exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _reactRedux = require("react-redux");

var _appLoader = _interopRequireDefault(require("@makajs/app-loader"));

var _utils = _interopRequireDefault(require("@makajs/utils"));

var _metaEngine = _interopRequireDefault(require("@makajs/meta-engine"));

var globalObj = _utils.default.getGlobal();

globalObj.self = globalObj;

_utils.default.fetch.config({
  mock: true
});

var store = _appLoader.default.init({
  defaultComponent: _metaEngine.default.defaultComponent,
  defaultAction: _metaEngine.default.defaultAction,
  defaultReducer: _metaEngine.default.defaultReducer,
  componentWrapper: _metaEngine.default.wrapper
});

exports.store = store;

_metaEngine.default.componentFactory.registerComponent("AppLoader", _appLoader.default.AppLoader);

var Hoc,
    isProduction = process.env.isProduction,
    createElement = _react.default.createElement,
    getComponent = _metaEngine.default.componentFactory.getComponent.bind(_metaEngine.default.componentFactory),
    getTemplate = _metaEngine.default.templateFactory.getTemplate.bind(_metaEngine.default.templateFactory),
    getAction = _metaEngine.default.actionFactory.getAction.bind(_metaEngine.default.actionFactory),
    asyncGetAction = _metaEngine.default.actionFactory.asyncGetAction.bind(_metaEngine.default.actionFactory),
    registerComponent = _metaEngine.default.componentFactory.registerComponent.bind(_metaEngine.default.componentFactory),
    registerAction = _metaEngine.default.actionFactory.registerAction.bind(_metaEngine.default.actionFactory),
    registerTemplate = _metaEngine.default.templateFactory.registerTemplate.bind(_metaEngine.default.templateFactory),
    removeApp = _appLoader.default.removeApp,
    registerPlugin = _appLoader.default.registerPlugin.bind(_appLoader.default.pluginFactory),
    removePlugin = _appLoader.default.removePlugin.bind(_appLoader.default.pluginFactory),
    actionMixin = _metaEngine.default.actionMixin,
    fetch = _utils.default.fetch,
    navigate = _utils.default.navigate,
    appInstances = _metaEngine.default.appInstances,
    actionFactory = _metaEngine.default.actionFactory,
    componentFactory = _metaEngine.default.componentFactory,
    templateFactory = _metaEngine.default.templateFactory,
    pluginFactory = _appLoader.default.pluginFactory,
    appFactory = _appLoader.default.appFactory,
    context = _metaEngine.default.contextManager; //Initialize maka environment


exports.context = context;
exports.appFactory = appFactory;
exports.pluginFactory = pluginFactory;
exports.templateFactory = templateFactory;
exports.componentFactory = componentFactory;
exports.actionFactory = actionFactory;
exports.appInstances = appInstances;
exports.navigate = navigate;
exports.fetch = fetch;
exports.actionMixin = actionMixin;
exports.removePlugin = removePlugin;
exports.registerPlugin = registerPlugin;
exports.removeApp = removeApp;
exports.registerTemplate = registerTemplate;
exports.registerAction = registerAction;
exports.registerComponent = registerComponent;
exports.asyncGetAction = asyncGetAction;
exports.getAction = getAction;
exports.getTemplate = getTemplate;
exports.getComponent = getComponent;
exports.createElement = createElement;

function init(option) {
  _appLoader.default.init(option);
} //Configure the metadata engine


function config(option) {
  _metaEngine.default.config(option);
} //load app


function load(_x) {
  return _load.apply(this, arguments);
}

function _load() {
  _load = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(app) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _appLoader.default.loadApp(app, isProduction);

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _load.apply(this, arguments);
}

var createAppElementInternal = function createAppElementInternal(appName, appProps) {
  return function (props) {
    return /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
      store: store
    }, /*#__PURE__*/_react.default.createElement(_appLoader.default.AppLoader, (0, _extends2.default)({
      name: appName
    }, appProps, props)));
  };
};

function createAppElement(appName, appProps) {
  var Internal = createAppElementInternal(appName, appProps);

  if (Hoc) {
    return /*#__PURE__*/_react.default.createElement(Hoc, {
      appName: appName,
      appProps: appProps
    }, /*#__PURE__*/_react.default.createElement(Internal, null));
  } else {
    return /*#__PURE__*/_react.default.createElement(Internal, {
      appName: appName,
      appProps: appProps
    });
  }
} //Set high order component


function setHoc(hoc) {
  Hoc = hoc;
}

function render(_x2, _x3, _x4) {
  return _render.apply(this, arguments);
}

function _render() {
  _render = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(appName, targetDomId, disableRoute) {
    var props,
        appNameNoQuery,
        _args2 = arguments;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            props = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : {};
            appNameNoQuery = appName.split('?')[0];

            if (_appLoader.default.existsApp(appNameNoQuery)) {
              _context2.next = 5;
              break;
            }

            _context2.next = 5;
            return _appLoader.default.loadApp(appNameNoQuery, isProduction);

          case 5:
            if (!disableRoute) {
              _context2.next = 8;
              break;
            }

            if (Hoc) {
              (0, _reactDom.render)( /*#__PURE__*/_react.default.createElement(Hoc, null, /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
                store: store
              }, /*#__PURE__*/_react.default.createElement(_appLoader.default.AppLoader, (0, _extends2.default)({
                name: appName
              }, props)))), document.getElementById(targetDomId));
            } else {
              (0, _reactDom.render)( /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
                store: store
              }, /*#__PURE__*/_react.default.createElement(_appLoader.default.AppLoader, (0, _extends2.default)({
                name: appName
              }, props))), document.getElementById(targetDomId));
            }

            return _context2.abrupt("return");

          case 8:
            if (Hoc) {
              (0, _reactDom.render)( /*#__PURE__*/_react.default.createElement(Hoc, null, /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
                store: store
              }, /*#__PURE__*/_react.default.createElement(_metaEngine.default.rootElement, (0, _extends2.default)({
                appName: appName
              }, props)))), document.getElementById(targetDomId));
            } else {
              (0, _reactDom.render)( /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
                store: store
              }, /*#__PURE__*/_react.default.createElement(_metaEngine.default.rootElement, (0, _extends2.default)({
                appName: appName
              }, props))), document.getElementById(targetDomId));
            }

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _render.apply(this, arguments);
}

var _default = {
  appLoader: _appLoader.default,
  utils: _utils.default,
  metaEngine: _metaEngine.default,
  init: init,
  config: config,
  load: load,
  getComponent: getComponent,
  getTemplate: getTemplate,
  getAction: getAction,
  asyncGetAction: asyncGetAction,
  registerComponent: registerComponent,
  registerAction: registerAction,
  registerTemplate: registerTemplate,
  removeApp: removeApp,
  registerPlugin: registerPlugin,
  removePlugin: removePlugin,
  actionMixin: actionMixin,
  appInstances: appInstances,
  setHoc: setHoc,
  fetch: fetch,
  navigate: navigate,
  createElement: createElement,
  createAppElement: createAppElement,
  render: render,
  appFactory: appFactory,
  pluginFactory: pluginFactory,
  actionFactory: actionFactory,
  componentFactory: componentFactory,
  templateFactory: templateFactory,
  store: store,
  context: context
};
exports.default = _default;