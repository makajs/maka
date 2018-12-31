import pkgJson from '../package.json'
import {load} from 'maka'
import view from './view'
import action from './action'
import state from './state'
import './mock'
import './img/logo.png'
import './img/photo.png'
import './style.less'

const name = pkgJson.name

async function beforeRegister(){
    await load(['template','webapi'])
}

export {
    name,
    view,
    state,
    action,
    beforeRegister
}

