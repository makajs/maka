
import { actionMixin, load, removeApp, appInstances } from 'maka'

@actionMixin('base', 'webapi', 'message', 'i18n')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    styles = (suffix) => `option-${suffix}`

    onInit = () => {
    }

    toggleContent = async () => {
        var oriOpen = this.base.gs('data.drawerOpen')
        if (!oriOpen) {
            var resp = await this.webapi.option.query({})
            this.base.ss({
                'data.setting': resp,
                'data.drawerOpen': true
            })
        }
        else {
            this.base.ss({
                'data.drawerOpen': false
            })
        }
    }

    styleChange = (key) => async () => {
        var resp = await this.webapi.option.update({
            theme: key
        })
        this.base.setState('data.setting', resp)

        this.component.props.onPortalReload && this.component.props.onPortalReload()
    }

    primaryColorChange = (item) => async () => {
        var data = this.base.getState()
        var old = data.primaryColors.find(o => o.key == data.setting.activePrimaryColor)
        removeApp(old.appName)
        var resp = await this.webapi.option.update({
            activePrimaryColor: item.key
        })
        await load(item.appName)
        this.base.setState('data.setting', resp)
    }

    changeSetting = async (key, value) => {

        if(key == 'colorWeak'){
            document.body.className = value ? 'colorWeak' : '';
        }

        var json = {
            [key]: value
        }

        if (key == 'layout') {
            if (value == 'sidermenu') {
                json.contentWidth = 'Fluid'
            }
            else {
                json.contentWidth = 'Fixed'
            }
        }
        var resp = await this.webapi.option.update(json)
        this.base.setState('data.setting', resp)
        this.component.props.onPortalReload && this.component.props.onPortalReload()

        /*
        setTimeout(() => {
            const apps = appInstances
            const keys = Object.keys(apps)
            keys.forEach(k => {
                const inst = apps[k].instance
                inst.forceUpdate()
            })
        })*/
    }
}