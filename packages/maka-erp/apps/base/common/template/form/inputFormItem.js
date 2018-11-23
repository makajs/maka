import input from '../simple/input'

export default function inputFormItem(option) {
    var { title, required, component,  _for, _function, _visible,...other } = option
    return {
        component: 'antd.Form.Item',
        label: title,
        required: required,
        children: input(other),
        _for,
        _function,
        _visible
    }
}
