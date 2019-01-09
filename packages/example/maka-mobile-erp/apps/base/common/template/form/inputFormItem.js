
export default function inputFormItem(option) {
    var { title, required, inputType, children, _for, _function, _visible, ...other } = option
 
    //inputType :  phone password number digit money
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
