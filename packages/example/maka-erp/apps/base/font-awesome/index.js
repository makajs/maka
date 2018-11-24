import pkgJson from './package.json'
import { actionMixin, registerComponent } from 'maka'
import FA from 'react-fontawesome'
import 'font-awesome/css/font-awesome.css';
import './style.less'

const name = pkgJson.name

registerComponent('FA', FA)

const state = {
    data: {
    }
}

@actionMixin('base')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }
}

const view = {
    component: 'div',
    className: 'zlj-fontawesome',
    children: [{
        component: 'FA',
        style: { fontSize: 30},
        name: 'rocket'
    },{
        component: 'FA',
        style: { fontSize: 30},
        name: 'bath'
    },{
        component: 'FA',
        style: { fontSize: 30},
        name: 'print'
    }]
}

export {
    name,
    state,
    action,
    view
}