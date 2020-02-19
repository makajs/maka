"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uid = uid;
exports.setMeta = setMeta;
exports.setMetaForce = setMetaForce;
exports.getMeta = getMeta;
exports.getMetaMap = getMetaMap;
exports.getField = getField;
exports.getFields = getFields;
exports.setField = setField;
exports.setFields = setFields;
exports.updateField = updateField;

var _immutable = _interopRequireWildcard(require("immutable"));

var _utils = _interopRequireWildcard(require("@makajs/utils"));

var _templateFactory = _interopRequireDefault(require("./templateFactory"));

var globalObj = (0, _utils.getGlobal)();
var parsePath = _utils.path.parsePath;
var cache = {
  meta: (0, _immutable.Map)(),
  plugin: (0, _immutable.Map)()
};

globalObj['__getCache'] = function () {
  return cache;
};

var uids = {};

function uid(appName) {
  if (!uids[appName]) {
    uids[appName] = 0;
    return appName + uids[appName]++;
  } else {
    return uids[appName]++;
  }
}

function setMeta(appInfo) {
  var plugins = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var appQuery = arguments.length > 2 ? arguments[2] : undefined;
  if (!appInfo || !appInfo.view) return;
  var appName = appInfo.name;
  if (cache.meta.has(appName) && JSON.stringify(plugins.sort()) === JSON.stringify(cache.plugin.get(appName).toJS().sort())) return;
  cache.plugin = cache.plugin.set(appName, (0, _immutable.fromJS)(plugins));
  setMetaForce(appName, appInfo.viewByImmutable || appInfo.view, appQuery);
}

function setMetaForce(appName, meta, appQuery) {
  if (!appName || !meta) return;
  meta = _immutable.default.isMap(meta) || _immutable.default.isList(meta) ? meta : (0, _immutable.fromJS)(meta); //meta = fromJS(meta)

  meta = parseMetaTemplate(meta);
  var parsed = parseMeta(meta, appName);
  meta = parsed.meta;
  var map = parsed.map;

  if (appQuery) {
    cache.meta = cache.meta.setIn([appName, appQuery, 'meta'], meta).setIn([appName, appQuery, 'metaMap'], map);
  } else {
    cache.meta = cache.meta.setIn([appName, 'meta'], meta).setIn([appName, 'metaMap'], map);
  }
}

function getMeta(appInfo, fullpath, propertys, appQuery) {
  var meta = appQuery ? cache.meta.getIn([appInfo.name, appQuery, 'meta']) || cache.meta.getIn([appInfo.name, 'meta']) : cache.meta.getIn([appInfo.name, 'meta']);
  var metaMap = appQuery ? cache.meta.getIn([appInfo.name, appQuery, 'metaMap']) || cache.meta.getIn([appInfo.name, 'metaMap']) : cache.meta.getIn([appInfo.name, 'metaMap']);

  if (!fullpath) {
    return meta.toJS();
  }

  var parsedPath = parsePath(fullpath),
      vars = parsedPath.vars;
  var path = metaMap.get(parsedPath.path);
  var currentMeta = path ? meta.getIn(path.split('.')) : meta; //Empty attribute, get all attributes under the path

  if (!propertys) return currentMeta.toJS();
  var ret = {}; //Attribute is an array

  if (propertys instanceof Array) {
    var i, p;

    for (i = 0; p = propertys[i++];) {
      var val = currentMeta.getIn(p.split('.'));
      ret[p] = val && val.toJS ? val.toJS() : val;
    }
    /*
    propertys.forEach(p => {
        let val = currentMeta.getIn(p.split('.'))
        ret[p] = (val && val.toJS) ? val.toJS() : val
    })*/


    return ret;
  } //Attribute is a string


  if (typeof propertys == 'string') {
    var _val = currentMeta.getIn(propertys.split('.'));

    return _val && _val.toJS ? _val.toJS() : _val;
  }
}

function getMetaMap(appInfo, appQuery) {
  return cache.meta.getIn([appInfo.name, appQuery, 'metaMap']) || cache.meta.getIn([appInfo.name, 'metaMap']);
}

function getField(state, fieldPath) {
  var r;

  if (!fieldPath) {
    r = state.get('data');
    return r && r.toJS ? r.toJS() : r;
  }

  r = fieldPath instanceof Array ? state.getIn(fieldPath) : state.getIn(fieldPath.split('.'));
  return r && r.toJS ? r.toJS() : r;
}

function getFields(state, fieldPaths) {
  var ret = {};
  fieldPaths.forEach(function (o) {
    return ret[o] = getField(state, o);
  });
  return ret;
}

function setField(state, fieldPath, value) {
  if (fieldPath instanceof Array) {
    return state.setIn(fieldPath, value && (0, _immutable.fromJS)(value));
  } else {
    return state.setIn(fieldPath.split('.'), value && (0, _immutable.fromJS)(value));
  }
}

function setFields(state, values) {
  var keys = Object.keys(values),
      i,
      key;

  for (i = 0; key = keys[i++];) {
    state = setField(state, key, values[key]);
  }

  return state;
}

function updateField(state, fieldPath, fn) {
  if (fieldPath instanceof Array) {
    return state.updateIn(fieldPath, fn);
  } else {
    return state.updateIn(fieldPath.split('.'), fn);
  }
}

