import createHashHistory from 'history/createHashHistory'

var hashHistory
const listerners = []

function setHistoryInstance() {
    if (!hashHistory)
        hashHistory = createHashHistory()
}

function listen(handler) {
    setHistoryInstance()
    var h = listerners.find(o => o.listen == handler)
    if (!h) {
        h = handler
        var unlisten = hashHistory.listen(handler)

        listerners.push({ listen: h, unlisten })
    }
}

function unlisten(handler) {
    const index = listerners.findIndex(o => o.listen == handler)

    if (index == -1)
        return

    listerners[index].unlisten()
    listerners.splice(index, 1)
}



function goBack() {
    hashHistory && hashHistory.goBack()
}

function redirect(app) {
    hashHistory && hashHistory.push(app)
}

function getLocation(){
    return hashHistory && hashHistory.location 
}

export default {
    listen,
    unlisten,
    goBack,
    redirect,
    getLocation,
}

export {
    listen,
    unlisten,
    goBack,
    redirect,
    getLocation
}