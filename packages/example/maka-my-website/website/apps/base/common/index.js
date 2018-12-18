import React from 'react'
import pkgJson from './package.json'
import { actionMixin,  registerComponent, registerAction, registerTemplate, getComponent, createAppElement } from 'maka'
import './style.less'
import * as components from './component'
import moment from 'moment'
import lodash from 'lodash'

registerComponent('ctrl', components)


registerAction('moment', moment, true)
registerAction('lodash', lodash, true)
registerAction('modal', components.Modal, true)
registerAction('message', getComponent('antd.message'), true)
registerAction('notification', getComponent('antd.notification'), true)


const name = pkgJson.name

const state = {
    data: {
    }
}


@actionMixin('base', 'moment', 'lodash', 'modal', 'message', 'notification')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

}

const view = {
    component: 'div',
    className: 'common',
}


export {
    name,
    state,
    action,
    view
}