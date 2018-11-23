import helper from '../helper'

const {fixPath} = helper

//{component:'tpl.Checkbox', bindPath: 'data.form.cb' }
export default function checkbox(option) {
    var { bindPath, disabled, component, ...ext } = option

    return {
        component: 'antd.Checkbox',
        checked: `{{${fixPath(bindPath)}}}`,
        onChange: disabled ? undefined : `{{(e)=>$base.setState({'${bindPath}':e.target.checked})}}`,
        disabled,
        ...ext
    }
}
