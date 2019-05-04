"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "config", {
  enumerable: true,
  get: function get() {
    return _config.default;
  }
});
Object.defineProperty(exports, "action", {
  enumerable: true,
  get: function get() {
    return _action.default;
  }
});
Object.defineProperty(exports, "appInstances", {
  enumerable: true,
  get: function get() {
    return _action.appInstances;
  }
});
Object.defineProperty(exports, "reducer", {
  enumerable: true,
  get: function get() {
    return _reducer.default;
  }
});
Object.defineProperty(exports, "wrapper", {
  enumerable: true,
  get: function get() {
    return _wrapper.default;
  }
});
Object.defineProperty(exports, "actionMixin", {
  enumerable: true,
  get: function get() {
    return _actionMixin.default;
  }
});
Object.defineProperty(exports, "componentFactory", {
  enumerable: true,
  get: function get() {
    return _componentFactory.default;
  }
});
Object.defineProperty(exports, "templateFactory", {
  enumerable: true,
  get: function get() {
    return _templateFactory.default;
  }
});
Object.defineProperty(exports, "actionFactory", {
  enumerable: true,
  get: function get() {
    return _actionFactory.default;
  }
});
Object.defineProperty(exports, "defaultComponent", {
  enumerable: true,
  get: function get() {
    return _defaultComponent.default;
  }
});
Object.defineProperty(exports, "rootElement", {
  enumerable: true,
  get: function get() {
    return _rootElement.default;
  }
});
Object.defineProperty(exports, "contextManager", {
  enumerable: true,
  get: function get() {
    return _context.default;
  }
});
exports.defaultReducer = exports.defaultAction = exports.default = void 0;

var _config = _interopRequireDefault(require("./config"));

var _action = _interopRequireWildcard(require("./action"));

var _reducer = _interopRequireDefault(require("./reducer"));

var _wrapper = _interopRequireDefault(require("./wrapper"));

var _actionMixin = _interopRequireDefault(require("./actionMixin"));

var _componentFactory = _interopRequireDefault(require("./componentFactory"));

var _templateFactory = _interopRequireDefault(require("./templateFactory"));

var _actionFactory = _interopRequireDefault(require("./actionFactory"));

var _defaultComponent = _interopRequireDefault(require("./defaultComponent"));

var _rootElement = _interopRequireDefault(require("./rootElement"));

var _context = _interopRequireDefault(require("./context"));

var defaultAction = _action.default;
exports.defaultAction = defaultAction;
var defaultReducer = _reducer.default;
exports.defaultReducer = defaultReducer;
var _default = {
  config: _config.default,
  action: _action.default,
  reducer: _reducer.default,
  wrapper: _wrapper.default,
  actionMixin: _actionMixin.default,
  componentFactory: _componentFactory.default,
  templateFactory: _templateFactory.default,
  actionFactory: _actionFactory.default,
  defaultComponent: _defaultComponent.default,
  defaultAction: defaultAction,
  defaultReducer: defaultReducer,
  rootElement: _rootElement.default,
  contextManager: _context.default,
  appInstances: _action.appInstances
};
exports.default = _default;