import React from 'react'
import { actionMixin, registerComponent, setHoc } from 'maka'
import pkgJson from './package.json'
import * as antd from 'antd/lib';
import zhCN from 'antd/lib/locale-provider/zh_CN'
import './style.less'

const name = pkgJson.name

setHoc((props) => {
    var {children, ...other} = props
    children = React.cloneElement(children, other)
    return (<antd.LocaleProvider locale={zhCN} {...props}>
       {children}
    </antd.LocaleProvider>)
})

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