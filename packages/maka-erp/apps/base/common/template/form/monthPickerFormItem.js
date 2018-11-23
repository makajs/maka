import monthPicker from '../simple/monthPicker'

export default function monthPickerFormItem(option) {
    var { title, required, component, _for, _function, _visible, ...other } = option
    return {
        component: 'antd.Form.Item',
        label: title,
        required: required,
        children: monthPicker(other),
        _for,
        _function,
        _visible
    }
}