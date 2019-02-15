import appFactory from './appFactory'
import config from './config'
import { getGlobal } from '@makajs/utils'
var globalObj = getGlobal()
const isProduction = process.env.isProduction


function fixName(name) {
    if (name.indexOf('@') == -1) return name
    return name.replace('@', '').replace('makajs', 'maka').replace('/', '-')
}


function getUrl(app) {
    if (typeof app == 'string') {
        app = fixName(app)
        if (config.current.appUrls)
            return config.current.appUrls[app] || app
        else
            return app
    }
    else if (typeof app == 'object') {
        if (app.url)
            return app.url
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
    //options = {}

    /*
    if (typeof app == 'string') {
        urls.push(getUrl(app))
        urls.push(fixName(app))
    }
    else if (app instanceof Array) {
        app.forEach(o => {
            if (typeof o == 'string') {
                urls.push(fixName(o))
            }
            else if (typeof o == 'object' && o.url) {
                urls.push(o.url)
                if (o.name && o.option)
                    options[fixName(o.name)] = o.option
            }
        })
    }
    else if (typeof app == 'object' && app.url) {
        urls.push(o.url)
        if (app.name && app.option)
            options[fixName(app.name)] = app.option
    }
    */

    if (app instanceof Array) {
        app.forEach(o => urls.push(getUrl(o)))
    }
    else {
        urls.push(getUrl(app))
    }

    if (!globalObj.require || urls.length == 0)
        return Promise.resolve(null)

    return new Promise((resolve, reject) => {
        /*
        urls.forEach(url => {
            var appName = url.substr(url.lastIndexOf('/') + 1).replace(/(\.js)|(\.min\.js)/, ''),
                pub = url.indexOf('/') ? url.substr(0, url.lastIndexOf('/') + 1) : ''
            globalObj[`__pub_${appName}__`] = pub
        })
        */

        urls = urls.filter(url => {
            /*
            var appName = url.substr(url.lastIndexOf('/') + 1).replace(/(\.js)|(\.min\.js)/, ''),
                pub = url.indexOf('/') ? url.substr(0, url.lastIndexOf('/') + 1) : ''
            */
            var appName = findNameByUrl(url) 
            var pub = url.indexOf('/') ? url.substr(0, url.lastIndexOf('/') + 1) : ''
            globalObj[`__pub_${appName}__`] = pub
            return !appFactory.existsApp(appName)
        })

        urls = urls.map(u => {
            if(u.indexOf('http') != -1)
                return u
            return isProduction ? (u + '.min') : u
        })
        //const appCount = urls.length
        //urls = urls.concat(urls.map(u => `css!${u}`))

        if (!urls || urls.length == 0) {
            resolve(null)
            return
        }
        globalObj.require(urls, async (...args) => {
            const apps = args.reduce((prev, curr) => {
                return curr ? { ...prev, [curr.name]: curr } : curr
            }, {})

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
                if(u.indexOf('http') != -1)
                    return `css!${u.replace('.js', '.css')}`    
                return `css!${u}`
            })
            globalObj.require(cssUrls, async (...args) => {
                for (var i = 0; i < appNames.length; i++) {
                    apps[appNames[i]].afterRegister && (await apps[appNames[i]].afterRegister())
                }
                resolve(null)
            })
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