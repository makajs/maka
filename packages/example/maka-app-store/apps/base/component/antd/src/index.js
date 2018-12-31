import React from 'react'
import { actionMixin, registerComponent } from 'maka'
import pkgJson from '../package.json'
import * as antd from 'antd/lib'
import './style.less'

const name = pkgJson.name

registerComponent('antd', antd)

const view = {
    component: 'div',
    style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 'auto',
        width: 300,
        height: 200
    },
    children: [{
        component: 'h1',
        children: 'ant design component'
    }, {
        component: 'antd.Button',
        children: 'Button'
    }, {
        component: 'antd.Input'
    }, {
        component: 'antd.DatePicker'
    }, {
        component: 'antd.Checkbox'
    }, {
        component: 'antd.DatePicker.MonthPicker',
        disabled: true,
    }]
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