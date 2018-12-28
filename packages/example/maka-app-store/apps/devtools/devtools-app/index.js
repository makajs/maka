import pkgJson from './package.json'
import { actionMixin, load } from 'maka'
import './style.less'

import view from './view'

const name = pkgJson.name

const state = {
    data: {
        selectType: 'view',
    }
}

window.__maka_hot_update__ = {}

@actionMixin('base', 'beautify', 'json5')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    onInit = () => {
        var apps = {...__maka_apps__, ...__maka_hot_update__}
        this.base.setState({ 'data.apps': apps })
    }

    searchChange = (e) => {
        var v = e.target.value
        this.base.setState({ 'data.search': v })
        this.searchReload(v)
    }

    searchReload = (v) => {
        var apps =  {...__maka_apps__, ...__maka_hot_update__}
        var names = Object.keys(apps).filter(appName => appName.indexOf(v) != -1)
        var newApps = names.reduce((a, b) => { a[b] = apps[b]; return a }, {})

        this.base.setState({ 'data.apps': newApps })
    }

    appSelected = (selectedKeys) => {
        if (!selectedKeys && selectedKeys.length == 0)
            return

        const apps = {...this.base.gs('data.apps'),  ...__maka_hot_update__}
        const hit = apps[selectedKeys[0]]

        if (hit) {
            this.base.ss({
                'data.selectApp': hit,
                'data.currentJson':
                    this.base.gs('data.selectType') == 'view'
                        ? this.beautify.js(JSON.stringify(hit.view))
                        : this.beautify.js(this.getAppState(hit.name))
            })
        }

    }

    getAppState = (appName) => {
        if(!appName)
            return '{}'
        var state = window.__maka_store__.getState().get(appName)
        if (!state)
            return `{error:'该应用已加载，但是没有初始化使用'}`
        state = state.toJS()
        return this.beautify.js(JSON.stringify({ data: state.data }))
    }


    typeChange = (e) => {
        var currentJson = ''
        if (e.target.value == 'view') {
            currentJson = this.beautify.js(JSON.stringify(this.base.gs('data.selectApp.view')))
        } else {
            const appName = this.base.gs('data.selectApp.name')
            currentJson = this.getAppState(appName)
        }

        this.base.ss({
            'data.selectType': e.target.value,
            'data.currentJson': this.beautify.js(currentJson)
        })
    }

    formatJson = () => {
        const formated = this.beautify.js(this.base.gs('data.currentJson'))
        this.base.ss({ 'data.currentJson': formated })
    }


    jsonChange = (e) => {
        var v = JSON.stringify(e.updated_src)
        try {
            const json = this.json5.parse(v)
            const appName = this.base.gs('data.selectApp.name')
            const type = this.base.gs('data.selectType')

            if (type == 'view') {
                this.base.ss({
                    'data.currentJson': v,
                    'data.selectApp.view': json
                })
            }
            else {
                this.base.ss({ 'data.currentJson': v })
            }

            if (type == 'view') {
                this.forceUpdateMeta(appName, json)
            }
            else if (type == 'state')
                this.forceUpdateState(appName, json)
        }
        catch (e) {
            console.error(e)
        }
    }


    getViewerSrc = (data) => {
        var json = {}
        try {
            json = this.json5.parse(data.currentJson || '{}')
        }
        catch (e) {
            json = { error: e.message }
        }
        json._notParse = true
        return json
    }


    forceUpdateMeta = (appName, meta) => {
        setTimeout(() => {
            this.base.setMetaForce(appName, meta)
            const apps = this.base.getAppInstances()
            const keys = Object.keys(apps)
            __maka_hot_update__[appName] = {
                ...__maka_apps__[appName],
                ...__maka_hot_update__[appName],
                view: meta
            }
            if (this.component.props.onPortalReload) {
                this.component.props.onPortalReload()
            }
            else {
                keys.forEach(k => {
                    if (apps[k].appName == appName) {
                        const inst = apps[k].instance
                        inst.forceUpdate()
                    }
                })
            }
        }, 0)
    }

    forceUpdateState = (appName, state) => {
        setTimeout(() => {
            const apps = this.base.getAppInstances()
            const keys = Object.keys(apps)
            keys.forEach(k => {
                if (apps[k].appName == appName) {
                    const inst = apps[k].instance
                    inst.props.base.ss('data', state.data)
                }
            })
        }, 0)
    }

    reset = () => {

    }
}


async function beforeRegister() {
    await load(['common', 'json-viewer', 'code-mirror', 'markdown'])
}


export {
    name,
    state,
    action,
    view,
    beforeRegister
}