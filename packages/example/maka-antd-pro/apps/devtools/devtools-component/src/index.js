import pkgJson from '../package.json'
import { actionMixin, load, componentFactory } from 'maka'
import './style.less'

import view from './view'

const name = pkgJson.name

const state = {
    data: {
    }
}


@actionMixin('base', 'treeHelper')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    onInit = () => {
        this.load()
    }


    toMiddleLine = (str) => {
        var temp = str.replace(/[A-Z]/g, function (match) {
            return "-" + match.toLowerCase();
        });
        if (temp.slice(0, 1) === '-') { //如果首字母是大写，执行replace时会多一个_，这里需要去掉
            temp = temp.slice(1);
        }
        return temp;
    }

    getUrl = (key) => {
        if (key.indexOf('antd') != -1) {
            if (key.split('.').length > 1)
                return `https://ant.design/components/${this.toMiddleLine(key.split('.')[1])}-cn/`
        }
        return ''
    }

    object2Array = (obj, matchFn, parentId) => {
        var ret = []
        Object.keys(obj).forEach(o => {
            let children = []
            if (typeof obj[o] == 'object') {
                children = this.object2Array(obj[o], matchFn, o)
            }

            let node = { id: parentId ? `${parentId}.${o}` : o, name: o }

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
        var components = componentFactory.getComponents()

        var ret = this.object2Array(components, (o) => {
            return o != '_isFunction' && (!search || o.toLowerCase().indexOf(search.toLowerCase()) != -1)
        }).sort((a, b) => a.id > b.id ? 1 : -1)

        /*
        var ret = []
    
        if (!search) {
            Object.keys(components).forEach(key => {
                let children = []
                if (key == 'antd' || key == 'ctrl') {
                    Object.keys(components[key]).forEach(sub => {
                        children.push({
                            id: key + '.' + sub,
                            name: sub,
                            url: this.getUrl(key + '.' + sub, sub)
                        })
                    })
                }
                ret.push({ id: key, name: key, children })
            })
        } else {
            Object.keys(components).forEach(key => {
                if (key == 'antd' || key == 'ctrl') {
                    Object.keys(components[key]).forEach(sub => {
                        if (sub.toLowerCase().indexOf(search.toLowerCase()) != -1)
                            ret.push({ 
                                id: key + '.' + sub,
                                name: sub,
                                url: this.getUrl(key + '.' + sub, sub) 
                            })
                    })
                }
                if (key.toLowerCase().indexOf(search.toLowerCase()) != -1)
                    ret.push({ id: key, name: key })
            })
        }*/
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
    await load(['template', 'common-iframe'])
}


export {
    name,
    state,
    action,
    view,
    beforeRegister
}