import React from 'react'
import pkgJson from './package.json'
import lodash from 'lodash'
import moment from 'moment'
import { actionMixin, registerAction, registerComponent, getComponent, getAction } from 'maka'
import * as sticky from 'react-sticky/lib';
import * as components from './component'
import * as actions from './action'

import './style.less'

const name = pkgJson.name

registerComponent('sticky', sticky)
registerComponent('ctrl', components)

registerAction('moment', moment, true)
registerAction('lodash', lodash, true)
registerAction('toast', getComponent('antd.Toast'), true)
registerAction('modal', components.Modal, true)

Object.keys(actions).forEach(key => {
    registerAction(key, actions[key], key == 'numberHelper')
})


const state = {
    data: {
    }
}

@actionMixin('base', 'toast', 'modal')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    success = () => {
        this.toast.success('success', 1)
    }

    confirm = async () => {
        console.log(await this.modal.confirm({title: '确定', content: '确定?'}))
    }

    baseModal = async () => {
        var ret = await this.modal.show({
            title: 'few',
            children: (<div >modal</div>)
        })

        console.log(ret)
    }

    popupModal = async () => {
        var List  =getComponent('antd.List')
        var ret = await this.modal.show({
            title: 'few',
            popup: true,
            animationType:"slide-up",
            children: (<List>
                {['股票名称', '股票代码', '买入价格'].map((i, index) => (
                    <List.Item key={index}>{i}</List.Item>
                ))}
            </List>)
        })
        console.log(ret)

    }
}

const view = {
    component: 'div',
    className: 'common',
    children: [{
        component: 'antd.Button',
        children: 'success',
        onClick: '{{$success}}'
    },{
        component: 'antd.WhiteSpace'
    },{
        component: 'antd.Button',
        children: 'confirm',
        onClick: '{{$confirm}}'
    },{
        component: 'antd.WhiteSpace'
    }, {
        component: 'antd.Button',
        children: 'base modal',
        onClick: '{{$baseModal}}'
    },{
        component: 'antd.WhiteSpace'
    }, {
        component: 'antd.Button',
        children: 'popup modal',
        onClick: '{{$popupModal}}'
    }]
}

export {
    name,
    state,
    action,
    view
}