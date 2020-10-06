"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _parseName = _interopRequireDefault(require("./parseName"));

var _appFactory = _interopRequireDefault(require("./appFactory"));

var _loadApp = _interopRequireDefault(require("./loadApp"));

var _pluginFactory = _interopRequireDefault(require("./pluginFactory"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _default = function _default(actionInjections, reducerInjections) {
  return function (store) {
    return function (next) {
      return /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(action) {
          var getState, dispatch, _action, fullName, name, query, params, actionCreator, args, reducer, reduce, getStateByApp, injections, realAction, _fullName, prevFullName, parsedName, appInfo, plugins, pluginApps, i, _fullName2, _prevFullName, _parsedName, _appInfo, _plugins, _pluginApps, _i;

          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  getState = store.getState, dispatch = store.dispatch;

                  if (!(typeof action === 'function')) {
                    _context.next = 10;
                    break;
                  }

                  _action = action(), fullName = _action.fullName, name = _action.name, query = _action.query, params = _action.params, actionCreator = _action.actionCreator, args = _action.args, reducer = _action.reducer;

                  reduce = function reduce(type) {
                    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                      args[_key - 1] = arguments[_key];
                    }

                    dispatch({
                      type: '@@reduce',
                      payload: {
                        fullName: fullName,
                        name: name,
                        query: query,
                        type: type,
                        reducer: reducer,
                        payload: args,
                        reducerInjections: reducerInjections
                      }
                    });
                  };

                  getStateByApp = function getStateByApp() {
                    return getState().get(fullName);
                  };

                  injections = _objectSpread({
                    currentApp: {
                      fullName: fullName,
                      name: name,
                      query: query,
                      params: params
                    },
                    store: store,
                    reduce: reduce,
                    getState: getStateByApp
                  }, actionInjections);
                  realAction = actionCreator.apply(void 0, (0, _toConsumableArray2.default)(args).concat([injections]));

                  if (typeof realAction === 'function') {
                    realAction(injections);
                  }

                  _context.next = 68;
                  break;

                case 10:
                  if (!(action.type && action.type === '@@loadApp')) {
                    _context.next = 42;
                    break;
                  }

                  _context.prev = 11;
                  _fullName = action.payload.fullName, prevFullName = action.payload.prevFullName, parsedName = (0, _parseName.default)(_fullName);
                  appInfo = _appFactory.default.getApp(parsedName.name);

                  if (appInfo) {
                    _context.next = 17;
                    break;
                  }

                  _context.next = 17;
                  return (0, _loadApp.default)(parsedName.name);

                case 17:
                  appInfo = _appFactory.default.getApp(parsedName.name);

                  if (appInfo) {
                    _context.next = 21;
                    break;
                  }

                  console.error("Loading app ".concat(parsedName.name, " failed"));
                  return _context.abrupt("return", next(action));

                case 21:
                  /* plugin*/
                  plugins = _pluginFactory.default.getPluginNames(parsedName.name);
                  pluginApps = [];

                  if (!(plugins && plugins.length > 0)) {
                    _context.next = 33;
                    break;
                  }

                  i = 0;

                case 25:
                  if (!(i < plugins.length)) {
                    _context.next = 33;
                    break;
                  }

                  if (_appFactory.default.getApp(plugins[i])) {
                    _context.next = 29;
                    break;
                  }

                  _context.next = 29;
                  return (0, _loadApp.default)(plugins[i]);

                case 29:
                  pluginApps.push(_appFactory.default.getApp(plugins[i]));

                case 30:
                  i++;
                  _context.next = 25;
                  break;

                case 33:
                  return _context.abrupt("return", next({
                    type: '@@loadAppReal',
                    payload: {
                      fullName: _fullName,
                      appInfo: appInfo,
                      prevFullName: prevFullName,
                      action: appInfo.action,
                      pluginApps: pluginApps,
                      plugins: plugins
                    }
                  }));

                case 36:
                  _context.prev = 36;
                  _context.t0 = _context["catch"](11);
                  console.error(_context.t0);
                  return _context.abrupt("return", next(action));

                case 40:
                  _context.next = 68;
                  break;

                case 42:
                  if (!(action.type && action.type === '@@loadPlugin')) {
                    _context.next = 67;
                    break;
                  }

                  _context.prev = 43;
                  _fullName2 = action.payload.fullName, _prevFullName = action.payload.prevFullName, _parsedName = (0, _parseName.default)(_fullName2);
                  _appInfo = _appFactory.default.getApp(_parsedName.name);
                  /* plugin*/

                  _plugins = _pluginFactory.default.getPluginNames(_parsedName.name);
                  _pluginApps = [];

                  if (!(_plugins && _plugins.length > 0)) {
                    _context.next = 58;
                    break;
                  }

                  _i = 0;

                case 50:
                  if (!(_i < _plugins.length)) {
                    _context.next = 58;
                    break;
                  }

                  if (_appFactory.default.getApp(_plugins[_i])) {
                    _context.next = 54;
                    break;
                  }

                  _context.next = 54;
                  return (0, _loadApp.default)(_plugins[_i]);

                case 54:
                  _pluginApps.push(_appFactory.default.getApp(_plugins[_i]));

                case 55:
                  _i++;
                  _context.next = 50;
                  break;

                case 58:
                  return _context.abrupt("return", next({
                    type: '@@loadAppReal',
                    payload: {
                      fullName: _fullName2,
                      appInfo: _appInfo,
                      prevFullName: _prevFullName,
                      action: _appInfo.action,
                      pluginApps: _pluginApps,
                      plugins: _plugins,
                      forceLoad: true
                    }
                  }));

                case 61:
                  _context.prev = 61;
                  _context.t1 = _context["catch"](43);
                  console.error(_context.t1);
                  return _context.abrupt("return", next(action));

                case 65:
                  _context.next = 68;
                  break;

                case 67:
                  return _context.abrupt("return", next(action));

                case 68:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[11, 36], [43, 61]]);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();
    };
  };
};

exports.default = _default;