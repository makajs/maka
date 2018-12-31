import pkgJson from '../package.json'
import { actionMixin, load, removeApp } from 'maka'
import './style.less'
import './img/theme-style-dark.svg'
import './img/theme-style-light.svg'

const name = pkgJson.name

const state = {
    data: {
    }
}


@actionMixin('base', 'webapi', 'message')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    onInit = () => {
        this.load()
    }

    load = async () => {
        var resp = await this.webapi.option.query({})
        this.base.setState('data', resp)
    }

    styleChange = (item) => async () => {
        var resp = await this.webapi.option.update({
            activeStyle: item.key
        })
        this.base.setState('data', resp)

        this.component.props.onPortalReload && this.component.props.onPortalReload()
        this.message.success('修改风格成功')
    }



    primaryColorChange = (item) => async () => {
        var data = this.base.getState()
        var old = data.primaryColors.find(o => o.key == data.activePrimaryColor)
        removeApp(old.appName)
        var resp = await this.webapi.option.update({
            activePrimaryColor: item.key
        })
        await load(item.appName)
        this.base.setState('data', resp)
        this.message.success('修改主题色成功')
    }
}

const view = {
    component: 'div',
    className: 'sys-option',
    children: [{
        component: 'antd.Button', className: 'button-bluesky', children: 'test', _visible: false
    }, {
        component: 'div',
        children: [{
            component: 'h3',
            children: '整体风格'
        }, {
            component: 'div',
            className: 'sys-option-theme-style',
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
                    _visible: '{{item.key === data.activeStyle}}'
                }]
            }
        }]
    }, {
        component: 'h3',
        children: '主题色'
    }, {
        component: 'div',
        className: 'sys-option-theme-color',
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