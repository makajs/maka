import checkbox from '../simple/checkbox'

export default function checkboxFormItem(option) {
    var { title, required, component,editClassNamePrefix, startEditIndex, editIndex, _for, _function, _visible, ...other } = option
    if (editClassNamePrefix && (startEditIndex || startEditIndex === 0) && (editIndex || editIndex === 0)) {
        var editClassName = `${editClassNamePrefix}-${startEditIndex + editIndex}`
        other.className = other.className ? other.className + ' ' + editClassName : editClassName
    }
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
