import pkgJson from '../package.json'
import { actionMixin,load } from 'maka'
import './style.less'
import view from './view'

const name = pkgJson.name
const menuMap = {
    base: {
        id: 'app.settings.menuMap.basic',
        defaultMessage: 'Basic Settings'
    },
    security: {
        id: 'app.settings.menuMap.security',
        defaultMessage: 'Security Settings'
    },
    binding: {
        id: 'app.settings.menuMap.binding',
        defaultMessage: 'Account Binding'
    },
    notification: {
        id: 'app.settings.menuMap.notification',
        defaultMessage: 'New Message Notification'
    }
}
const state = {
    data: {
        menuMap,
        mode: 'inline',
        selectKey: 'base',
    }
}

@actionMixin('base', 'i18n')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }
}

async function beforeRegister() {
    await load(['antd', 'action', 'i18n'])
}


export {
    name,
    state,
    action,
    view,
    beforeRegister
}