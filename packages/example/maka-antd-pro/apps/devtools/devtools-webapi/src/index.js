import pkgJson from '../package.json'
import { actionMixin, load, fetch } from 'maka'
import './style.less'

import view from './view'

const name = pkgJson.name

const state = {
    data: {
    }
}


@actionMixin('base', 'treeHelper', 'webapi')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    onInit = () => {
        this.load()
    }

    object2Array = (obj, matchFn, parentId) => {
        var ret = []
        Object.keys(obj).forEach(o => {
            let children = []
            if (typeof obj[o] == 'object') {
                children = this.object2Array(obj[o], matchFn, o)
            }

            let node = {id: parentId? `${parentId}.${o}`: o, name: o}

            if (children && children.length > 0) {
                node.children = children
                ret.push(node)
            }
            else {
                if (matchFn(o))
                    ret.push(node)
            }
        })
        return ret
    }

    load = (search) => {
        var webapi = this.webapi

        var ret = this.object2Array(webapi, (o) => {
            return o != '_isFunction' && (!search || o.toLowerCase().indexOf(search.toLowerCase()) != -1)
        }).sort((a, b) => a.id > b.id ? 1 : -1)
        this.base.setState({ 'data.treeDs': ret })
    }

    searchChange = (e) => {
        var v = e.target.value
        this.base.setState({ 'data.search': v })
        this.load(v)
    }

    nodeSelected = (selectedKeys) => {
        if (!selectedKeys && selectedKeys.length == 0)
            return

        const hit = this.treeHelper.findById(this.base.gs('data.treeDs'), selectedKeys[0])
        if (hit) {
            this.base.ss({
                'data.selectedNode': hit,
            })
        }

    }
}

async function beforeRegister() {
    await load(['template', 'common-iframe', 'webapi'])
}


export {
    name,
    state,
    action,
    view,
    beforeRegister
}