import pkgJson from './package.json'
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

function afterState(state) {
    state.data.input = 'world'
    return state
}

function afterView (view){
    view.children.push({
        component: 'button',
        onClick: '{{$btnClick}}',
        children: 'reset'
    })
  return view
}

function afterAction(action){
    action.btnClick = (e) =>{
        action.base.setState({'data.input': 'world'})
    }
    return action
}

const pluginApi = { afterAction, afterView, afterState }

export {
    name,
    state,
    action,
    view,
    pluginApi
}