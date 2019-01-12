import pkgJson from '../package.json'
import { load } from 'maka'

import view from './view'
import state from './state'
import action from './action'

import './style.less'
import './img/theme-style-dark.svg'
import './img/theme-style-light.svg'

import './img/nav-sidermenu.svg'
import './img/nav-topmenu.svg'

const name = pkgJson.name



/*
const view = {
    component: 'div',
    className: 'option',
    children: [{
        component: 'antd.Button', className: 'button-bluesky', children: 'test', _visible: false
    }, {
        component: 'div',
        children: [{
            component: 'h3',
            children: `{{$i18n('app.setting.pagestyle')}}`
        }, {
            component: 'div',
            className: 'option-theme-style',
            children: {
                _for: 'item in data.styles',
                component: 'div',
                onClick: `{{$styleChange(item)}}`,
                children: [{
                    component: 'img',
                    src: '{{item.img}}',
                }, {
                    component: 'antd.Icon',
                    type: 'check',
                    _visible: '{{item.key === data.theme}}'
                }]
            }
        }]
    }, {
        component: 'h3',
        children: `{{$i18n('app.setting.themecolor')}}`
    }, {
        component: 'div',
        className: 'option-theme-color',
        children: {
            _for: 'item in data.primaryColors',
            component: 'div',
            onClick: `{{$primaryColorChange(item)}}`,
            style: { backgroundColor: '{{item.color}}' },
            children: {
                component: 'antd.Icon',
                type: 'check',
                _visible: '{{item.key === data.activePrimaryColor}}'
            }
        }
    }]
}
*/

async function beforeRegister() {
    await load(['i18n', 'custom-component', 'template', 'webapi'])
}

export {
    name,
    state,
    action,
    view,
    beforeRegister
}