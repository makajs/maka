import Immutable, { Map, List, fromJS } from 'immutable'
import utils, { path } from '@makajs/utils'
import templateFactory from './templateFactory'

const { parsePath } = path
const cache = { meta: Map() }

window['__getCache'] = () => cache

var i = 0

export function uid() {
    return 'i' + (i++)
}

export function setMeta(appInfo) {

    if (!appInfo || !appInfo.view) return

    const appName = appInfo.name

    if (cache.meta.has(appName))
        return

    setMetaForce(appName, appInfo.view)
}

export function setMetaForce(appName, meta) {
    if (!appName || !meta)
        return

    meta = fromJS(meta)

    meta = parseMetaTemplate(meta)

    var parsed = parseMeta(meta)
    meta = parsed.meta
    var map = parsed.map

    cache.meta = cache.meta
        .setIn([appName, 'meta'], meta)
        .setIn([appName, 'metaMap'], map)
}

export function getMeta(appInfo, fullpath, propertys) {
    if (!fullpath)
        return cache.meta.getIn([appInfo.name, 'meta']).toJS()

    const parsedPath = parsePath(fullpath),
        vars = parsedPath.vars,
        metaMap = cache.meta.getIn([appInfo.name, 'metaMap']),
        meta = cache.meta.getIn([appInfo.name, 'meta'])

    const path = metaMap.get(parsedPath.path)

    const currentMeta = path ? meta.getIn(path.split('.')) : meta

    //Empty attribute, get all attributes under the path
    if (!propertys)
        return currentMeta.toJS()

    const ret = {}

    //Attribute is an array
    if (propertys instanceof Array) {
        var i, p;

        for (i = 0; p = propertys[i++];) {
            var val = currentMeta.getIn(p.split('.'))
            ret[p] = (val && val.toJS) ? val.toJS() : val
        }

        /*
        propertys.forEach(p => {
            let val = currentMeta.getIn(p.split('.'))
            ret[p] = (val && val.toJS) ? val.toJS() : val
        })*/

        return ret
    }

    //Attribute is a string
    if (typeof propertys == 'string') {
        let val = currentMeta.getIn(propertys.split('.'))
        return (val && val.toJS) ? val.toJS() : val
    }
}

export function getMetaMap(appInfo) {
    return cache.meta.getIn([appInfo.name, 'metaMap'])
}

export function getField(state, fieldPath) {
    var r
    if (!fieldPath) {
        r = state.get('data')
        return r && r.toJS ? r.toJS() : r
    }
    r = fieldPath instanceof Array
        ? state.getIn(fieldPath)
        : state.getIn(fieldPath.split('.'))

    return r && r.toJS ? r.toJS() : r
}

export function getFields(state, fieldPaths) {
    var ret = {}
    fieldPaths.forEach(o => ret[o] = getField(state, o))
    return ret
}

export function setField(state, fieldPath, value) {
    if (fieldPath instanceof Array) {
        return state.setIn(fieldPath, value && fromJS(value))
    } else {
        return state.setIn(fieldPath.split('.'), value && fromJS(value))
    }
}

export function setFields(state, values) {
    var keys = Object.keys(values),
        i, key

    for (i = 0; key = keys[i++];) {
        state = setField(state, key, values[key])
    }
    return state
}

export function updateField(state, fieldPath, fn) {
    if (fieldPath instanceof Array) {
        return state.updateIn(fieldPath, fn)
    } else {
        return state.updateIn(fieldPath.split('.'), fn)
    }
}


function parseMetaTemplate(meta) {
    var templates = []

    const parseProp = (propValue, path) => {
        if (!(propValue instanceof Immutable.Map)) {
            return
        }
        if (propValue.get('component')) {
            var component = utils.string.trim(propValue.get('component'))
            var template = templateFactory.getTemplate(component)
            if (template) {
                templates.push([path, fromJS(template(propValue.toJS()))])
                return
            }

        }

        propValue.keySeq().toArray().forEach(p => {
            let v = propValue.get(p)
            if (v instanceof Immutable.List) {
                v.forEach((c, index) => {
                    let currentPath = path ? `${path}.${p}.${index}` : `${p}.${index}`
                    parseProp(c, currentPath)
                })
            } else {
                let currentPath = path ? `${path}.${p}` : p
                parseProp(v, currentPath)
            }
        })
    }
    parseProp(meta, '')
    templates.forEach(t => {
        let seg = t[0].split('.')
        if (
            (t[1] instanceof Immutable.List) &&
            (meta.getIn(seg.slice(0, seg.length - 1)) instanceof Immutable.List)
        ) {
            let index = seg.pop()
            meta = meta.updateIn(seg, ll => {
                ll = ll.remove(index)

                t[1].forEach(o => {
                    ll = ll.insert(index, o)
                    index++
                })
                return ll
            })
        }
        else {
            meta = meta.setIn(seg, t[1])
        }
    })
    return meta
}

function parseMeta(meta) {
    let map = Map()
    const parseProp = (propValue, parentPath, parentRealPath) => {
        if (!(propValue instanceof Immutable.Map)) {
            return
        }
        /*if (propValue.get('name') && propValue.get('component')) {
            const name = utils.string.trim(propValue.get('name'))
            parentPath = parentPath ? `${parentPath}.${name}` : name
            ret = ret.set(parentPath, parentRealPath)
        }
        else*/
        if (propValue.get('component')) {
            const name = uid() + ''
            meta = meta.setIn(parentRealPath ? parentRealPath.split('.').concat('_name') : ['_name'], name)
            parentPath = parentPath ? `${parentPath}.${name}` : name
            map = map.set(parentPath, parentRealPath)
        }

        propValue.keySeq().toArray().forEach(p => {
            let v = propValue.get(p),
                currentPath = parentPath ? `${parentPath}.${p}` : p
            if (v instanceof Immutable.List) {
                v.forEach((c, index) => {
                    let currentRealPath = parentRealPath ? `${parentRealPath}.${p}.${index}` : `${p}.${index}`
                    parseProp(c, `${currentPath}`, currentRealPath)
                })
            } else {
                let currentRealPath = parentRealPath ? `${parentRealPath}.${p}` : p
                parseProp(v, `${currentPath}`, currentRealPath)
            }
        })
    }

    parseProp(meta, '', '')
    return { meta, map }
}
