import React from 'react'
import componentFactory from './componentFactory'
import memoize from 'lodash/memoize'

function parseMetaProps(meta, props, data) {
    const ret = {}

    Object.keys(meta).forEach(key => {
        let v = meta[key],
            t = typeof v

        if (v instanceof Array) {
            ret[key] = []

            var i, c;

            for (i = 0; c = v[i++];) {
                if (c instanceof Array) {
                    ret[key] = c
                }
                else {
                    let mc = metaToComponent(c, props, data)
                    if (mc instanceof Array)
                        ret[key] = ret[key].concat(mc)
                    else
                        ret[key].push(mc)
                }
            }
        }
        else if (t == 'object') {
            if (v && v._notParse) {
                ret[key] = v
            }
            else {
                ret[key] = metaToComponent(v, props, data)
            }
        }
        else {
            ret[key] = v
        }
    })

    return ret
}

const toFunction = memoize((v) => {
    return new Function(v)
})

function metaToComponent(meta, props, data) {
    if (!meta)
        return meta

    const metaType = typeof meta

    if (metaType == 'object' && meta['$$typeof']) {
        return meta
    }
    else if (metaType == 'object' && meta['_isAMomentObject']) {
        return meta
    }
    else if (metaType == 'object' && meta instanceof Date) {
        return meta
    }
    else if (metaType == 'object' && meta instanceof Promise) {
        return meta
    }
    else if (metaType == 'object') {
        if (meta.component) {
            
            if (meta._visible === false)
                return null

            if (typeof meta._visible === 'function' && meta._visible() === false)
                return null

            if (typeof meta.component == 'function') {
                meta.component = meta.component()
            }

            //for in data.list
            if (meta['_power'] && /for[ ]+in/.test(meta._power)) {
                var p = meta._power
                    .replace(/for[ ]+in/, '')
                    .replace(' ', '')

                if (p.indexOf('_rowIndex') != -1)
                    p = p.replace('_rowIndex', meta.path.split(',').length > 1 ? meta.path.split(',')[1].replace(' ', '') : 0)

                let items = props.base.gs(p)

                if (!items || items.size == 0) return
                items = items.toJS()
                return items.map((o, index) => {
                    let childMeta = props.base.gm(meta.path + ',' + index, undefined, data)
                    delete childMeta._power
                    return metaToComponent(childMeta, props, data)
                })
            }

            //({rowIndex})=>rowIndex
            if (meta._power && meta._power.indexOf('=>') != -1) {
                return (...args) => {
                    var varsString = (toFunction('return ' + meta['_power']))()(...args)
                    var childMeta = props.base.gm(meta.path + ',' + varsString, undefined, data)
                    childMeta._power = undefined
                    return metaToComponent(childMeta, props, data)
                }
            }

            const componentName = meta.component,
                component = componentFactory.getComponent(componentName)


            var allProps = parseMetaProps(meta, props, data)
            if (!allProps.key) {
                allProps.key = meta.path
            }

            delete allProps.component
            delete allProps._name
            delete allProps.path


            //allProps = omit(allProps, ['clearAppState', 'component', 'name', 'getDirectFuns', 'initView', 'payload'])
            if (componentName == 'AppLoader') {
                var propKeys = Object.keys(props),
                    i, key

                for (i = 0; key = propKeys[i++];) {
                    if (allProps[key] == undefined) {
                        allProps[key] = props[key]
                    }
                }

                //Remove attributes that are not required by some components
                delete allProps.clearAppState
                delete allProps.getDirectFuns
                delete allProps.initView
                delete allProps.payload
                delete allProps.componentWillMount
                delete allProps.componentDidMount
                delete allProps.shouldComponentUpdate
                delete allProps.componentWillReceiveProps
                delete allProps.componentWillUpdate
                delete allProps.componentDidCatch
                delete allProps.componentWillUnmount
                delete allProps.componentDidUpdate
                delete allProps.unmount

                if (!allProps.appName)
                    return null

                //if (allProps._notRender === true && !getApps()[allProps.appName]) {
                if (allProps._notRender === true) {
                    return null
                }

                allProps.key = allProps.appName
                allProps.name = allProps.appName
                return React.createElement(component, allProps)
            }

            return React.createElement(component, allProps)
        }
        else {
            return parseMetaProps(meta, props, data)
        }
    }
    else {
        return meta
    }
}

const MonkeyKing = (props) => {
    const { base } = props
    const data = base.gs().toJS()
    return metaToComponent(base.gm(undefined, undefined, data), props, data)
}

export default MonkeyKing