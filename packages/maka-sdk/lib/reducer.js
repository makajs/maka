"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _immutable = require("immutable");

var _wrapMapStateToProps = _interopRequireDefault(require("./wrapMapStateToProps"));

var _wrapMapDispatchToProps = _interopRequireDefault(require("./wrapMapDispatchToProps"));

var _createReduxConnector = _interopRequireDefault(require("./createReduxConnector"));

var _config = _interopRequireDefault(require("./config"));

function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Map)();

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case "@@loadAppReal":
      return loadApp(state, payload);

    case "@@reduce":
      return reduce(state, payload);

    case "@@clearAppState":
      return clearAppState(state, payload);

    default:
      return state;
  }
}

function loadApp(state, _ref2) {
  var fullName = _ref2.fullName,
      prevFullName = _ref2.prevFullName,
      appInfo = _ref2.appInfo,
      component = _ref2.component,
      action = _ref2.action,
      reducer = _ref2.reducer,
      pluginApps = _ref2.pluginApps,
      _ref2$plugins = _ref2.plugins,
      plugins = _ref2$plugins === void 0 ? [] : _ref2$plugins,
      _ref2$forceLoad = _ref2.forceLoad,
      forceLoad = _ref2$forceLoad === void 0 ? false : _ref2$forceLoad;

  if (!state.has(fullName) || forceLoad) {
    if (forceLoad && JSON.stringify(state.getIn([fullName, '@@require', 'plugins']).toJS().sort()) === JSON.stringify(plugins.sort())) {
      return state;
    }

    if (!forceLoad) state = state.set(fullName, (0, _immutable.Map)());
    appInfo = (0, _objectSpread2.default)({}, appInfo);

    if (appInfo && appInfo.view && typeof appInfo.view == 'function') {
      component = _config.default.current.componentWrapper()(appInfo.view);
    }

    if (pluginApps && pluginApps.length > 0) {
      for (var i = 0; i < pluginApps.length; i++) {
        var plugin = pluginApps[i];
        if (plugin.pluginApi && plugin.pluginApi.afterState) appInfo.state = plugin.pluginApi.afterState((0, _immutable.fromJS)(appInfo.state).toJS());
        if (plugin.pluginApi && plugin.pluginApi.afterView) appInfo.view = plugin.pluginApi.afterView((0, _immutable.fromJS)(appInfo.view).toJS());
      }
    }

    var actionInstance = typeof action == 'function' ? action({
      appInfo: appInfo,
      fullName: fullName,
      plugins: plugins
    }) : _config.default.current.defaultAction({
      appInfo: appInfo,
      fullName: fullName,
      plugins: plugins
    });
    var actionInternal = actionInstance.getDirectFuns();

    if (pluginApps && pluginApps.length > 0) {
      pluginApps.forEach(function (plugin) {
        if (plugin.pluginApi && plugin.pluginApi.afterAction) actionInternal = plugin.pluginApi.afterAction(actionInternal);
      });
      actionInstance = (0, _objectSpread2.default)({}, actionInstance, {
        getDirectFuns: function getDirectFuns() {
          return actionInternal;
        }
      });
    }

    var reducerInstance = typeof reducer == 'function' ? reducer({
      appInfo: appInfo,
      fullName: fullName
    }) : _config.default.current.defaultReducer({
      appInfo: appInfo,
      fullName: fullName
    }),
        container = (0, _createReduxConnector.default)(component || appInfo.viewDecorator && appInfo.viewDecorator()(_config.default.current.defaultComponent) || _config.default.current.defaultComponent, (0, _wrapMapStateToProps.default)(fullName), (0, _wrapMapDispatchToProps.default)(fullName, actionInstance, reducerInstance), null, {
      //withRef: true, 
      pure: true
    });
    state = state.setIn([fullName, '@@require'], (0, _immutable.Map)({
      fullName: fullName,
      appInfo: appInfo,
      component: component,
      action: actionInstance,
      reducer: reducerInstance,
      container: container,
      plugins: (0, _immutable.fromJS)(plugins || [])
    }));
  }

  if (prevFullName && prevFullName != fullName) {
    state = clearAppState(state, {
      fullName: prevFullName
    });
  }

  return state;
}

function clearAppState(state, _ref3) {
  var fullName = _ref3.fullName;
  if (!state.has(fullName)) return state;
  var ks = [];
  state.get(fullName).mapKeys(function (k) {
    if (k != '@@require') ks.push(k);
    return k;
  });
  ks.forEach(function (k) {
    if (k) state = state.update(fullName, function (x) {
      return x.remove(k);
    });
  });
  return state;
}

function reduce(state, _ref4) {
  var reducer = _ref4.reducer,
      type = _ref4.type,
      payload = _ref4.payload,
      fullName = _ref4.fullName,
      injectFunsForReducer = _ref4.injectFunsForReducer;
  var startDate = new Date();
  var oldState = state.get(fullName);
  var newState = reducer[type].apply(this, [oldState].concat(payload));

  if (typeof newState === "function") {
    newState = newState(injectFunsForReducer);
  }

  if (window.__maka_record_action__ === true) {
    window.__maka_actions__ = window.__maka_actions__ || [];
    var endDate = new Date();

    window.__maka_actions__.unshift({
      appFullName: fullName,
      reduceMethod: type,
      payload: payload,
      oldState: oldState,
      newState: newState,
      startTime: startDate.getHours() + ':' + startDate.getMinutes() + ':' + startDate.getSeconds() + '.' + startDate.getMilliseconds(),
      endTime: endDate.getHours() + ':' + endDate.getMinutes() + ':' + endDate.getSeconds() + '.' + endDate.getMilliseconds(),
      elapsedTime: Math.abs(startDate.getTime() - endDate.getTime()) //(1000*60*60*24)

    });
  } else {
    if (window.__maka_actions__) window.__maka_actions__ = undefined;
  }

  return state.set(fullName, newState);
}