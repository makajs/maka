import pkgJson from '../package.json'
import { actionMixin, load } from 'maka'
import './style.less'
import funImg from './img/photo.png'

const name = pkgJson.name

const state = {
    data: {
    }
}

@actionMixin('base')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    getFunImg = () => funImg

    openPerson = () => {
        this.component.props.setPortalContent && this.component.props.setPortalContent('人员', 'set-person-list')
    }

    openCustomer = () => {
        this.component.props.setPortalContent && this.component.props.setPortalContent('客户', 'set-customer-list')
    }

    openBOM = () => {
        this.component.props.setPortalContent && this.component.props.setPortalContent('BOM', 'set-bom-list')
    }
}

const view = {
    component: 'div',
    className: 'home-shortcut',
    children: [{
        component: 'div',
        onClick: '{{$openPerson}}',
        children: [{
            component: 'img',
            src: '{{$getFunImg()}}'
        }, {
            component: 'a',
            children: '人员',
            href: '#'
        }]
    }, {
        component: 'div',
        onClick: '{{$openCustomer}}',
        children: [{
            component: 'img',
            src: '{{$getFunImg()}}'
        }, {
            component: 'a',
            children: '客户',
            href: '#'
        }]
    }, {
        component: 'div',
        onClick: '{{$openBOM}}',
        children: [{
            component: 'img',
            src: '{{$getFunImg()}}'
        }, {
            component: 'a',
            children: 'BOM',
            href: '#'
        }]
    }]
}

export {
    name,
    state,
    action,
    view
}