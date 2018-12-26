import pkgJson from './package.json'
import {load} from 'maka'
import './style.less'
import view from './view'
import action from './action'
import state from './state'
import './mock'

const name = pkgJson.name

async function beforeRegister(){
    await load(['common', 'echarts'])
}

export {
    name,
    state,
    action,
    view,
    beforeRegister
}