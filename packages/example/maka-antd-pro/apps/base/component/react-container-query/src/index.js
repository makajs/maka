import pkgJson from '../package.json'
import { actionMixin, registerComponent, registerAction } from 'maka'
import * as ReactContainerQuery from 'react-container-query/lib'
import classnames from 'classnames'
import './style.less'

const name = pkgJson.name

registerComponent('ReactContainerQuery', ReactContainerQuery)
registerAction('classnames', classnames, true)

const state = {
    data: {
    }
}

@actionMixin('base', 'classnames')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }
}

const view = {
    component: 'ReactContainerQuery.ContainerQuery',
    query: {
        'width-between-400-and-599': {
            minWidth: 400,
            maxWidth: 599
        },
        'width-larger-than-600': {
            minWidth: 600,
        }
    },
    children: {
        _function: '(clsName)',
        component: 'div',
        className: '{{$classnames(clsName)}}',
        children: '{{$classnames(clsName)}}'
    }
}

export {
    name,
    state,
    action,
    view
}