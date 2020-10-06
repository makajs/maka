import MetaAction from './action';
import actionFactory from './actionFactory';

const isPromise = obj => {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
};

const functionWrapper = (fn, base) => {

  const wrapper = function(...args) {

    const that = base.getAllAction() || this;

    const beforeRet = fn._before && fn._before.apply(that, args);

    if (beforeRet === false || isPromise(beforeRet)) { //eslint-disable-line
      // 暂时不处理
    } else if (typeof beforeRet === 'function') {
      return beforeRet;
    } else {
      const ret = fn.apply(that, args);
      if (isPromise(ret)) {
        return new Promise((resolve, reject) => {
          ret.then(realRet => {
            if (fn._after) {
              realRet = fn._after.apply(that, (args || []).concat(ret));
            }
            resolve(realRet);
          }).catch(e => reject(e));
        });
      }

      if (fn._after) {
        return fn._after.apply(that, (args || []).concat(ret));
      }
      return ret;

    }
  };

  wrapper.before = beforeFn => {
    fn._before = beforeFn;
  };

  wrapper.after = afterFn => {
    fn._after = afterFn;
  };

  wrapper.real = fn;
  return wrapper;
};

export default function actionMixin(...mixins) {
  return target => option => {
    const mixinInstances = {};
    const base = new MetaAction(option);

    Object.keys(base).forEach(key => {
      if (typeof (base[key]) === 'function' && key !== 'getAllAction') {
        base[key] = functionWrapper(base[key], base);
      }
    });

    mixinInstances.base = base;

    if (mixins && mixins.length > 0) {
      mixins.forEach(m => {
        if (m !== 'base') {
          let actCls,
            act;
          if (typeof m === 'string') {
            actCls = actionFactory.getAction(m);
            if (typeof actCls === 'object') {
              mixinInstances[m] = actCls;
            } else if (typeof actCls === 'function') {
              if (actCls._isFunction) {
                mixinInstances[m] = actCls;
              } else {
                act = new actCls({ ...option, mixins: mixinInstances });
                if (act) {
                  mixinInstances[m] = act;
                }
              }
            }
          } else if (typeof m === 'object' && m.name) {
            actCls = actionFactory.getAction(m.name);
            if (typeof actCls === 'object') {
              mixinInstances[m] = actCls;
            } else if (typeof actCls === 'function') {
              if (actCls._isFunction) {
                mixinInstances[m] = actCls;
              } else {
                act = new actCls({ ...option, ...m.option, mixins: mixinInstances });
                if (act) {
                  mixinInstances[m.name] = act;
                }
              }
            }
          }
        }
      });
    }

    const curr = new target({ ...option, mixins: mixinInstances });

    Object.keys(curr).forEach(key => {
      if (typeof (curr[key]) === 'function') {
        curr[key] = functionWrapper(curr[key], base);
      }
    });


    const ret = curr;

    Object.keys(mixinInstances).forEach(k => { ret[k] = mixinInstances[k]; });

    const retWrapper = {
      getDirectFuns: () => ret,
    };

    retWrapper.initView = ret.base.initView;

    base.config({ metaHandlers: ret });

    return retWrapper;
  };
}
