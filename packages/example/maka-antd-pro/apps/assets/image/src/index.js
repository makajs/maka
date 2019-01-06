import pkgJson from '../package.json'
import { actionMixin, registerAction } from 'maka'
import logo from './img/logo.png'
import './style.less'

const name = pkgJson.name

registerAction('image',{
    logo
})

const state = {
    data: {
    }
}

@actionMixin('base', 'image')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }
}

const view = {
    component: 'div',
    className: 'image',
    children: [{
        component: 'img',
        src: '{{$image.logo}}'
    }]
}

export {
    name,
    state,
    action,
    view
}