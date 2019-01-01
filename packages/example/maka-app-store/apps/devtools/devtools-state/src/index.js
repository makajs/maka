import pkgJson from '../package.json'
import { actionMixin, load } from 'maka'
import './style.less'

const name = pkgJson.name

const state = {
    data: {
    }
}

@actionMixin('base')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    getData = () => {
        var state = __maka_store__.getState().toJS()
        var ret = {}
        Object.keys(state).forEach(key=>{
            ret[key] = {}
            ret[key].data = state[key].data
        })
        return ret
       
    }

}

const view = {
    component: 'div',
    className: 'devtools-state',
    children: [{
        component: 'JsonViewer',
        theme: 'monokai',
        displayDataTypes: false,
        collapsed: true,
        name: false,
        src: '{{$getData()}}'
    }]
}

async function beforeRegister() {
    await load(['json-viewer', 'template'])
}


export {
    name,
    state,
    action,
    view,
    beforeRegister
}