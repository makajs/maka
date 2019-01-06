import pkgJson from '../package.json'
import { actionMixin, registerComponent } from 'maka'

import { Controlled as CodeMirror } from 'react-codemirror2'

import "codemirror/theme/material.css"
import "codemirror/lib/codemirror.css"
import './style.less'
const name = pkgJson.name



registerComponent('CodeMirror', CodeMirror)

const state = {
    data: {
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
}

const view = {
    component: 'div',
    className: 'code-mirror',
    children: [{
        component: 'CodeMirror',
        options: {
            mode: 'markdown',
            theme: 'material',
            lineNumbers: true
        },
        value: '{{data.content}}',
        onBeforeChange: `{{(e,d,v)=>$base.ss({'data.content': v})}}`
    }]
}

export {
    name,
    state,
    action,
    view
}