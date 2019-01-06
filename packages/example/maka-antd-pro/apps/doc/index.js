import pkgJson from './package.json'
import { actionMixin, load, getComponent } from 'maka'
import './style.less'
import demoDoc from '../../README.md'

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

    onInit = () => {
        this.base.ss({'data.content': demoDoc})
    }

    getCodeBlock = () => {
       var component = getComponent('CodeBlock') 
       console.log(component)
        return component
    }
}

const view = {
    component: 'div',
    className: 'doc',
    children: [{
        component: 'MarkdownViewer',
        className: 'markdown-body',
        source: '{{data.content}}',
        skipHtml: false,
        escapeHtml: false,
        renderers: {code: '{{$getCodeBlock()}}'},
    }]
}

async function beforeRegister() {
    await load(['markdown'])
  
}
export {
    name,
    state,
    action,
    view,
    beforeRegister
}