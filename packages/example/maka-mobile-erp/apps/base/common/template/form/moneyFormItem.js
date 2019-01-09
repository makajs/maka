export default function moneyFormItem(option) {
    var { title, required, inputType, children, _for, _function, _visible, ...other } = option
 
    inputType = inputType || 'money' //phone password number digit money

    return {
        component: 'antd.InputItem', 
        type: inputType,
        required: required,
        children: children || title,
        _for,
        _function,
        _visible
    }
}
