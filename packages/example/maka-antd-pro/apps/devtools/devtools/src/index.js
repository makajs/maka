import pkgJson from '../package.json'
import { actionMixin, load, getComponent } from 'maka'
import './style.less'

const name = pkgJson.name

const state = {
    data: {
        tools: [{
            key: 'state',
            title: 'State',
            appName: 'devtools-state'
        }, {
            key: 'app-view',
            title: 'App视图&状态',
            appName: 'devtools-app'
        },{
            key: 'webapi',
            title: 'Webapi',
            appName: 'devtools-webapi'
        },{
            key: 'mock-data',
            title: 'Mock数据',
            appName: 'devtools-mock'
        }, {
            key: 'component',
            title: 'component文档',
            appName: 'devtools-component'
        }, {
            key: 'template',
            title: 'template文档',
            appName: 'devtools-template'
        }, {
            key: 'action',
            title: 'action文档',
            appName: 'devtools-action'
        }]
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
    className: 'devtools',
    children: {
        component: 'antd.Tabs',
        size: 'small',
        children: {
            _for: 'item in data.tools',
            component: 'antd.Tabs.TabPane',
            key: '{{item.key}}',
            tab: '{{item.title}}',
            children: {
                component: 'AppLoader',
                appName: '{{item.appName}}'
            }
        }
    }
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