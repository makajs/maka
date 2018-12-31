import pkgJson from './package.json'
import { actionMixin } from 'maka'
import './style.less'

const name = pkgJson.name

const state = {
    data: {}
}

@actionMixin('base')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }
}

const view = {
    component: 'div'
}

export {
    name,
    state,
    action,
    view
}