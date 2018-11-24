import helper from '../helper'
const {fixPath} = helper

//{component:'tpl.MonthPicker', bindPath: 'data.form.date' }
export default function monthPicker(option) {
    var { name, bindPath, disabled, component, ...ext } = option
    return {
        component: 'antd.DatePicker.MonthPicker',
        value: `{{${fixPath(bindPath)}}}`,
        onChange: disabled ? undefined : `{{(v)=>$base.setState({'${bindPath}':v})}}`,
        disabled,
        ...ext
    }
}
