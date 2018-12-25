import pkgJson from './package.json'
import './style.less'
import view from './view'
import action from './action'
import state from './state'
import './mock'

const name = pkgJson.name

export {
    name,
    state,
    action,
    view
}