import pkgJson from '../package.json'
import { actionMixin, load } from 'maka'
import './style.less'

const name = pkgJson.name

const state = {
    data: {
        content: 'hello ',
        input: ''
    }
}

@actionMixin('base', 'i18n')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }
    getProps = () => {
        return { 
            desc: this.component.props.desc || 'app.exception.description.403', 
            type: this.component.props.type || 403 
        }
    }

}

const view = {
    component: 'antdpro.Exception',
    className: 'common-exception',
    type: '{{{debugger; return $getProps().type}}}',
    desc: '{{$i18n($getProps().desc)}}',
}

async function beforeRegister() {
    await load(['antd', 'i18n'])
}
export {
    name,
    state,
    action,
    view,
    beforeRegister
}