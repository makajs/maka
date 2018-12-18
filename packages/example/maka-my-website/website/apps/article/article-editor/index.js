import pkgJson from './package.json'
import view from './view'
import state from './state'
import action from './action'

import './style.less'

const name = pkgJson.name


export {
    name,
    state,
    action,
    view
}