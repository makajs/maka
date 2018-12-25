import pkgJson from './package.json'
import { actionMixin, registerAction, fetch } from 'maka'
import './style.less'
import './mock'

const name = pkgJson.name

registerAction('webapi', {
    logout:  (option) => fetch.post('/api/logout', option),
    appstore: {
        query: (option) => fetch.post('/api/appstore/query', option),
        install: (option) => fetch.post('/api/appstore/install', option),
        uninstall: (option) => fetch.post('/api/appstore/uninstall', option)
    },
    plugin: {
        query: (option) => fetch.post('/api/plugin/query', option),
        install: (option) => fetch.post('/api/plugin/install', option),
        uninstall: (option) => fetch.post('/api/plugin/uninstall', option)
    },
    portal: {
        getMenu: (option) => fetch.post('/api/portal/getMenu', option)
    }
}, true)


const state = {
    data: {
    }
}

@actionMixin('base')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }
}

const view = {
    component: 'div',
}

export {
    name,
    state,
    action,
    view
}