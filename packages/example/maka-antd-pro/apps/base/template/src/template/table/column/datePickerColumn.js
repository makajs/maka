import helper from '../../helper'

const {fixPath} = helper

export default function datePickerColumn(option) {
    var {
        bindPath, bindField, title, width = 130, flexGrow = 0,
        component, required, fixed, fixedRight,   _visible, footer, format, ...ext
    } = option

    var value = `{{{
        var _rowIndex = row.rowIndex
        var v = ${fixPath(`${bindPath}[_rowIndex].${bindField}`)}
        return v && $moment(new Date(v))
    }}}`

    format = format || 'YYYY-MM-DD'

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
                component: 'antd.DatePicker',
                value,
                onChange: `{{(v)=>{
                    var path = '${bindPath}.' + row.rowIndex + '.${bindField}'
                    v = v && $moment(v).format('${format}')
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

