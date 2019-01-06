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
            xs: 24,
            sm: 12,
            md: 12,
            lg: 12,
            xl: 6,
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
            xs: 24,
            sm: 12,
            md: 12,
            lg: 12,
            xl: 6,
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
            xs: 24,
            sm: 12,
            md: 12,
            lg: 12,
            xl: 6,
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
            xs: 24,
            sm: 12,
            md: 12,
            lg: 12,
            xl: 6,
            children: {
                component: 'antd.Card',
                children: {
                    component: 'AppLoader',
                    appName: 'dashboard-market'
                }
            }
        }]
    }, {
        component: 'antd.Row',
        gutter: 10,
        children: {
            component: 'antd.Col',
            span: 24,
            children: {
                component: 'antd.Card',
                children: {
                    component: 'AppLoader',
                    appName: 'dashboard-sale-trend'
                }
            }
        }
    }, {
        component: 'antd.Row',
        gutter: 10,
        children: [{
            component: 'antd.Col',
            style: { height: 380 },
            lg: 24,
            md: 24,
            sm: 24,
            xl: 12,
            xs: 24,
            children: {
                component: 'antd.Card',
                children: {
                    component: 'AppLoader',
                    appName: 'dashboard-hot-search'
                }
            }
        }, {
            component: 'antd.Col',
            style: { height: 380 },
            lg: 24,
            md: 24,
            sm: 24,
            xl: 12,
            xs: 24,
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