"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = actionMixin;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _action = _interopRequireDefault(require("./action"));

var _actionFactory = _interopRequireDefault(require("./actionFactory"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var isPromise = function isPromise(obj) {
  return !!obj && ((0, _typeof2.default)(obj) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
};

var functionWrapper = function functionWrapper(fn, base) {
  var wrapper = function wrapper() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var that = base.getAllAction() || this;

    var beforeRet = fn._before && fn._before.apply(that, args);

    if (beforeRet === false || isPromise(beforeRet)) {} else if (typeof beforeRet == 'function') {
      return beforeRet;
    } else {
      var ret = fn.apply(that, args);

      if (isPromise(ret)) {
        return new Promise(function (resolve, reject) {
          ret.then(function (realRet) {
            if (fn._after) {
              realRet = fn._after.apply(that, (args || []).concat(ret));
            }

            resolve(realRet);
          }).catch(function (e) {
            return reject(e);
          });
        });
      } else {
        if (fn._after) {
          return fn._after.apply(that, (args || []).concat(ret));
        } else return ret;
      }
    }
  };

  wrapper.before = function (beforeFn) {
    fn._before = beforeFn;
  };

  wrapper.after = function (afterFn) {
    fn._after = afterFn;
  };

  wrapper.real = fn;
  return wrapper;
};

function actionMixin() {
  for (var _len2 = arguments.length, mixins = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    mixins[_key2] = arguments[_key2];
  }

  return function (target) {
    return function (option) {
      var ret = {};
      var mixinInstances = {};
      var base = new _action.default(option);
      Object.keys(base).forEach(function (key) {
        if (typeof base[key] == 'function' && key != 'getAllAction') {
          base[key] = functionWrapper(base[key], base);
        }
      });
      mixinInstances.base = base;

      if (mixins && mixins.length > 0) {
        mixins.forEach(function (m) {
          if (m != 'base') {
            var actCls, act;

            if (typeof m == 'string') {
              actCls = _actionFactory.default.getAction(m);

              if ((0, _typeof2.default)(actCls) == 'object') {
                mixinInstances[m] = actCls;
              } else if (typeof actCls == 'function') {
                if (actCls._isFunction) {
                  mixinInstances[m] = actCls;
                } else {
                  act = new actCls(_objectSpread(_objectSpread({}, option), {}, {
                    mixins: mixinInstances
                  }));

                  if (act) {
                    mixinInstances[m] = act;
                  }
                }
              }
            } else if ((0, _typeof2.default)(m) == 'object' && m.name) {
              actCls = _actionFactory.default.getAction(m.name);

              if ((0, _typeof2.default)(actCls) == 'object') {
                mixinInstances[m] = actCls;
              } else if (typeof actCls == 'function') {
                if (actCls._isFunction) {
                  mixinInstances[m] = actCls;
                } else {
                  act = new actCls(_objectSpread(_objectSpread(_objectSpread({}, option), m.option), {}, {
                    mixins: mixinInstances
                  }));

                  if (act) {
                    mixinInstances[m.name] = act;
                  }
                }
              }
            }
          }
        });
      }

      var curr = new target(_objectSpread(_objectSpread({}, option), {}, {
        mixins: mixinInstances
      }));
      Object.keys(curr).forEach(function (key) {
        if (typeof curr[key] == 'function') {
          curr[key] = functionWrapper(curr[key], base);
        }
      });
      var ret = curr;
      Object.keys(mixinInstances).forEach(function (k) {
        return ret[k] = mixinInstances[k];
      });
      var retWrapper = {
        getDirectFuns: function getDirectFuns() {
          return ret;
        }
      };
      retWrapper.initView = ret.base.initView;
      base.config({
        metaHandlers: ret
      });
      return retWrapper;
    };
  };
}