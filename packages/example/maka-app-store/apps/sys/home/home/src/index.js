import pkgJson from '../package.json'
import { actionMixin, load } from 'maka'
import './style.less'

const name = pkgJson.name

const state = {
    data: {
    }
}

@actionMixin('base')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }
}

const view = {
    component: 'div',
    className: 'home',
    children: [{
        component: 'antd.Row',
        gutter: 10,
        children: [{
            component: 'antd.Col',
            span: 24,
            children: {
                component: 'antd.Card',
                title: '快捷功能',
                children: {
                    component: 'AppLoader',
                    appName: 'home-shortcut'
                }
            }
        }]
    }, {
        component: 'antd.Row',
        gutter: 10,
        children: [{
            component: 'antd.Col',
            style: { height: 350 },
            span: 12,
            children: [{
                component: 'antd.Card',
                title: '图表',
                children: {
                    component: 'AppLoader',
                    appName: 'home-chart'
                }
            }]
        }, {
            component: 'antd.Col',
            style: { height: 350 },
            span: 12,
            children: [{
                component: 'antd.Card',
                title: '代办',
                children: {
                    component: 'AppLoader',
                    appName: 'home-todo'
                }
            }]
        }]
    }]
}

async function beforeRegister() {
    await load(['template'])
}


export {
    name,
    state,
    action,
    view,
    beforeRegister
}