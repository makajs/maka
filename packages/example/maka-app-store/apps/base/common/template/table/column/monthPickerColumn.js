import helper from '../../helper'

const {fixPath} = helper

export default function monthPickerColumn(option) {
    var {
        bindPath, bindField, title, width = 130, flexGrow = 0,
        component, required, fixed, fixedRight,  _visible, footer, format, ...ext
    } = option

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
                component: 'antd.DatePicker.MonthPicker',
                value,
                onChange: `{{(v)=>{
                    var path = '${bindPath}.' + row.rowIndex + '.${bindField}'
                    $base.setState({[path]:v})
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

