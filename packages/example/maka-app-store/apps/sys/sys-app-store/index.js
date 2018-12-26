import pkgJson from './package.json'
import { actionMixin, registerPlugin, removePlugin, load } from 'maka'
import './style.less'

const name = pkgJson.name

const state = {
    data: {
        content: 'hello ',
        input: ''
    }
}

@actionMixin('base', 'webapi')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }
    onInit = () => {
       this.load()
    }

    load = async () => {
        var apps = await this.webapi.appstore.query({})
        var plugins = await this.webapi.plugin.query({})
        this.base.setState({
            'data.apps': apps,
            'data.plugins': plugins
        })
    }

    installApp =  (id) => async () => {
        await this.webapi.appstore.install({id})
        this.load()
        this.component.props.onPortalReload && this.component.props.onPortalReload()
    }

    uninstallApp = (id) => async () => {
        await this.webapi.appstore.uninstall({id})
        this.load()
        this.component.props.onPortalReload && this.component.props.onPortalReload()
    }

    installPlugin = (item) => async () => {
        registerPlugin(item.appName,item.forApp)
        await this.webapi.plugin.install({id:item.id})
        this.load()
        this.component.props.onPortalReload && this.component.props.onPortalReload()
    }

    uninstallPlugin = (item) => async () => {
        removePlugin(item.appName, item.forApp)
        await this.webapi.plugin.uninstall({id:item.id})
        this.load()
        this.component.props.onPortalReload && this.component.props.onPortalReload()
    }
}

const view = {
    component: 'div',
    className: 'sys-app-store',
    children: [{
        component: 'antd.Row',
        gutter: 10,
        children: [{
            component: 'antd.Col',
            span: 24,
            children: {
                component: 'antd.Card',
                title: '应用',
                children: [{
                    component: 'div',
                    className: 'sys-app-store-app',
                    children: {
                        _for: 'item in data.apps',
                        component: 'div',
                        children: [{
                            component: 'div',
                            className: 'sys-app-store-app-content',
                            children: '{{item.title}}'
                        },{
                            component: 'a',
                            children: `{{item.isInstalled ? '卸载':'安装'}}`,
                            onClick: '{{item.isInstalled ? $uninstallApp(item.id) : $installApp(item.id)}}',
                        }]
                    }
                }]
            }
        }]
    },{
        component: 'antd.Row',
        gutter: 10,
        children: [{
            component: 'antd.Col',
            span: 24,
            children: {
                component: 'antd.Card',
                title: '插件',
                children: [{
                    component: 'div',
                    className: 'sys-app-store-app',
                    children: {
                        _for: 'item in data.plugins',
                        component: 'div',
                        children: [{
                            component: 'div',
                            className: 'sys-app-store-app-content',
                            children: '{{item.title}}'
                        },{
                            component: 'a',
                            children: `{{ item.isInstalled ? '卸载': '安装'}}`,
                            onClick: '{{item.isInstalled ? $uninstallPlugin(item) : $installPlugin(item)}}',
                        }]
                    }
                }]
            }
        }]
    }]
}

async function beforeRegister(){
    await load(['common', 'webapi'])
}


export {
    name,
    state,
    action,
    view,
    beforeRegister
}