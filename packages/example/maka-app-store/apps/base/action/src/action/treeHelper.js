
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
        this.option = option
    }


    loopTreeChildren = (data, childrenName = 'children', idField = 'id', nameField = 'name', codeField = 'code') => {
        var ret = {
            _isMeta: true,
            value: this.loopTreeChildrenInternal(data, childrenName, idField, codeField, nameField)
        }
        return ret;
    }

    loopTreeChildrenInternal(data, childrenName, idField, codeField, nameField) {
        if (!data) return null
        var ret = data.map((item) => {
            if (item[childrenName] && item[childrenName].length) {
                return {
                    component: 'antd.Tree.TreeNode',
                    key: item[idField] + '',
                    title: item[nameField],
                    children: this.loopTreeChildrenInternal(item[childrenName], childrenName, idField, codeField, nameField)
                }
            }
            return {
                component: 'antd.Tree.TreeNode',
                key: item[idField] + '',
                title: item[nameField]
            }
        })

        return ret
    }

    findById = (nodes, id, idProp = 'id', childrenProp = 'children') => {
        return this.find(nodes, childrenProp, n => n[idProp] == id)
    }


    buildOne = (nodes = [], root = { id: 0 }) => {
        if (typeof root != "object") {
            root = { id: root }
        }
        root.children = nodes
            .filter(n => n.parentId == root.id)
            .map(c => this.buildOne(nodes, c))

        return root
    }

    build = (nodes=[]) => {
        var ret = []
        nodes.forEach(n=>{
            if(!n.parentId && n.parentId != 0 ){
                ret.push(this.buildOne(nodes, n))
            }
        })
        return ret
    }

    find = (nodes, childPropName, matchFn) => {
        for (let n of nodes) {
            if (matchFn(n) === true) {
                return n
            }

            if (n[childPropName]) {
                let f = this.find(n[childPropName], childPropName, matchFn)
                if (f)
                    return f
            }
        }
        return
    }

    map(nodes, childPropName, newChildPropName, mapFun) {
        var ret = []
        for (let n of nodes) {
            //map不改变原来对象
            let o = { ...n }
            if (o[childPropName]) {
                o[newChildPropName || childPropName] = this.map(o[childPropName], childPropName, newChildPropName, mapFun)
                if (newChildPropName && newChildPropName != childPropName)
                    delete o[childPropName]
            }
            ret.push(mapFun(o))
        }

        return ret
    }
}