"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.appInstances = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _construct2 = _interopRequireDefault(require("@babel/runtime/helpers/construct"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var common = _interopRequireWildcard(require("./common"));

var _utils = _interopRequireDefault(require("@makajs/utils"));

var _immutable = require("immutable");

var _context = _interopRequireDefault(require("./context"));

var _config = _interopRequireDefault(require("./config"));

var appInstances = {};
exports.appInstances = appInstances;

var action = function action(option) {
  var _this = this;

  (0, _classCallCheck2.default)(this, action);
  (0, _defineProperty2.default)(this, "config", function (_ref) {
    var metaHandlers = _ref.metaHandlers;
    _this.metaHandlers = metaHandlers;
    _this.cache.handlerKeys = Object.keys(metaHandlers);
    _this.allActionKeys = _this.cache.handlerKeys;
    _this.allAction = _this.metaHandlers;
  });
  (0, _defineProperty2.default)(this, "getAllAction", function () {
    return _this.allAction;
  });
  (0, _defineProperty2.default)(this, "setMetaForce", function (appName, meta) {
    common.setMetaForce(appName, meta, _this.component && _this.component.props.appQuery);
  });
  (0, _defineProperty2.default)(this, "setActionForce", function (actions) {
    if (actions) {
      _this.cache.expression = {};
      _this.cache.expressionParams = undefined;
      var actionKeys = Object.keys(actions);
      /*
      this.dynamicHandleKeys = actionKeys.map(k => "$" + k)
      this.dynamicHandlers = {}
      actionKeys.forEach((key) => {
      	this.dynamicHandlers["$" + key] = actions[key]
      })*/

      _this.allActionKeys = actionKeys;
      _this.allAction = actions;

      _this.cache.handlerKeys.forEach(function (key) {
        if (_this.allActionKeys.indexOf(key) == -1) {
          _this.allActionKeys.push(key);

          _this.allAction[key] = _this.metaHandlers[key];
        }
      });
    }
  });
  (0, _defineProperty2.default)(this, "initView", function (component, injections) {
    _this.component = component || {
      props: {}
    };
    _this.injections = injections;
    _this.metaHandlers.component = _this.component;
    _this.metaHandlers.injections = _this.injections;

    if (component.props.appFullName) {
      appInstances[component.props.appFullName] = {
        appName: component.props.appName,
        appQuery: component.props.appQuery,
        //app: config.getApps()[component.props.appName],
        instance: component
      };
    }

    var _notClearAppState = component.props._notClearAppState;

    if (component.props._notClearAppState === undefined) {
      _notClearAppState = !!(component.props.appParams && component.props.appParams["_notClearAppState"]);
    }

    if (_notClearAppState === true && !!_this.gs('data')) {} else {
      var initState = _this.appInfo.state && _this.appInfo.state.data || {};

      _this.ss({
        'data': initState
      });

      if (_this.metaHandlers && _this.metaHandlers.onInit) {
        _this.metaHandlers.onInit({
          component: component,
          injections: injections
        });
      }
    }
  });
  (0, _defineProperty2.default)(this, "unmount", function () {
    delete appInstances[_this.component.appFullName];
  });
  (0, _defineProperty2.default)(this, "componentWillMount", function () {
    _this.metaHandlers && _this.metaHandlers['componentWillMount'] && _this.metaHandlers['componentWillMount'] != _this.componentWillMount && _this.metaHandlers['componentWillMount']();
  });
  (0, _defineProperty2.default)(this, "componentDidMount", function () {
    _this.metaHandlers && _this.metaHandlers['componentDidMount'] && _this.metaHandlers['componentDidMount'] != _this.componentDidMount && _this.metaHandlers['componentDidMount']();
  });
  (0, _defineProperty2.default)(this, "shouldComponentUpdate", function (nextProps, nextState) {
    _this.metaHandlers && _this.metaHandlers['shouldComponentUpdate'] && _this.metaHandlers['shouldComponentUpdate'] != _this.shouldComponentUpdate && _this.metaHandlers['shouldComponentUpdate'](nextProps, nextState);
  });
  (0, _defineProperty2.default)(this, "componentWillReceiveProps", function (nextProps) {
    _this.metaHandlers && _this.metaHandlers['componentWillReceiveProps'] && _this.metaHandlers['componentWillReceiveProps'] != _this.componentWillReceiveProps && _this.metaHandlers['componentWillReceiveProps'](nextProps);
  });
  (0, _defineProperty2.default)(this, "componentWillUpdate", function (nextProps, nextState) {
    _this.metaHandlers && _this.metaHandlers['componentWillUpdate'] && _this.metaHandlers['componentWillUpdate'] != _this.componentWillUpdate && _this.metaHandlers['componentWillUpdate'](nextProps, nextState);
  });
  (0, _defineProperty2.default)(this, "componentDidCatch", function (error, info) {
    _this.metaHandlers && _this.metaHandlers['componentDidCatch'] && _this.metaHandlers['componentDidCatch'] != _this.componentDidCatch && _this.metaHandlers['componentDidCatch'](error, info);
  });
  (0, _defineProperty2.default)(this, "componentWillUnmount", function () {
    _this.metaHandlers && _this.metaHandlers['componentWillUnmount'] && _this.metaHandlers['componentWillUnmount'] != _this.componentWillUnmount && _this.metaHandlers['componentWillUnmount']();
  });
  (0, _defineProperty2.default)(this, "componentDidUpdate", function () {
    _this.metaHandlers && _this.metaHandlers['componentDidUpdate'] && _this.metaHandlers['componentDidUpdate'] != _this.componentDidUpdate && _this.metaHandlers['componentDidUpdate']();
  });
  (0, _defineProperty2.default)(this, "getAppInstances", function () {
    return appInstances;
  });
  (0, _defineProperty2.default)(this, "getState", function (fieldPath) {
    return common.getField(_this.injections.getState(), fieldPath);
  });
  (0, _defineProperty2.default)(this, "setState", function (fieldPath, value) {
    if (value) {
      return _this.injections.reduce('setField', fieldPath, value);
    } else {
      return _this.injections.reduce('setFields', fieldPath);
    }
  });
  (0, _defineProperty2.default)(this, "parseExpreesion", function (v, extParas) {
    if (!_this.cache.expression) _this.cache.expression = {};
    var key = v;

    if (extParas && extParas.length > 0) {
      key = key + extParas.toString();
    }

    if (_this.cache.expression[key]) {
      return _this.cache.expression[key];
    }

    if (!_this.cache.expressionParams) {
      _this.cache.expressionParams = ['data'] //.concat(Object.keys(this.metaHandlers)
      //.concat(this.cache.handlerKeys.map(k => "$" + k))
      .concat(_this.allActionKeys.map(function (k) {
        return "$" + k;
      })).concat(['_path', '_vars']);
      /*
      if (this.dynamicHandleKeys) {
      	this.cache.expressionParams = this.cache.expressionParams.concat(this.dynamicHandleKeys)
      }*/
    }

    var params = _this.cache.expressionParams;

    if (extParas && extParas.length > 0) {
      params = params.concat(extParas);
    }

    var body = _utils.default.expression.getExpressionBody(v);

    if (_config.default.current.transformer) {
      if (body.substr(0, 6) === 'return') {
        body = body.substr(6);
        body = _config.default.current.transformer(body);
        body = 'return ' + body;
      } else {
        body = _config.default.transformer(body);
      }
    }

    _this.cache.expression[v] = (0, _construct2.default)(Function, (0, _toConsumableArray2.default)(params).concat([body]));
    return _this.cache.expression[v];
  });
  (0, _defineProperty2.default)(this, "execExpression", function (expressContent, data, path, vars, extParas) {
    var values = [data]; //var metaHandlerKeys = Object.keys(this.metaHandlers),

    /*
    var metaHandlerKeys = this.cache.handlerKeys,
    	i, key
    	var fun = (n) => {
    	let handler = this.metaHandlers[n]
    	if (handler && typeof handler == 'function')
    		handler.__method_name__ = n
    		return handler
    }
    	for (i = 0; key = metaHandlerKeys[i++];) {
    	values.push(fun(key))
    }*/

    var actionKeys = _this.allActionKeys,
        i,
        key;

    var fun = function fun(n) {
      var handler = _this.allAction[n];
      if (handler && typeof handler == 'function') handler.__method_name__ = n;
      return handler;
    };

    for (i = 0; key = actionKeys[i++];) {
      values.push(fun(key));
    }

    values.push(path);
    values.push((vars || '').split(','));
    /*
    var fun1 = (n) => {
    	let handler = this.dynamicHandlers[n]
    	if (handler && typeof handler == 'function')
    		handler.__method_name__ = n
    		return handler
    }
    	if (this.dynamicHandleKeys) {
    	for (i = 0; key = this.dynamicHandleKeys[i++];) {
    		values.push(fun1(key))
    	}
    }*/

    var extParaKeys;

    if (extParas) {
      extParaKeys = Object.keys(extParas);

      if (extParaKeys && extParaKeys.length > 0) {
        extParaKeys.forEach(function (k) {
          values.push(extParas[k]);
        });
      }
    }

    try {
      return _this.parseExpreesion(expressContent, extParaKeys).apply(_this, values);
    } catch (e) {
      _this.metaHandlers && _this.metaHandlers.componentDidCatch && _this.metaHandlers.componentDidCatch != _this.componentDidCatch && _this.metaHandlers.componentDidCatch(e);
      setTimeout(function () {
        console.error("expression parsing error\uFF1A".concat(expressContent));

        _utils.default.exception.error(e);
      }, 500);
    }
  });
  (0, _defineProperty2.default)(this, "needUpdate", function (meta) {
    if (!meta) return false;
    var t = (0, _typeof2.default)(meta);
    if (t == 'string' && _utils.default.expression.isExpression(meta)) return true;
    if (t != 'object') return false;

    if (meta._notParse === true) {
      return false;
    }

    return !(t != 'object' || !!meta['$$typeof'] || !!meta._isAMomentObject || !!meta._power || meta._visible === false);
  });
  (0, _defineProperty2.default)(this, "updateMeta", function (meta, data, path, vars, extParas) {
    //path && (meta.path = path)
    if (meta instanceof Array) {
      for (var _i = 0; _i < meta.length; _i++) {
        var sub = meta[_i];
        var currentPath = path;
        if (!sub) continue;

        if (sub._for) {
          sub._vars = vars;
          sub._extParas = extParas;
          sub.path = "".concat(path, ".").concat(sub._name);
          continue;
        }

        if (sub._function) {
          sub._vars = vars;
          sub._extParas = extParas;
          sub.path = "".concat(path, ".").concat(sub._name);
          continue;
        }

        var subType = (0, _typeof2.default)(sub),
            isExpression = false,
            isMeta = false;

        if (subType == 'string' && _utils.default.expression.isExpression(sub)) {
          sub = _this.execExpression(sub, data, path, vars, extParas);
          isExpression = true;
          if (sub && sub._isMeta === true) isMeta = true;

          if (sub && sub._isMeta === true) {
            isMeta = true;
            meta[_i] = sub.value;
          } else {
            meta[_i] = sub;
          }
        }

        if (!_this.needUpdate(sub)) continue;

        if (isExpression && !isMeta) {
          continue;
        }

        subType = (0, _typeof2.default)(sub);

        if (sub instanceof Array) {
          currentPath = "".concat(path, ".").concat(_i);

          _this.updateMeta(sub, data, currentPath, vars, extParas);

          continue;
        }

        if (sub._name && sub.component) {
          currentPath = "".concat(path, ".").concat(sub._name);
          sub.path = currentPath;

          _this.updateMeta(sub, data, currentPath, vars, extParas);

          continue;
        }

        currentPath = "".concat(path, ".").concat(_i);

        _this.updateMeta(sub, data, currentPath, vars, extParas);
      }

      return;
    }

    var excludeProps = meta._excludeProps;

    if (excludeProps && _utils.default.expression.isExpression(excludeProps)) {
      excludeProps = _this.execExpression(excludeProps, data, path, vars, extParas);
    }

    if (excludeProps && excludeProps instanceof Array) {
      for (var i = 0; i < excludeProps.length; i++) {
        if (meta[excludeProps[i]]) delete meta[excludeProps[i]];
      }

      delete meta['_excludeProps'];
    }

    var keys = Object.keys(meta),
        j,
        key;

    var _loop = function _loop() {
      var v = meta[key],
          t = (0, _typeof2.default)(v),
          currentPath = "".concat(path, ".").concat(key);
      if (!v) return "continue";
      if (key == '_vars' || key == '_extParas') return "continue";
      var isExpression = false,
          isMeta = false;

      if (t == 'string' && _utils.default.expression.isExpression(v)) {
        isExpression = true;
        v = _this.execExpression(v, data, currentPath, vars, extParas);

        if (key == '...' && v && (0, _typeof2.default)(v) == 'object') {
          Object.keys(v).forEach(function (kk) {
            meta[kk] = v[kk];
          });
          delete meta['...'];
        } else {
          if (v && v._isMeta === true) {
            isMeta = true;
            meta[key] = v.value;
          } else {
            meta[key] = v;
          }
        }
      }

      if (!_this.needUpdate(v)) return "continue";

      if (v._for) {
        v._vars = vars;
        v._extParas = extParas;
        v.path = "".concat(path, ".").concat(key, ".").concat(v._name);
        return "continue";
      }

      if (v._function) {
        v._vars = vars;
        v._extParas = extParas;
        v.path = "".concat(path, ".").concat(key, ".").concat(v._name);
        return "continue";
      }

      if (isExpression && !isMeta) {
        return "continue";
      }

      if (v._name && v.component) {
        v.path = "".concat(path, ".").concat(key, ".").concat(v._name);

        _this.updateMeta(v, data, "".concat(path, ".").concat(key, ".").concat(v._name), vars, extParas);

        return "continue";
      }

      if (v instanceof Array) {
        _this.updateMeta(v, data, currentPath, vars, extParas);

        return "continue";
      }

      _this.updateMeta(v, data, currentPath, vars, extParas);
    };

    for (j = 0; key = keys[j++];) {
      var _ret = _loop();

      if (_ret === "continue") continue;
    }
  });
  (0, _defineProperty2.default)(this, "getMeta", function (path, propertys, data, vars, extParas) {
    var meta = common.getMeta(_this.appInfo, path, propertys, _this.component.props.appQuery);

    if (!path) {
      var metaMap = common.getMetaMap(_this.appInfo, _this.component.props.appQuery);
      path = metaMap.keySeq().toList().find(function (o) {
        return o.indexOf('.') == -1;
      });
    }

    if (!data) data = common.getField(_this.injections.getState());
    meta._power = undefined;
    meta._for = undefined;
    meta._function = undefined;
    meta.path = path;
    if (vars) meta._vars = vars;

    _this.updateMeta(meta, data, path, vars, extParas);

    return meta;
  });
  (0, _defineProperty2.default)(this, "gm", this.getMeta);
  (0, _defineProperty2.default)(this, "gs", this.getState);
  (0, _defineProperty2.default)(this, "ss", this.setState);
  (0, _defineProperty2.default)(this, "context", _context.default);
  this.appInfo = option.appInfo;
  this.meta = (0, _immutable.fromJS)(option.appInfo.view);
  var plugins = option.plugins;
  this.cache = {};
  option.appInfo.viewByImmutable = this.meta;
  common.setMeta(option.appInfo, plugins);
};

exports.default = action;