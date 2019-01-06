import pkgJson from '../package.json'
import { actionMixin, registerAction } from 'maka'
import * as actions from './action'
import moment from 'moment'
import lodash from 'lodash'
import classnames from 'classnames'
import './style.less'

const name = pkgJson.name

registerAction('classnames', classnames, true)
registerAction('lodash', lodash, true)
registerAction('moment', moment, true)
Object.keys(actions).forEach(key => {
    registerAction(key, actions[key], key == 'numberHelper')
})

const state = {
    data: {
    }
}

@actionMixin('base', 'moment')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    btnClick = () => {
        alert(this.moment().format('YYYY-MM-DD'))
    }
}

const view = {
    component: 'div',
    className: 'action',
    children: [{
        component: 'button',

        onClick: '{{$btnClick}}',
        children: 'date'
    }]
}

export {
    name,
    state,
    action,
    view
}