import pkgJson from '../package.json'
import { load, actionMixin, registerComponent, registerAction, getComponent } from 'maka'
import * as components from './component'
import './style.less'
import classnames from 'classnames'

const name = pkgJson.name

registerAction('classnames', classnames, true)

const state = {
    data: {}
}

@actionMixin('base')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }
}

const view = {
    component: 'div',
    className: 'custom-component',
    children: [{
        component: 'ctrl.InputNumber'
    }]
}

async function beforeRegister(){
    await load('antd')
    registerComponent('ctrl', components)
    registerAction('modal', components.Modal, true)
    registerAction('message', getComponent('antd.message'), true)
    registerAction('notification', getComponent('antd.notification'), true)
}

export {
    name,
    state,
    action,
    view,
    beforeRegister
}