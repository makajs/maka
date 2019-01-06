import pkgJson from '../package.json'
import { load } from 'maka'
import './style/index.less'
import view from './view'
import action from './action'
import state from './state'
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