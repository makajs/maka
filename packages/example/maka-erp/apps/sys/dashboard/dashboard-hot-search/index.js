import pkgJson from './package.json'

import view from './view'
import action from './action'
import state from './state'
import './style.less'
import './mock'

const name = pkgJson.name

export {
    name,
    state,
    action,
    view
}