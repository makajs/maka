import helper from '../../helper'

const {fixPath} = helper

export default function checkboxColumn(option) {
    var {
        bindPath, bindField, title, width = 130, flexGrow = 0,
        component, required, fixed, fixedRight,  _visible, footer, ...ext
    } = option

    var checked = `{{{
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
                children: title,
                className: required ? 'ant-form-item-required' : '',
            }]
        },
        cell: {
            _function: '(row)',
            component: "FDT.Cell",
            className: `fdt-cell`,
            children:{
                component: 'antd.Checkbox',
                checked,
                onChange: `{{(e)=>{
                    var path = '${bindPath}.' + row.rowIndex + '.${bindField}'
                    $base.setState({[path]:e.target.checked})
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

