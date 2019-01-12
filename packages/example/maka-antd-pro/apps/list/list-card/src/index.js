import pkgJson from '../package.json'
import { load } from 'maka'
import './style/index.less'
import view from './view'
import state from './state'
import action from './action'
const name = pkgJson.name

async function beforeRegister(){
   await load(['antd', 'action', 'i18n', 'template'])
}

export {
    name,
    state,
    action,
    view,
    beforeRegister
}