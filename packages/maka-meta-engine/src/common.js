import Immutable, { Map, List, fromJS } from 'immutable';
import utils, { path } from '@makajs/utils';
import templateFactory from './templateFactory';

import { getGlobal } from '@makajs/utils';
const globalObj = getGlobal();

const { parsePath } = path;
const cache = { meta: Map(), plugin: Map() };

globalObj.__getCache = () => cache;

const uids = {

};

export function uid(appName) {
  if (!uids[appName]) {
    uids[appName] = 0;
    return appName + (uids[appName]++);
  }

  return uids[appName]++;

}

export function setMeta(appInfo, plugins = [], appQuery) {

  if (!appInfo || !appInfo.view) return;

  const appName = appInfo.name;

  if (cache.meta.has(appName) &&
        JSON.stringify(plugins.sort()) === JSON.stringify(cache.plugin.get(appName).toJS().sort())) { return; }

  cache.plugin = cache.plugin.set(appName, fromJS(plugins));
  setMetaForce(appName, appInfo.viewByImmutable || appInfo.view, appQuery);
}

export function setMetaForce(appName, meta, appQuery) {
  if (!appName || !meta) { return; }

  meta = (Map.isMap(meta) || List.isList(meta)) ? meta : fromJS(meta);
  // meta = fromJS(meta)

  meta = parseMetaTemplate(meta);

  const parsed = parseMeta(meta, appName);
  meta = parsed.meta;
  const map = parsed.map;

  if (appQuery) {
    cache.meta = cache.meta
      .setIn([ appName, appQuery, 'meta' ], meta)
      .setIn([ appName, appQuery, 'metaMap' ], map);
  } else {
    cache.meta = cache.meta
      .setIn([ appName, 'meta' ], meta)
      .setIn([ appName, 'metaMap' ], map);
  }

}

export function getMeta(appInfo, fullpath, propertys, appQuery) {
  const meta = appQuery ?
    (cache.meta.getIn([ appInfo.name, appQuery, 'meta' ]) || cache.meta.getIn([ appInfo.name, 'meta' ])) :
    cache.meta.getIn([ appInfo.name, 'meta' ]);

  const metaMap = appQuery ?
    (cache.meta.getIn([ appInfo.name, appQuery, 'metaMap' ]) || cache.meta.getIn([ appInfo.name, 'metaMap' ])) :
    cache.meta.getIn([ appInfo.name, 'metaMap' ]);

  if (!fullpath) {
    return meta.toJS();
  }

  const parsedPath = parsePath(fullpath);
  // vars = parsedPath.vars;

  const path = metaMap.get(parsedPath.path);

  const currentMeta = path ? meta.getIn(path.split('.')) : meta;

  // Empty attribute, get all attributes under the path
  if (!propertys) { return currentMeta.toJS(); }

  const ret = {};

  // Attribute is an array
  if (propertys instanceof Array) {
    let i,
      p;

    for (i = 0; p = propertys[i++];) { //eslint-disable-line
      const val = currentMeta.getIn(p.split('.'));
      ret[p] = (val && val.toJS) ? val.toJS() : val;
    }

    /*
        propertys.forEach(p => {
            let val = currentMeta.getIn(p.split('.'))
            ret[p] = (val && val.toJS) ? val.toJS() : val
        })*/

    return ret;
  }

  // Attribute is a string
  if (typeof propertys === 'string') {
    const val = currentMeta.getIn(propertys.split('.'));
    return (val && val.toJS) ? val.toJS() : val;
  }
}

export function getMetaMap(appInfo, appQuery) {
  return cache.meta.getIn([ appInfo.name, appQuery, 'metaMap' ]) || cache.meta.getIn([ appInfo.name, 'metaMap' ]);
}

export function getField(state, fieldPath) {
  let r;
  if (!fieldPath) {
    r = state.get('data');
    return r && r.toJS ? r.toJS() : r;
  }
  r = fieldPath instanceof Array
    ? state.getIn(fieldPath)
    : state.getIn(fieldPath.split('.'));

  return r && r.toJS ? r.toJS() : r;
}

export function getFields(state, fieldPaths) {
  const ret = {};
  fieldPaths.forEach(o => { ret[o] = getField(state, o); });
  return ret;
}

export function setField(state, fieldPath, value) {
  if (fieldPath instanceof Array) {
    return state.setIn(fieldPath, value && fromJS(value));
  }
  return state.setIn(fieldPath.split('.'), value && fromJS(value));

}

export function setFields(state, values) {
  const keys = Object.keys(values);
  let i,
    key;

  for (i = 0; key = keys[i++];) { //eslint-disable-line
    state = setField(state, key, values[key]);
  }
  return state;
}

