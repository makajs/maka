import pkgJson from '../package.json'
import { load, getComponent } from 'maka'
import view from './view'
import action from './action'
import state from './state'
import './style.less'

const name = pkgJson.name

async function beforeRegister() {
    await load(['antd', 'action', 'i18n', 'template'])
}

function viewDecorator() {
    return getComponent('antd.Form').create()
}

export {
    name,
    state,
    action,
    view,
    viewDecorator,
    beforeRegister
}