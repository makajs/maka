import pkgJson from '../package.json'
import { actionMixin } from 'maka'
import './style.less'

const name = pkgJson.name



const state = { data: {} }

@actionMixin('base')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }
}

const view = {
    component: 'div'
}

function afterView(view) {
    view.children[0].children[2].children.push({
        component: 'button',
        onClick: '{{$btnClick}}',
        children: 'plugin'
    })
    return view
}

function afterAction(action) {
    action.btnClick = (e) => {
        alert()
    }
    return action
}

const pluginApi = { afterAction, afterView }

export {
    name,
    state,
    action,
    view,
    pluginApi
}