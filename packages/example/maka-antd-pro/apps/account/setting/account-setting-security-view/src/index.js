import pkgJson from '../package.json'
import { actionMixin, load, getComponent, registerComponent } from 'maka'
import './style.less'
import view from './view'

const name = pkgJson.name


const state = {
    data: {
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