export function updateField(state, fieldPath, fn) {
  if (fieldPath instanceof Array) {
    return state.updateIn(fieldPath, fn);
  }
  return state.updateIn(fieldPath.split('.'), fn);

}


function parseMetaTemplate(meta) {
  const templates = [];

  const parseProp = (propValue, path) => {
    if (!(propValue instanceof Immutable.Map)) {
      return;
    }
    if (propValue.get('component')) {
      const component = utils.string.trim(propValue.get('component'));
      const template = templateFactory.getTemplate(component);
      if (template) {
        templates.unshift([ path, template ]);
      }
    }

    propValue.keySeq().toArray().forEach(p => {
      const v = propValue.get(p);
      if (v instanceof Immutable.List) {
        v.forEach((c, index) => {
          const currentPath = path ? `${path}.${p}.${index}` : `${p}.${index}`;
          parseProp(c, currentPath);
        });
      } else {
        const currentPath = path ? `${path}.${p}` : p;
        parseProp(v, currentPath);
      }
    });
  };

  parseProp(meta, '');

  templates.forEach(t => {
    const seg = t[0].split('.');
    const curr = seg === '' ? fromJS(t[1](meta.toJS())) : fromJS(t[1](meta.getIn(seg).toJS()));

    if (
      (curr instanceof Immutable.List) &&
            (meta.getIn(seg.slice(0, seg.length - 1)) instanceof Immutable.List)
    ) {
      let index = seg.pop();
      meta = meta.updateIn(seg, ll => {
        ll = ll.remove(index);

        curr.forEach(o => {
          ll = ll.insert(index, o);
          index++;
        });
        return ll;
      });
    } else if (seg === '') {
      meta = curr;
    } else {
      meta = meta.setIn(seg, curr);
    }
  });
  return meta;
}

/*
function parseMetaTemplate1(meta) {
  const templates = [];

  const parseProp = (propValue, path) => {
    if (!(propValue instanceof Immutable.Map)) {
      return;
    }
    if (propValue.get('component')) {
      const component = utils.string.trim(propValue.get('component'));
      const template = templateFactory.getTemplate(component);
      if (template) {

        templates.unshift([ path, fromJS(template(propValue.toJS())) ]);
        return;
      }

    }

    propValue.keySeq().toArray().forEach(p => {
      const v = propValue.get(p);
      if (v instanceof Immutable.List) {
        v.forEach((c, index) => {
          const currentPath = path ? `${path}.${p}.${index}` : `${p}.${index}`;
          parseProp(c, currentPath);
        });
      } else {
        const currentPath = path ? `${path}.${p}` : p;
        parseProp(v, currentPath);
      }
    });
  };
  parseProp(meta, '');
  templates.forEach(t => {
    const seg = t[0].split('.');
    if (
      (t[1] instanceof Immutable.List) &&
            (meta.getIn(seg.slice(0, seg.length - 1)) instanceof Immutable.List)
    ) {
      let index = seg.pop();
      meta = meta.updateIn(seg, ll => {
        ll = ll.remove(index);

        t[1].forEach(o => {
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
}*/

function parseMeta(meta, appName) {
  let map = Map();
  const parseProp = (propValue, parentPath, parentRealPath) => {
    if (!(propValue instanceof Immutable.Map)) {
      return;
    }
    /* if (propValue.get('name') && propValue.get('component')) {
            const name = utils.string.trim(propValue.get('name'))
            parentPath = parentPath ? `${parentPath}.${name}` : name
            ret = ret.set(parentPath, parentRealPath)
        }
        else*/
    if (propValue.get('component') || propValue.get('_for') || propValue.get('_function')) {
      const name = uid(appName) + '';
      meta = meta.setIn(parentRealPath ? parentRealPath.split('.').concat('_name') : [ '_name' ], name);
      parentPath = parentPath ? `${parentPath}.${name}` : name;
      map = map.set(parentPath, parentRealPath);
    }

    propValue.keySeq().toArray().forEach(p => {
      const v = propValue.get(p),
        currentPath = parentPath ? `${parentPath}.${p}` : p;
      if (v instanceof Immutable.List) {
        v.forEach((c, index) => {
          const currentRealPath = parentRealPath ? `${parentRealPath}.${p}.${index}` : `${p}.${index}`;
          if (c && c.get && (c.get('component') || c.get('_for') || c.get('_function'))) {
            parseProp(c, `${currentPath}`, currentRealPath);
          } else {
            parseProp(c, `${currentPath}.${index}`, currentRealPath);
          }
        });
      } else {
        const currentRealPath = parentRealPath ? `${parentRealPath}.${p}` : p;
        parseProp(v, `${currentPath}`, currentRealPath);
      }
    });
  };

  parseProp(meta, '', '');
  return { meta, map };
}
