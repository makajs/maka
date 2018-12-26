import pkgJson from './package.json'
import {load} from 'maka'
import view from './view'
import action from './action'
import state from './state'
import './mock'
import './img/logo.png'
import './style.less'

const name = pkgJson.name

async function beforeRegister(){
    await load('common')
}


export {
    name,
    view,
    state,
    action,
    beforeRegister
}

