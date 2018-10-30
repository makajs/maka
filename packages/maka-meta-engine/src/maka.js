import React from 'react'
import componentFactory from './componentFactory'
import memoize from 'lodash/memoize'
import utils from '@makajs/utils'

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
                delete v._notParse
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

            //_for: 'data.list' or 'data.list[_index].sub'
            if (meta._for) {
                let _for = meta._for,
                    paraNames = ['data'],
                    paraValues = [data]

                if (meta['_vars']) {
                    paraNames.push('_vars')
                    paraValues.push(meta['_vars'])
                }

                if (meta._extParas) {
                    let extParaKeys = Object.keys(meta._extParas)
                    if (extParaKeys && extParaKeys.length > 0) {
                        extParaKeys.forEach(k => {
                            paraNames.push(k)
                            paraValues.push(meta._extParas[k])
                        })
                    }
                }

                let tmp = _for.replace('in', '#').split('#'),
                    dsPath = utils.string.trim(tmp[1]),
                    extParaNames = tmp[0].replace('(', '').replace(')', '').split(',')

                let items = (new Function(...paraNames, `return ${dsPath}`))
                    .apply(null, paraValues)

                if (!items || items.length == 0) return
                return items.map((o, index) => {
                    let _vars = meta['_vars'] || []
                    _vars.push({ _index: index, _item: o })

                    let _extParas = meta._extParas || {}
                    _extParas[utils.string.trim(extParaNames[0])] = o
                    extParaNames.length > 1 && (_extParas[utils.string.trim(extParaNames[1])] = index)

                    let childMeta = props.base.gm(meta.path, undefined, data, _vars, _extParas)
                    delete childMeta._for
                    return metaToComponent(childMeta, props, data)
                })
            }

            //_function: '(arg1,arg2)
            if (meta._function !== undefined) {
                let _function = meta._function.replace('(', '').replace(')', '')
                return (...args) => {
                    let _extParas = meta._extParas || {}

                    _function.split(',').forEach((paraName, index) => {
                        _extParas[utils.string.trim(paraName)] = args[index]
                    })

                    var childMeta = props.base.gm(meta.path, undefined, data, meta['_vars'], _extParas)
                    childMeta._function = undefined
                    return metaToComponent(childMeta, props, data)
                }
            }


            const componentName = meta.component,
                component = componentFactory.getComponent(componentName)


            var allProps = parseMetaProps(meta, props, data)
            if (!allProps.key) {
                let strVars = (meta._vars && meta._vars.map(o => o._index).join(',')) || ''
                allProps.key = strVars ? meta.path + ',' + strVars : meta.path

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
    const data = base.gs()
    return metaToComponent(base.gm(undefined, undefined, data), props, data)
}

export default MonkeyKing