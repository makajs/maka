import pkgJson from '../package.json'
import { load } from 'maka'
import view from './view'
import state from './state'
import action from './action'

import './style.less'

const name = pkgJson.name

async function beforeRegister() {
    await load(['template', 'webapi'])
}


export {
    name,
    state,
    action,
    view,
    beforeRegister
}