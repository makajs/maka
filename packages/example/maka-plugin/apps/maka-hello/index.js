import pkgJson from './package.json'
import { actionMixin, registerPlugin } from 'maka'
import './style.less'

const name = pkgJson.name

const state = {
    data: {
        content: 'hello ',
        input: ''
    }
}

@actionMixin('base')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    onChange = (e) => {
        this.base.setState({ 'data.input': e.target.value })
        console.log(this.base.getState('data.input'))
    }


    registerPlugin = () => {
        registerPlugin('maka-plugin', 'maka-hello')

        this.base.setState({ 'data.forceUpdate': true }) //写什么无所谓，只为了更新状态让重新加载app并启用插件的部分
    }
}

const view = {
    component: 'div',
    className: 'maka-hello',
    children: [{
        component: 'div',
        children: '{{data.content + data.input}}'
    }, {
        component: 'input',
        placeholder: 'world',
        value: '{{data.input}}',
        onChange: '{{$onChange}}'
    }, {
        component: 'button',
        children: 'register plugin',
        onClick: '{{$registerPlugin}}'
    }]
}

export {
    name,
    state,
    action,
    view
}