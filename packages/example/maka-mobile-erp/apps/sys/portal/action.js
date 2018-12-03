
import { actionMixin, navigate } from 'maka'


@actionMixin('base', 'toast')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    onInit = () => {
        navigate.listen(this.listen)
        this.base.context.set('openPage', this.setContent)
    }

    setContent = (title, appName, appProps = {}) => {
        return new Promise((resolve, reject) => {
            appProps = {
                ...appProps, 
                onOk: (result) => {
                    resolve(result)
                }
            }
            var data = this.base.gs('data')

            if (data.content && appName == data.content.appName)
                return 

            var content = {title, appName, appProps },
                openPages = data.openPages || [],
                json = {
                    'data.content': content
                }

            var hitIndex = data.openPages.findIndex(o => o.title == title || o.appName == appName)
            var hit = hitIndex != -1

            if (hit) {
                this.base.ss(json)
                return 
            }
            else{
                data.openPages.push(content)
                json['data.openPages'] = openPages
            }

            this.base.ss(json)

            setTimeout(() => {
                let location = navigate.getLocation()
                let full = `${location.pathname}${location.search}`
                let segs = full.split('/')
                segs = segs.slice(0, segs.indexOf('portal') + 1)
                segs.push(content.appName)
                navigate.redirect(segs.join('/'))
            }, 0)
        })
    }

    closeContent = (appName) => {
        var openPages = this.base.gs('data.openPages') || []
        var hitIndex = openPages.findIndex(o => o.appName == appName)
        openPages = openPages.splice(hitIndex, 0)
        this.base.ss({
            'data.openPages': openPages,
            'data.content': openPages[openPages.length - 1]
        })
    }


    listen = (location, action) => {
        let full = `${location.pathname}${location.search}`
        if (!full || full.indexOf('portal') == -1)
            return

        const currentAppName = this.base.gs('data.content.appName')

        if (action == 'POP') {
            this.closeContent(currentAppName)
            return
        }

        let segs = full.split('/'),
            targetApp = segs[segs.length - 1]

        if (targetApp == 'portal' || !targetApp) {
            this.base.ss({
                'data.openTabs': [],
                'data.content': {}
            })
        }
        else {
            this.setContent('', targetApp)
        }
    }

}
