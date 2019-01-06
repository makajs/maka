import pkgJson from '../package.json'
import {load} from 'maka'
import view from './view'
import action from './action'
import state from './state'
import './mock'
import './img/logo.png'
import './img/photo.png'
import './img/empty.svg'
import './style/index.less'

const name = pkgJson.name

async function beforeRegister(){
    await load(['template', 'react-container-query', 'react-media', 'webapi','style'])
}

export {
    name,
    view,
    state,
    action,
    beforeRegister
}

