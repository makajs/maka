
import checkboxFormItem from './checkboxFormItem'
import datePickerFormItem from './datePickerFormItem'
import inputFormItem from './inputFormItem'
import moneyFormItem from './moneyFormItem'
import numberFormItem from './numberFormItem'
import selectFormItem from './selectFormItem'

export default function form({ className = 'simple-modal-card-form', children, component,
    editClassNamePrefix, startEditIndex, ...other }) {
    var ret = {
        component: 'List',
        className: className,
        ...other
    }

    var newChildren = []

    children.forEach(child => {
        let x, {type, component, ...other} = child
        other.editClassNamePrefix = editClassNamePrefix
        other.startEditIndex = startEditIndex

        if(!component && type){
            switch (type) {
                case 'input':
                    x = inputFormItem(other)
                    break;
                case 'number':
                    x = numberFormItem(other)
                    break;
                case 'checkbox':
                    x = checkboxFormItem(other)
                    break;
                case 'datePicker':
                    x = datePickerFormItem(other)
                    break;
                case 'money':
                    x = moneyFormItem(other)
                    break; 
                case 'select':
                    x = selectFormItem(other)
                    break;
                default:
                    x = child
                    break;
            }
            newChildren.push(x)
        }
        else{
            newChildren.push(child)
        }
    })

    ret.children = newChildren
    return ret
}


