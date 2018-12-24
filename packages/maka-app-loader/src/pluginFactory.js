class pluginFactory {
    constructor() {
        this.plugins = {}
        this.appPlugins = {}
        window.__maka_plugins__ = this.plugins
        window.__maka_appPlugins__ = this.appPlugins
    }

    registerPlugin = (name, forApp) => {
        if (this.plugins[name]) {
            console.log(`Already registered this plugin，name: ${name},please ignore`)
            return
        }
        this.plugins[name] = forApp

        if(!this.appPlugins[forApp]){
            this.appPlugins[forApp] = []
        }
        this.appPlugins[forApp].push(name)
    }

    existsPlugin = (forApp) => {
        return !!this.appPlugins[forApp]
    }

    getPluginsByAppName = (appName) => {
        return this.appPlugins[appName]
    }
}

const pluginFactoryInstance = new pluginFactory()

export default pluginFactoryInstance