import React from 'react';
import componentFactory from './componentFactory';
import utils from '@makajs/utils';
import config from './config';

function parseMetaProps(meta, props, data) {
  const ret = {};

  Object.keys(meta).forEach(key => {
    const v = meta[key],
      t = typeof v;

    if (v instanceof Array) {
      ret[key] = [];

      let i,
        c;

      for (i = 0; c = v[i++];) { // eslint-disable-line
        if (c instanceof Array) {
          ret[key] = c;
        } else {
          const mc = metaToComponent(c, props, data);
          if (mc instanceof Array) { ret[key] = ret[key].concat(mc); } else { ret[key].push(mc); }
        }
      }
    } else if (t === 'object') {
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

/*
const toFunction = memoize(v => {
  return new Function(v);
});
*/

function metaToComponent(meta, props, data) {
  if (!meta) { return meta; }

  const metaType = typeof meta;

  if (metaType === 'object' && meta.$$typeof) {
    return meta;
  } else if (metaType === 'object' && meta._isAMomentObject) {
    return meta;
  } else if (metaType === 'object' && meta instanceof Date) {
    return meta;
  } else if (metaType === 'object' && meta instanceof Promise) {
    return meta;
  } else if (metaType === 'object') {
    if (meta.component || meta._for || meta._function) {

      if (meta._visible === false) { return null; }

      if (typeof meta._visible === 'function' && meta._visible() === false) { return null; }

      if (typeof meta.component === 'function') {
        meta.component = meta.component();
      }

      // _for: 'data.list' or 'data.list[_index].sub'
      if (meta._for) {
        const _for = meta._for,
          paraNames = [ 'data', '$props$' ],
          paraValues = [ data, props ];

        if (meta._vars) {
          paraNames.push('_vars');
          paraValues.push(meta._vars);
        }

        if (meta._extParas) {
          const extParaKeys = Object.keys(meta._extParas);
          if (extParaKeys && extParaKeys.length > 0) {
            extParaKeys.forEach(k => {
              paraNames.push(k);
              paraValues.push(meta._extParas[k]);
            });
          }
        }

        const tmp = _for.replace(/\b(in)\b/, '#').split('#'),
          dsPath = utils.string.trim(tmp[1]),
          extParaNames = tmp[0].replace('(', '').replace(')', '').split(',');
        let express = `${dsPath.replace(/\$/g, '$props$.')}`; //eslint-disable-line

        if (config.current.transformer) {
          express = config.current.transformer(express);
        }

        const items = (new Function(...paraNames, `return ${dsPath.replace(/\$/g, '$props$.')}`))
          .apply(null, paraValues);

        if (!items || items.length === 0) return;
        return items.map((o, index) => {
          let _vars = meta._vars;
          _vars = !_vars ? index + '' : ',' + index;
          // let _vars = meta['_vars'] || []
          // _vars.push({ _index: index, _item: o })

          const _extParas = meta._extParas || {};
          _extParas[utils.string.trim(extParaNames[0])] = o;
          extParaNames.length > 1 && (_extParas[utils.string.trim(extParaNames[1])] = index);

          const childMeta = props.base.gm(meta.path, undefined, data, _vars, _extParas);
          delete childMeta._for;
          return metaToComponent(childMeta, props, data);
        });
      }

      // _function: '(arg1,arg2)
      if (meta._function !== undefined) {
        const _function = meta._function.replace('(', '').replace(')', '');
        return (...args) => {
          const _extParas = meta._extParas || {};

          _function.split(',').forEach((paraName, index) => {
            _extParas[utils.string.trim(paraName)] = args[index];
          });

          const childMeta = props.base.gm(meta.path, undefined, data, meta._vars, _extParas);
          childMeta._function = undefined;

          if (childMeta._firstReturn) {
            return childMeta._firstReturn;
          }

          return metaToComponent(childMeta, props, data);

        };
      }

      const _decorator = meta._decorator;

      const componentName = meta.component,
        component = componentFactory.getComponent(componentName);


      const allProps = parseMetaProps(meta, props, data);
      if (!allProps.key) {
        // let strVars = (meta._vars && meta._vars.map(o => o._index).join(',')) || ''
        const strVars = meta._vars || '';
        allProps.key = strVars ? meta.path + ',' + strVars : meta.path;

      }

      delete allProps.component;
      delete allProps._name;
      delete allProps.path;
      delete allProps._decorator;


      // allProps = omit(allProps, ['clearAppState', 'component', 'name', 'getDirectFuns', 'initView', 'payload'])
      if (componentName === 'AppLoader') {
        const propKeys = Object.keys(props);
        let i,
          key;

        for (i = 0; key = propKeys[i++];) { //eslint-disable-line
          if (allProps[key] === undefined) {
            allProps[key] = props[key];
          }
        }

        // Remove attributes that are not required by some components
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

        if (!allProps.appName) { return null; }

        /* if (allProps._notRender === true && !existsApp(allProps.appName)) {
                    return null
                }*/

        allProps.key = allProps.appName;
        allProps.name = allProps.appName;
        return React.createElement(component, allProps);
      }

      if (_decorator) { return _decorator(React.createElement(component, allProps)); }
      return React.createElement(component, allProps);
    }

    return parseMetaProps(meta, props, data);

  }

  return meta;

}

const MonkeyKing = props => {
  const { base } = props;
  const data = base.gs();
  if (!data) { return null; }
  return metaToComponent(base.gm(undefined, undefined, data), props, data);
};

export default MonkeyKing;
