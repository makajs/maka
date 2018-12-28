import pkgJson from './package.json'
import { actionMixin, registerAction, registerComponent } from 'maka'
import JSON5 from 'json5'
import beautify from 'js-beautify/js/lib/beautifier.min'
import JsonViewer from 'react-json-view'
import './style.less'

const name = pkgJson.name

registerAction('beautify', beautify, true)
registerAction('json5', JSON5, true)
registerComponent('JsonViewer', JsonViewer)


const strJson = beautify.js(JSON.stringify(JSON5.parse(`
{
    aa:1,
    bb:2
}`)))


const state = {
    data: {
        json: strJson
    }
}

@actionMixin('base')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }


    onViewerChange = (e) => {
        this.base.setState({
            'data.json': beautify.js(JSON.stringify(e.updated_src))
        })
    }

    getViewerSrc = (data) => {
        var json = {}
        try {
            json = JSON5.parse(data.json)
        }
        catch (e) {
            json = { error: e.message }
        }
        json._notParse = true
        return json
    }
}

const view = {
    component: 'div',
    className: 'json-viewer',
    children: [{
        component: 'JsonViewer',
        theme: 'monokai',
        displayDataTypes: false,
        name: false,
        onAdd: '{{$onViewerChange}}',
        onEdit: '{{$onViewerChange}}',
        onDelete: '{{$onViewerChange}}',
        src: '{{$getViewerSrc(data)}}'
    }]
}

export {
    name,
    state,
    action,
    view
}