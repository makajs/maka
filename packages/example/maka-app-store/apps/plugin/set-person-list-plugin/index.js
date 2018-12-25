import pkgJson from './package.json'
import { actionMixin } from 'maka'
import './style.less'

const name = pkgJson.name

function getView (view){
    view.children[0].children[2].children.push({
        component: 'button',
        onClick: '{{$btnClick}}',
        children: 'plugin'
    })
  return view
}

function getAction(action){
    action.btnClick = (e) =>{
        alert()
    }
    return action
}

export {
    name,
    getView,
    getAction
}