import { createStore, applyMiddleware } from 'redux';
import { Map } from 'immutable';
import appMiddleware from './appMiddleware';
import reducer from './reducer';
import config from './config';
import appFactory from './appFactory';
import { getGlobal } from '@makajs/utils';
const globalObj = getGlobal();

export default function init(option) {
  config(option);

  const currentConfig = config.current;

  if (currentConfig.apps) { appFactory.registerApps(currentConfig.apps); }

  let mw = [ appMiddleware(currentConfig.actionInjections || {}, currentConfig.reducerInjections || {}) ];

  if (currentConfig.middlewares) { mw = mw.concat(currentConfig.middlewares); }

  const store = createStore(reducer, Map(), applyMiddleware(...mw));

  globalObj.reduxStore = store;
  globalObj.__maka_store__ = store;

  return store;
}
