import helper from '../../helper'

const { fixPath } = helper
export default function isSelectedColumn(option) {
    var {
        bindPath, bindField = 'isSelected', title, width, flexGrow = 0, required,
        fixed = true, disabled, align = 'center', component, _visible, footer, ...ext
    } = option

    return {
        component: 'FDT.Column',
        columnKey: bindPath,
        width: 40,
        header: {
            component: 'FDT.Cell',
            children: {
                component: 'antd.Checkbox',
                checked: `{{$tableHelper.isSelectAll('${bindPath}', 'isSelected')}}`,
                onChange: `{{$tableHelper.selectAll('${bindPath}', 'isSelected')}}`
            }
        },
        cell: {
            _function: '(row)',
            component: 'FDT.Cell',
            children: {
                component: 'antd.Checkbox',
                checked: `{{{
                    var _rowIndex = row.rowIndex
                    return ${fixPath(`${bindPath}[_rowIndex].${bindField}`)}
                }}}`,
                onChange: `{{ (e) => $base.ss({['${bindPath}.' + row.rowIndex + '.${bindField}']:e.target.checked }) }}`,
            },
            ...ext
        },
        fixed,
        footer,
        _visible
    }
}


