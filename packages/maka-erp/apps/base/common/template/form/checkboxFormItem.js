import checkbox from '../simple/checkbox'

export default function checkboxFormItem(option) {
    var { title, required, component, _for, _function, _visible, ...other } = option
    return {
        component: 'antd.Form.Item',
        label: title,
        required: required,
        children: checkbox(other),
        _for,
        _function,
        _visible
    }
}
