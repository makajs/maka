"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _construct2 = _interopRequireDefault(require("@babel/runtime/helpers/construct"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _react = _interopRequireDefault(require("react"));

var _componentFactory = _interopRequireDefault(require("./componentFactory"));

var _memoize = _interopRequireDefault(require("lodash/memoize"));

var _utils = _interopRequireDefault(require("@makajs/utils"));

var _config = _interopRequireDefault(require("./config"));

function parseMetaProps(meta, props, data) {
  var ret = {};
  Object.keys(meta).forEach(function (key) {
    var v = meta[key],
        t = (0, _typeof2.default)(v);

    if (v instanceof Array) {
      ret[key] = [];
      var i, c;

      for (i = 0; c = v[i++];) {
        if (c instanceof Array) {
          ret[key].push(c);
        } else {
          var mc = metaToComponent(c, props, data);
          if (mc instanceof Array) ret[key] = ret[key].concat(mc);else ret[key].push(mc);
        }
      }
    } else if (t == 'object') {
      if (v && v._notParse) {
        delete v._notParse;
        ret[key] = v;
      } else {
        ret[key] = metaToComponent(v, props, data);
      }
    } else {
      ret[key] = v;
    }
  });
  return ret;
}

var toFunction = (0, _memoize.default)(function (v) {
  return new Function(v);
});

function metaToComponent(meta, props, data) {
  if (!meta) return meta;
  var metaType = (0, _typeof2.default)(meta);

  if (metaType == 'object' && meta['$$typeof']) {
    return meta;
  } else if (metaType == 'object' && meta['_isAMomentObject']) {
    return meta;
  } else if (metaType == 'object' && meta instanceof Date) {
    return meta;
  } else if (metaType == 'object' && meta instanceof Promise) {
    return meta;
  } else if (metaType == 'object') {
    if (meta.component || meta._for || meta._function) {
      if (meta._visible === false) return null;
      if (typeof meta._visible === 'function' && meta._visible() === false) return null;

      if (typeof meta.component == 'function') {
        meta.component = meta.component();
      } //_for: 'data.list' or 'data.list[_index].sub'


      if (meta._for) {
        var _for = meta._for,
            paraNames = ['data', '$props$'],
            paraValues = [data, props];

        if (meta['_vars']) {
          paraNames.push('_vars');
          paraValues.push(meta['_vars']);
        }

        if (meta._extParas) {
          var extParaKeys = Object.keys(meta._extParas);

          if (extParaKeys && extParaKeys.length > 0) {
            extParaKeys.forEach(function (k) {
              paraNames.push(k);
              paraValues.push(meta._extParas[k]);
            });
          }
        }

        var tmp = _for.replace(/\b(in)\b/, '#').split('#'),
            dsPath = _utils.default.string.trim(tmp[1]),
            extParaNames = tmp[0].replace('(', '').replace(')', '').split(','),
            express = "".concat(dsPath.replace(/\$/g, '$props$.'));

        if (_config.default.current.transformer) {
          express = _config.default.current.transformer(express);
        }

        var items = (0, _construct2.default)(Function, paraNames.concat(["return ".concat(dsPath.replace(/\$/g, '$props$.'))])).apply(null, paraValues);
        if (!items || items.length == 0) return;
        return items.map(function (o, index) {
          var _vars = meta['_vars'];
          _vars = !_vars ? index + '' : ',' + index; //let _vars = meta['_vars'] || []
          //_vars.push({ _index: index, _item: o })

          var _extParas = meta._extParas || {};

          _extParas[_utils.default.string.trim(extParaNames[0])] = o;
          extParaNames.length > 1 && (_extParas[_utils.default.string.trim(extParaNames[1])] = index);
          var childMeta = props.base.gm(meta.path, undefined, data, _vars, _extParas);
          delete childMeta._for;
          return metaToComponent(childMeta, props, data);
        });
      } //_function: '(arg1,arg2)


      if (meta._function !== undefined) {
        var _function = meta._function.replace('(', '').replace(')', '');

        return function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var _extParas = meta._extParas || {};

          _function.split(',').forEach(function (paraName, index) {
            _extParas[_utils.default.string.trim(paraName)] = args[index];
          });

          var childMeta = props.base.gm(meta.path, undefined, data, meta['_vars'], _extParas);
          childMeta._function = undefined;

          if (childMeta._firstReturn) {
            return childMeta._firstReturn;
          } else {
            return metaToComponent(childMeta, props, data);
          }
        };
      }

      var _decorator = meta._decorator;

      var componentName = meta.component,
          component = _componentFactory.default.getComponent(componentName);

      var allProps = parseMetaProps(meta, props, data);

      if (!allProps.key) {
        //let strVars = (meta._vars && meta._vars.map(o => o._index).join(',')) || ''
        var strVars = meta._vars || '';
        allProps.key = strVars ? meta.path + ',' + strVars : meta.path;
      }

      delete allProps.component;
      delete allProps._name;
      delete allProps.path;
      delete allProps._decorator; //allProps = omit(allProps, ['clearAppState', 'component', 'name', 'getDirectFuns', 'initView', 'payload'])

      if (componentName == 'AppLoader') {
        var propKeys = Object.keys(props),
            i,
            key;

        for (i = 0; key = propKeys[i++];) {
          if (allProps[key] == undefined) {
            allProps[key] = props[key];
          }
        } //Remove attributes that are not required by some components


        delete allProps.clearAppState;
        delete allProps.getDirectFuns;
        delete allProps.initView;
        delete allProps.payload;
        delete allProps.componentWillMount;
        delete allProps.componentDidMount;
        delete allProps.shouldComponentUpdate;
        delete allProps.componentWillReceiveProps;
        delete allProps.componentWillUpdate;
        delete allProps.componentDidCatch;
        delete allProps.componentWillUnmount;
        delete allProps.componentDidUpdate;
        delete allProps.unmount;
        if (!allProps.appName) return null;
        /*if (allProps._notRender === true && !existsApp(allProps.appName)) {
            return null
        }*/

        allProps.key = allProps.appName;
        allProps.name = allProps.appName;
        return /*#__PURE__*/_react.default.createElement(component, allProps);
      }

      if (_decorator) return _decorator( /*#__PURE__*/_react.default.createElement(component, allProps));else return /*#__PURE__*/_react.default.createElement(component, allProps);
    } else {
      return parseMetaProps(meta, props, data);
    }
  } else {
    return meta;
  }
}

var MonkeyKing = function MonkeyKing(props) {
  var base = props.base;
  var data = base.gs();
  if (!data) return null;
  return metaToComponent(base.gm(undefined, undefined, data), props, data);
};

var _default = MonkeyKing;
exports.default = _default;