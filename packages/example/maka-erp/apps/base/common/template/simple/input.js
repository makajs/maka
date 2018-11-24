import helper from '../helper'
const {fixPath} = helper

//{component:'tpl.Input', bindPath: 'data.form.name' }
export default function input(option) {
    var { bindPath, disabled, component, ...ext } = option
    return {
        component: 'antd.Input',
        value: `{{${fixPath(bindPath)}}}`,
        onChange: disabled ? undefined : `{{(e)=>$base.setState({'${bindPath}':e.target.value})}}`,
        disabled,
        ...ext
    }
}
