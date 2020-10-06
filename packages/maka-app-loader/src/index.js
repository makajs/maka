import AppLoader from './appLoader';
import appMiddleware from './appMiddleware';
import reducer from './reducer';
import config from './config';
import start from './start';
import appFactory from './appFactory';
import pluginFactory from './pluginFactory';
import init from './init';
import loadApp from './loadApp';
import removeApp from './removeApp';

const { registerApp, registerApps, getApp, getApps, existsApp } = appFactory;
const { registerPlugin, getPluginsByAppName, existsPlugin, removePlugin } = pluginFactory;

export default {
  AppLoader,
  appMiddleware,
  reducer,
  config,
  init,
  start,
  registerApp,
  registerApps,
  getApp,
  getApps,
  existsApp,
  loadApp,
  removeApp,
  appFactory,
  registerPlugin,
  getPluginsByAppName,
  existsPlugin,
  removePlugin,
  pluginFactory,
};

export {
  AppLoader,
  appMiddleware,
  reducer,
  config,
  init,
  start,
  registerApp,
  registerApps,
  getApp,
  getApps,
  existsApp,
  loadApp,
  removeApp,
  appFactory,
  registerPlugin,
  getPluginsByAppName,
  existsPlugin,
  removePlugin,
  pluginFactory,
};
