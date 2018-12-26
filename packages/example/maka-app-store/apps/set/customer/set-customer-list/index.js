import pkgJson from './package.json'
import {load} from 'maka'
import view from './view'
import state from './state'
import action from './action'

import './style.less'
import './mock.js'

const name = pkgJson.name


async function beforeRegister(){
    await load('common')
}

export {
    name,
    state,
    action,
    view,
    beforeRegister
}