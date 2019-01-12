import pkgJson from '../package.json'
import { load, getComponent, registerComponent } from 'maka'
import './style.less'
import view from './view'
import state from './state'
import action from './action'
import GeographicView from './component/GeographicView'

const name = pkgJson.name

registerComponent('GeographicView', GeographicView)


async function beforeRegister() {
    await load(['antd', 'action', 'i18n'])
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