import datePicker from '../simple/datePicker'

export default function datePickerFormItem(option) {
    var {  title, required, component,  _for, _function, _visible, ...other } = option
    return {
        component: 'antd.Form.Item',
        label: title,
        required: required,
        children: datePicker(other),
        _for,
        _function,
        _visible
    }
}