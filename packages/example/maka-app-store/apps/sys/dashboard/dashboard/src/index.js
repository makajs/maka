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
    className: 'dashboard',
    children: [{
        component: 'antd.Row',
        gutter: 10,
        children: [{
            component: 'antd.Col',
            style: { height: 230 },
            span: 6,
            children: {
                component: 'antd.Card',
                children: {
                    component: 'AppLoader',
                    appName: 'dashboard-sale'
                }
            }
        }, {
            component: 'antd.Col',
            style: { height: 230 },
            span: 6,
            children: {
                component: 'antd.Card',
                children: {
                    component: 'AppLoader',
                    appName: 'dashboard-visit'
                }
            }
        }, {
            component: 'antd.Col',
            style: { height: 230 },
            span: 6,
            children: {
                component: 'antd.Card',
                children: {
                    component: 'AppLoader',
                    appName: 'dashboard-trade'
                }
            }
        }, {
            component: 'antd.Col',
            style: { height: 230 },
            span: 6,
            children: {
                component: 'antd.Card',
                children: {
                    component: 'AppLoader',
                    appName: 'dashboard-market'
                }
            }
        }]
    },{
        component: 'antd.Row',
        gutter: 10,
        children:{
            component: 'antd.Col',
            style: { height: 380 },
            span: 24,
            children: {
                component: 'antd.Card',
                children: {
                    component: 'AppLoader',
                    appName: 'dashboard-sale-trend'
                }
            }
        }
    },{
        component: 'antd.Row',
        gutter: 10,
        children:[{
            component: 'antd.Col',
            style: { height: 380 },
            span: 12,
            children: {
                component: 'antd.Card',
                children: {
                    component: 'AppLoader',
                    appName: 'dashboard-hot-search'
                }
            }
        },{
            component: 'antd.Col',
            style: { height: 380 },
            span: 12,
            children: {
                component: 'antd.Card',
                children: {
                    component: 'AppLoader',
                    appName: 'dashboard-sale-proportion'
                }
            }
        }]
    }]
}


async function beforeRegister(){
    await load(['template'])
}

export {
    name,
    state,
    action,
    view,
    beforeRegister
}