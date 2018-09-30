import createHashHistory from 'history/createHashHistory'

var hashHistory
const listerners = {},
    _options = {} //{isAlias:()=>{}, toAlias:()=>{}, toRealName:()=>{}}

function setHistoryInstance() {
    if (!hashHistory)
        hashHistory = createHashHistory()
}

function config(options) {
    Object.assign(_options, options)
}

function getAlias(pathName) {
    if (!_options.isAlias || !_options.toAlias || _options.isAlias(pathName))
        return pathName
    return _options.toAlias(pathName)
}

function getRealName(pathName) {
    if (!_options.isAlias || !_options.toRealName || !_options.isAlias(pathName))
        return pathName
    return _options.toRealName(pathName)
}

function listen(selfApp, handler) {
    setHistoryInstance()
    if (!listerners[selfApp]) {
        listerners[selfApp] = []
    }

    var h = listerners[selfApp].find(o => o.listen == handler)
    if (!h) {

        h = handler
        var unlisten = hashHistory.listen((location, action) => {
            const childApp = getChildApp(selfApp)
            handler(childApp, location, action)
        })

        listerners[selfApp].push({
            listen: h,
            unlisten
        })
    }
}

function unlisten(selfApp, handler) {
    if (!listerners[selfApp])
        return

    const index = listerners[selfApp].findIndex(o => o.listen == handler)

    if (index == -1)
        return

    listerners[selfApp][index].unlisten()
    listerners[selfApp].splice(index, 1)
}


function getChildApp(selfApp) {
    setHistoryInstance()
    var pathName = hashHistory.location.pathname + hashHistory.location.search
    pathName = getRealName(pathName)
    if (!pathName || pathName == '/' || pathName.indexOf(selfApp) == -1)
        return

    const segs = pathName.split('/')

    const selfIndex = segs.findIndex(s => s.indexOf(selfApp) != -1)

    if (segs.length - 1 == selfIndex)
        return

    const ret = segs[selfIndex + 1]

    return ret == '/' ? undefined : ret
}

function pushChildApp(selfApp, childApp) {
    setHistoryInstance()
    var pathName = hashHistory.location.pathname
    pathName = getRealName(pathName)
    if (!pathName || pathName == '/' || pathName.indexOf(selfApp) == -1) {
        hashHistory.push(getAlias(`/${selfApp}/${childApp}`))
        return
    }

    const segs = pathName.split('/')

    const selfIndex = segs.findIndex(s => s.indexOf(selfApp) != -1)

    if (segs.length - 1 == selfIndex) {
        segs.push(childApp)
    }
    else {
        segs.splice(selfIndex + 1, segs.length - selfIndex, childApp)
        //segs[selfIndex + 1] = childApp
    }

    if (pathName == segs.join('/'))
        return

    hashHistory.push(getAlias(segs.join('/')))
}

function goBack() {
    hashHistory.goBack()
}

const location = hashHistory ? hashHistory.location : null

export default {
    config,
    listen,
    unlisten,
    getChildApp,
    pushChildApp,
    goBack,
    location
}

export {
    config,
    listen,
    unlisten,
    getChildApp,
    pushChildApp,
    goBack,
    location
}