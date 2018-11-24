import helper from '../helper'

const {fixPath} = helper

//{component:'tpl.DatePicker', bindPath: 'data.form.date' }
export default function datePicker(option) {
    var {  bindPath, disabled, component,format, ...ext } = option
    format = format || 'YYYY-MM-DD'
    return {
        component: 'antd.DatePicker',
        value: `{{{
            var v = ${fixPath(bindPath)}
            return v && $moment(new Date(v))
        }}}`,
        onChange: disabled ? undefined : `{{(v)=>{
            var v = v && $moment(v).format('${format}')
            $base.setState({'${bindPath}': v})
        }}}`,
        disabled,
        format,
        ...ext
    }
}
