import pkgJson from './package.json'
import { actionMixin } from 'maka'
import './style.less'

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

    onInit = () =>{
        this.base.setState({
            'data.iframeSrc':  this.component.props.iframeSrc
        })
    }

    getStyle = () => {
        if( this.component.props.isHide ){
            return { height: 0}
        }
    }
}

const view ={
    component: 'div',
    className: 'base-iframe',
    style: '{{$getStyle()}}',
    children: [{
        name: 'content',
        component: 'iframe',
        src: '{{data.iframeSrc}}',
    }]
}

export {
    name,
    state,
    action,
    view
}