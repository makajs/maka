import React from 'react'
import { actionMixin, registerComponent } from 'maka'
import pkgJson from './package.json'
import * as antd from 'antd-mobile/lib';
import './style.less'

const name = pkgJson.name


registerComponent('antd', antd)

const view = {
    component: 'antd.Button',
    type: 'primary',
    children: 'Primary'
   
}

const state = { data: {} }

@actionMixin('base')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }
}

export {
    name,
    view,
    state,
    action
}