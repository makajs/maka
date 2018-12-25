import pkgJson from './package.json'
import { actionMixin } from 'maka'
import './style.less'

const name = pkgJson.name

function getState(state) {
    state.data.input = 'world'
    return state
}

function getView (view){
    view.children.push({
        component: 'button',
        onClick: '{{$btnClick}}',
        children: 'reset'
    })
  return view
}

function getAction(action){
    action.btnClick = (e) =>{
        action.base.setState({'data.input': 'world'})
    }
    return action
}

export {
    name,
    getState,
    getView,
    getAction
}