import helper from '../helper'

const {fixPath} = helper

//{component:'tpl.Select', bindPath: 'data.form.aa', onLoadOption:'{{$loadOption}}' }
export default function select(option) {
    var { bindPath, component, ...ext } = option

    return {
        component: 'ctrl.Select',
        showSearch: true,
        dropdownStyle: { maxHeight: 400, overflow: 'auto' },
        notFoundContent: ' ',
        allowClear: true,
        value: `{{${fixPath(bindPath)}}}`,
        onChange: `{{(v)=>$base.setState({'${bindPath}': v })}}`,
        ...ext
    }
}
