import { Map, fromJS } from 'immutable';
import wrapMapStateToProps from './wrapMapStateToProps';
import wrapMapDispatchToProps from './wrapMapDispatchToProps';
import createReduxConnector from './createReduxConnector';
import config from './config';
import { getGlobal } from '@makajs/utils';
const globalObj = getGlobal();

export default function(state = Map(), {
  type,
  payload,
}) {
  switch (type) {
    case '@@loadAppReal':
      return loadApp(state, payload);
    case '@@reduce':
      return reduce(state, payload);
    case '@@clearAppState':
      return clearAppState(state, payload);
    default:
      return state;
  }
}

function loadApp(state, {
  fullName,
  prevFullName,
  appInfo,
  component,
  action,
  reducer,
  pluginApps,
  plugins = [],
  forceLoad = false,
}) {
  if (!state.has(fullName) || forceLoad) {
    if (forceLoad
            && JSON.stringify(state.getIn([ fullName, '@@require', 'plugins' ]).toJS().sort()) === JSON.stringify(plugins.sort())
    ) {
      return state;
    }

    if (!forceLoad) { state = state.set(fullName, Map()); } else { state = state.set(fullName, Map({ prevData: state.getIn([ fullName, 'data' ]) })); }

    appInfo = { ...appInfo };

    if (appInfo && appInfo.view && typeof appInfo.view === 'function') {
      component = config.current.componentWrapper()(appInfo.view);
    }

    if (pluginApps && pluginApps.length > 0) {
      for (let i = 0; i < pluginApps.length; i++) {
        const plugin = pluginApps[i];
        if (plugin.pluginApi && plugin.pluginApi.afterState) { appInfo.state = plugin.pluginApi.afterState(fromJS(appInfo.state).toJS()); }

        if (plugin.pluginApi && plugin.pluginApi.afterView) { appInfo.view = plugin.pluginApi.afterView(fromJS(appInfo.view).toJS()); }
      }
    }

    let actionInstance = typeof action === 'function' ? action({ appInfo, fullName, plugins }) : config.current.defaultAction({ appInfo, fullName, plugins });
    let actionInternal = actionInstance.getDirectFuns();
    if (pluginApps && pluginApps.length > 0) {
      pluginApps.forEach(plugin => {
        if (plugin.pluginApi && plugin.pluginApi.afterAction) { actionInternal = plugin.pluginApi.afterAction(actionInternal); }
      });
      actionInstance = {
        ...actionInstance,
        getDirectFuns: () => actionInternal,
      };
    }

    const reducerInstance = typeof reducer === 'function' ? reducer({ appInfo, fullName }) : config.current.defaultReducer({ appInfo, fullName });
    const mapStateToProps = wrapMapStateToProps(fullName);
    const mapDispatchToProps = wrapMapDispatchToProps(fullName, actionInstance, reducerInstance);
    const container = createReduxConnector(
      component || (appInfo.viewDecorator && appInfo.viewDecorator()(config.current.defaultComponent)) || config.current.defaultComponent,
      mapStateToProps,
      mapDispatchToProps,
      (stateProps, dispatchProps, ownProps) => {
        return { ...ownProps, ...stateProps, ...dispatchProps };
      }, {
        // withRef: true,
        pure: true,
      }
    );

    state = state.setIn([ fullName, '@@require' ], Map({
      fullName,
      appInfo,
      component,
      action: actionInstance,
      reducer: reducerInstance,
      container,
      mapStateToProps,
      mapDispatchToProps,
      plugins: fromJS(plugins || []),
    }));
  }

  if (prevFullName && prevFullName !== fullName) {
    state = clearAppState(state, { fullName: prevFullName });
  }

  return state;
}

function clearAppState(state, {
  fullName,
}) {

  if (!state.has(fullName)) { return state; }

  const ks = [];
  state.get(fullName).mapKeys(k => {
    if (k !== '@@require') { ks.push(k); }
    return k;
  });

  ks.forEach(k => {
    if (k) { state = state.update(fullName, x => x.remove(k)); }
  });

  return state;
}


function reduce(state, {
  reducer,
  type,
  payload,
  fullName,
  injectFunsForReducer,
}) {

  const startDate = new Date();
  const oldState = state.get(fullName);
  let newState = reducer[type].apply(this, [ oldState ].concat(payload));

  if (typeof newState === 'function') {
    newState = newState(injectFunsForReducer);
  }

  if (globalObj.__maka_record_action__ === true) {
    globalObj.__maka_actions__ = globalObj.__maka_actions__ || [];
    const endDate = new Date();
    globalObj.__maka_actions__.unshift({
      appFullName: fullName,
      reduceMethod: type,
      payload,
      oldState,
      newState,
      startTime: startDate.getHours() + ':' + startDate.getMinutes() + ':' + startDate.getSeconds() + '.' + startDate.getMilliseconds(),
      endTime: endDate.getHours() + ':' + endDate.getMinutes() + ':' + endDate.getSeconds() + '.' + endDate.getMilliseconds(),
      elapsedTime: Math.abs((startDate.getTime() - endDate.getTime())), // (1000*60*60*24)
    });
  } else {
    if (globalObj.__maka_actions__) { globalObj.__maka_actions__ = undefined; }
  }

  return state.set(fullName, newState);
}
