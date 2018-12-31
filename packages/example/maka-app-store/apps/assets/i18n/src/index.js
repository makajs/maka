import React from 'react'
import pkgJson from '../package.json'
import { load, actionMixin, setHoc, registerComponent, registerAction, getAction } from 'maka'
import merge from 'deepmerge'
import resx from './resx'
import Selector from './selector'
import HOC from './hoc'
import './style.less'

const name = pkgJson.name

var i18n = (code, option) => {
    if(!code) return ''
    var i18n = getAction('i18n')
    var paramNames, paramValues, fn
    if(option ){
        paramNames = Object.keys(option)
        if(paramNames && paramNames.length > 0){
            paramValues = paramNames.map(n=> option[n])
        }
    }
    if( paramNames && paramValues){
        fn = new Function(...paramNames, `return \`${i18n.resx[i18n.locale][code]}\`` )
        return fn(paramValues) || ''
    }
    else {
        fn = new Function(`return \`${i18n.resx[i18n.locale][code]}\`` )
        return fn() || ''
    }

}

i18n.locale = 'zh-CN'
i18n.resx = {}
i18n.register = (resx) => {
    i18n.resx = merge(i18n.resx, resx)
}

i18n.register(resx)

registerAction('i18n', i18n, true)

setHoc(HOC)

registerComponent('LocaleSelector', Selector)

const state = {
    data: {}
}

@actionMixin('base', 'i18n')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    zhCN = () => {
        this.i18n.change('zh-CN', this)
    }

    enUS = () => {
        this.i18n.change('en-US', this)
    }
}

const view = {
    component: 'div',
    className: 'i18n',
    children: [{
        component: 'antd.DatePicker',
    }, {
        component: 'div',
        children: `{{$i18n('test')}}`
    }, {
        component: 'div',
        children: `{{$i18n('test1',{param: 'ok'})}}`
    }, {
        component: 'button',
        children: 'zh-CN',
        onClick: '{{$zhCN}}'
    }, {
        component: 'button',
        children: 'en-US',
        onClick: '{{$enUS}}'
    }, {
        component: 'LocaleSelector'
    }]
}

async function beforeRegister() {
    await load(['antd'])
}

export {
    name,
    state,
    action,
    view,
    beforeRegister
}