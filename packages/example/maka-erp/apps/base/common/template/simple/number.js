import helper from '../helper'

const {fixPath} = helper

//{component:'tpl.Number', bindPath: 'data.form.count' }
export default function input(option) {
    var { bindPath, disabled, component, ...ext } = option

    return {
        component: 'ctrl.InputNumber',
        value: `{{${fixPath(bindPath)}}}`,
        onChange: disabled ? undefined : `{{(v)=>$base.setState({'${bindPath}':v})}}`,
        disabled,
        ...ext
    }
}
