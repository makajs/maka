export default function numberFormItem(option) {
    var { title, required, inputType, children, _for, _function, _visible, ...other } = option
 
    inputType = inputType || 'number' //phone password number digit money

    return {
        component: 'antd.InputItem', 
        type: inputType,
        required: required,
        children: children || title,
        _for,
        _function,
        _visible,
        ...other
    }
}
