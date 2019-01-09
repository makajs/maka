 
export default function selectFormItem(option) {
    var { title, required, children, _for, _function, _visible, ...other } = option
 
    return {
        component: 'antd.Picker',
        label: title,
        required: required,
        children: children || {
            component:'antd.List.Item',
            arrow:'horizontal',
            children: children || title 
        },
        _for,
        _function,
        _visible
    }
}