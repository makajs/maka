import { getGlobal } from '@makajs/utils';
const globalObj = getGlobal();
class pluginFactory {
  constructor() {
    this.plugins = [];
    globalObj.__maka_plugins__ = this.plugins;
  }

    registerPlugin = (name, forApp) => {
      if (!name || !forApp) return;

      if (this.plugins.findIndex(o => o.name === name) !== -1) {
        console.log(`Already registered this plugin，name: ${name},please ignore`);
        return;
      }

      let regExp;
      if (/^\/[^\/]+\//.test(forApp)) {
        regExp = new RegExp(forApp);
      }

      this.plugins.push({
        name, forApp, regExp,
      });
    }

    removePlugin = name => {
      if (!name) return;

      const index = this.plugins.findIndex(o => o.name === name);
      if (index !== -1) { this.plugins.splice(index, 1); }
    }

    existsPlugin = forApp => {
      if (!forApp) return;
      return this.plugins.findIndex(o => o.forApp === forApp || (o.regExp && o.regExp.test(forApp))) !== -1;
    }

    filter = appName => {
      if (!appName) return [];

      return this.plugins.filter(o => o.forApp === appName || (o.regExp && o.regExp.test(o.forApp)));
    }

    getPluginNames = appName => {
      return this.filter(appName).map(o => o.name);
    }
}

const pluginFactoryInstance = new pluginFactory();

export default pluginFactoryInstance;
