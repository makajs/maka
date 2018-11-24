import select from '../simple/select'

export default function selectFormItem(option) {
    var { title, required, component, _for, _function, _visible, ...other } = option
    return {
        component: 'antd.Form.Item',
        label: title,
        required: required,
        children: select(other),
        _for,
        _function,
        _visible
    }
}