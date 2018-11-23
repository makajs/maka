import number from '../simple/number'

export default function numberFormItem(option) {
    var { title, required, component,  _for, _function, _visible, ...other } = option
    return {
        component: 'antd.Form.Item',
        label: title,
        required: required,
        children: number(other),
        _for,
        _function,
        _visible
    }
}
