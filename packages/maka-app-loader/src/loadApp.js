import appFactory from './appFactory'
import config from './config'
import { getGlobal } from '@makajs/utils'
var globalObj = getGlobal()
const isProduction = process.env.isProduction

function fixName(name) {
    return name
}

function fixUrl(url) {
    var baseUrl = config.current.baseUrl
    if (!baseUrl) {
        var scripts = document.querySelectorAll("script");
        for (var i = 0; i < scripts.length; i++) {
            if (scripts[i].src && (
                scripts[i].src.indexOf('maka-main.js') != -1 ||
                scripts[i].src.indexOf('maka-main.min.js') != -1
            )) {
                if (scripts[i].src.indexOf('http') != -1){
                    baseUrl = scripts[i].src.substr(0, scripts[i].src.lastIndexOf('/') + 1)
                    if(baseUrl.indexOf('/core/v') != -1){
                        baseUrl = baseUrl.substr(0, baseUrl.indexOf('/core/v') + 1)
                    }
                    if(baseUrl.indexOf('/maka-sdk/') != -1){
                        baseUrl = baseUrl.substr(0, baseUrl.indexOf('/maka-sdk/') + 1)
                    }
                }
            }
        }
    }

    if (baseUrl && url.indexOf('http') == -1) {
        url = baseUrl + url
    }

    if (url.indexOf('http') != -1 && url.indexOf('.js') == -1) {
        url = url + (isProduction ? '.min.js' : '.js')
    }

    return url
}

function getUrl(app) {
    if (typeof app == 'string') {
        app = fixName(app)

        if (config.current.appUrls) {
            let ret = config.current.appUrls[app]
            if (ret) {
                return fixUrl(ret)
            }
            else {
                return fixUrl(app)
            }
        }
        else
            return fixUrl(app)
    }
    else if (typeof app == 'object') {
        if (app.url)
            return fixUrl(app.url)
        else
            return getUrl(app.name)
    }
}

function findNameByUrl(url) {
    var ret = ''
    if (config.current.appUrls) {
        var hit = Object.keys(config.current.appUrls).find(k => config.current.appUrls[k].url == url)
        ret = hit
    }
    if (ret) return ret
    return url.substr(url.lastIndexOf('/') + 1).replace(/(\.js)|(\.min\.js)/, '')
}


export default function loadApp(app) {
    var urls = []

    if (app instanceof Array) {
        app.forEach(o => urls.push(getUrl(o)))
    }
    else {
        urls.push(getUrl(app))
    }

    if (!globalObj.require || urls.length == 0)
        return Promise.resolve(null)

    return new Promise((resolve, reject) => {
        urls = urls.filter(url => {
            var appName = findNameByUrl(url)
            var pub = url.indexOf('/') ? url.substr(0, url.lastIndexOf('/') + 1) : ''
            globalObj[`__pub_${appName}__`] = pub
            return !appFactory.existsApp(appName)
        })

        urls = urls.map(u => {
            if (u.indexOf('http') != -1)
                return u

            if (u.indexOf('.js') != -1)
                return u.replace('.js', '')

            return isProduction ? (u + '.min') : u
        })
        if (!urls || urls.length == 0) {
            resolve(null)
            return
        }
        globalObj.require(urls, async (...args) => {
            const apps = args.reduce((prev, curr) => {
                return curr ? { ...prev, [curr.name]: curr } : curr
            }, {})

            if (!apps) {
                console.error('Not application found at ' + urls.join(';'))
            }
            else {

                var appNames = Object.keys(apps)

                for (var i = 0; i < appNames.length; i++) {
                    apps[appNames[i]].beforeRegister && (await apps[appNames[i]].beforeRegister())
                }

                appFactory.registerApps(apps)

                /*
                appConfig(appFactory.getApps(), {
                    "*": { apps: { ...appFactory.getApps() } },
                    ...options
                })
                */

                var cssUrls = urls.map(u => {
                    if (u.indexOf('http') != -1)
                        return `css!${u.replace('.js', '.css')}`
                    return `css!${u}`
                })
                /*
                globalObj.require(cssUrls, async (...args) => {
                    for (var i = 0; i < appNames.length; i++) {
                        apps[appNames[i]].afterRegister && (await apps[appNames[i]].afterRegister())
                    }
                    resolve(null)
                })*/


                globalObj.require(cssUrls, (...args) => {
                    resolve(null)
                    for (var i = 0; i < appNames.length; i++) {
                        apps[appNames[i]].afterRegister && (apps[appNames[i]].afterRegister())
                    }
                })
            }
        })
    })
}

/*
const appConfig = (apps, options) => {
    Object.keys(options).forEach(key => {
        const reg = new RegExp(`^${key == '*' ? '.*' : key}$`)
        Object.keys(apps).forEach(appName => {
            if (appName != 'config') {
                if (reg.test(appName)) {
                    apps[appName].config && apps[appName].config(options[key])
                }
            }
        })
    })
}
*/