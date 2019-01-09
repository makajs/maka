
export default function checkboxFormItem(option) {
    var { title, required, children, _for, _function, _visible, ...other } = option
     
    return {
        component: 'antd.CheckboxItem',  
        children: children || title,
        _for,
        _function,
        _visible
    }
}
