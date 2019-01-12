import pkgJson from '../package.json'
import { actionMixin, load, getComponent, registerComponent } from 'maka'
import './style.less'
import view from './view'
import state from './state'
import action from './action'

const name = pkgJson.name

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