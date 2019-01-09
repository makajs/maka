export default function datePickerFormItem(option) {
    var { title, required, mode, children, _for, _function, _visible, ...other } = option

    mode = mode || 'date'  //date time datetime year month
    
    return {
        component: 'antd.DatePicker', 
        required: required,
        mode: mode,
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