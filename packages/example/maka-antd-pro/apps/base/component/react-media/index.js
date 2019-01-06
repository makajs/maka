import pkgJson from './package.json'
import { actionMixin, registerComponent } from 'maka'
import './style.less'
import Media from 'react-media';

const name = pkgJson.name

registerComponent('Media', Media)

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
    className: 'react-media',
    children: [{
        component: 'Media',
        query:"(max-width: 599px)",
        children: {
            _function: '(matches)',
            component: 'p',
            children:`{{matches?'The document is less than 600px wide.': 'The document is at least 600px wide.'}}`
        }
    }]
}

export {
    name,
    state,
    action,
    view
}