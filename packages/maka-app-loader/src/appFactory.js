import config from './config'

import { getGlobal } from '@makajs/utils'
var globalObj = getGlobal()

class appFactory {
    constructor() {
        this.apps = {}
        globalObj.__maka_apps__ = this.apps
    }

    registerApp = (name, app) => {
        if (this.apps[name]) {
            console.log(`Already registered this app，name: ${name},please ignore`)
            return
        }

        this.apps[name] = app
    }

    registerApps = (apps) => {
        Object.assign(this.apps, apps)
    }

    existsApp = (name) => {
        name = name.replace(/(\.js)|(\.min\.js)/, '')
        return !!this.apps[name]
    }

    getApp = (name) => {
        name = name.replace(/(\.js)|(\.min\.js)/, '')
        return this.apps[name]
    }

    getApps = () => {
        return this.apps
    }

    removeApp = (name) => {
        delete this.apps[name]
    }


}

const appFactoryInstance = new appFactory()

export default appFactoryInstance