function parseMetaTemplate(meta) {
  var templates = [];

  var parseProp = function parseProp(propValue, path) {
    if (!(propValue instanceof _immutable.default.Map)) {
      return;
    }

    if (propValue.get('component')) {
      var component = _utils.default.string.trim(propValue.get('component'));

      var template = _templateFactory.default.getTemplate(component);

      if (template) {
        templates.unshift([path, template]);
      }
    }

    propValue.keySeq().toArray().forEach(function (p) {
      var v = propValue.get(p);

      if (v instanceof _immutable.default.List) {
        v.forEach(function (c, index) {
          var currentPath = path ? "".concat(path, ".").concat(p, ".").concat(index) : "".concat(p, ".").concat(index);
          parseProp(c, currentPath);
        });
      } else {
        var currentPath = path ? "".concat(path, ".").concat(p) : p;
        parseProp(v, currentPath);
      }
    });
  };

  parseProp(meta, '');
  templates.forEach(function (t) {
    var seg = t[0].split('.');
    var curr = seg == '' ? (0, _immutable.fromJS)(t[1](meta.toJS())) : (0, _immutable.fromJS)(t[1](meta.getIn(seg).toJS()));

    if (curr instanceof _immutable.default.List && meta.getIn(seg.slice(0, seg.length - 1)) instanceof _immutable.default.List) {
      var index = seg.pop();
      meta = meta.updateIn(seg, function (ll) {
        ll = ll.remove(index);
        curr.forEach(function (o) {
          ll = ll.insert(index, o);
          index++;
        });
        return ll;
      });
    } else if (seg == '') {
      meta = curr;
    } else {
      meta = meta.setIn(seg, curr);
    }
  });
  return meta;
}

function parseMetaTemplate1(meta) {
  var templates = [];

  var parseProp = function parseProp(propValue, path) {
    if (!(propValue instanceof _immutable.default.Map)) {
      return;
    }

    if (propValue.get('component')) {
      var component = _utils.default.string.trim(propValue.get('component'));

      var template = _templateFactory.default.getTemplate(component);

      if (template) {
        templates.unshift([path, (0, _immutable.fromJS)(template(propValue.toJS()))]);
        return;
      }
    }

    propValue.keySeq().toArray().forEach(function (p) {
      var v = propValue.get(p);

      if (v instanceof _immutable.default.List) {
        v.forEach(function (c, index) {
          var currentPath = path ? "".concat(path, ".").concat(p, ".").concat(index) : "".concat(p, ".").concat(index);
          parseProp(c, currentPath);
        });
      } else {
        var currentPath = path ? "".concat(path, ".").concat(p) : p;
        parseProp(v, currentPath);
      }
    });
  };

  parseProp(meta, '');
  templates.forEach(function (t) {
    var seg = t[0].split('.');

    if (t[1] instanceof _immutable.default.List && meta.getIn(seg.slice(0, seg.length - 1)) instanceof _immutable.default.List) {
      var index = seg.pop();
      meta = meta.updateIn(seg, function (ll) {
        ll = ll.remove(index);
        t[1].forEach(function (o) {
          ll = ll.insert(index, o);
          index++;
        });
        return ll;
      });
    } else if (seg == '') {
      meta = t[1];
    } else {
      meta = meta.setIn(seg, t[1]);
    }
  });
  return meta;
}

function parseMeta(meta, appName) {
  var map = (0, _immutable.Map)();

  var parseProp = function parseProp(propValue, parentPath, parentRealPath) {
    if (!(propValue instanceof _immutable.default.Map)) {
      return;
    }
    /*if (propValue.get('name') && propValue.get('component')) {
        const name = utils.string.trim(propValue.get('name'))
        parentPath = parentPath ? `${parentPath}.${name}` : name
        ret = ret.set(parentPath, parentRealPath)
    }
    else*/


    if (propValue.get('component') || propValue.get('_for') || propValue.get('_function')) {
      var name = uid(appName) + '';
      meta = meta.setIn(parentRealPath ? parentRealPath.split('.').concat('_name') : ['_name'], name);
      parentPath = parentPath ? "".concat(parentPath, ".").concat(name) : name;
      map = map.set(parentPath, parentRealPath);
    }

    propValue.keySeq().toArray().forEach(function (p) {
      var v = propValue.get(p),
          currentPath = parentPath ? "".concat(parentPath, ".").concat(p) : p;

      if (v instanceof _immutable.default.List) {
        v.forEach(function (c, index) {
          var currentRealPath = parentRealPath ? "".concat(parentRealPath, ".").concat(p, ".").concat(index) : "".concat(p, ".").concat(index);

          if (c && c.get && (c.get('component') || c.get('_for') || c.get('_function'))) {
            parseProp(c, "".concat(currentPath), currentRealPath);
          } else {
            parseProp(c, "".concat(currentPath, ".").concat(index), currentRealPath);
          }
        });
      } else {
        var currentRealPath = parentRealPath ? "".concat(parentRealPath, ".").concat(p) : p;
        parseProp(v, "".concat(currentPath), currentRealPath);
      }
    });
  };

  parseProp(meta, '', '');
  return {
    meta: meta,
    map: map
  };
}