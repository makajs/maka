import helper from '../../helper'

const {fixPath} = helper

export default function inputColumn(option) {
    var {
        bindPath, bindField, title, width = 130, flexGrow = 0,
        component, required, fixed, fixedRight,  _visible, footer, 
        editClassNamePrefix, startEditIndex, editIndex,editableColumnCount, ...ext
    } = option

    if (editClassNamePrefix && (startEditIndex || startEditIndex === 0) && (editIndex || editIndex === 0) && editableColumnCount) {
        var editClassName = `'${editClassNamePrefix}-' + (row.rowIndex*${editableColumnCount} + ${startEditIndex + editIndex})` 
        if(ext.className){
            ext.className = `{{'${ext.className}' ${editClassName}}}`
        }
        else{
            ext.className = `{{${editClassName}}}`
        }
    }

    var value = `{{{
        var _rowIndex = row.rowIndex
        return ${fixPath(`${bindPath}[_rowIndex].${bindField}`)}
    }}}`

    return {
        component: 'FDT.Column',
        columnKey: bindField,
        flexGrow: flexGrow,
        width: width,
        header: {
            component: 'FDT.Cell',
            children: [{
                component: 'label',
                className: required ? 'ant-form-item-required' : '',
                children: title
            }]
        },
        cell: {
            _function: '(row)',
            component: "FDT.Cell",
            className: `fdt-cell`,
            children:{
                component: 'antd.Input',
                value,
                onChange: `{{(e)=>{
                    var path = '${bindPath}.' + row.rowIndex + '.${bindField}'
                    $base.setState({[path]:e.target.value})
                }}}`,
                ...ext
            }
        },
        footer,
        fixed,
        fixedRight,
        _visible
    }
}

