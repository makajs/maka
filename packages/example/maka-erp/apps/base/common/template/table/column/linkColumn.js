import helper from '../../helper'

const { fixPath } = helper

export default function linkColumn(option) {
    var {
        bindPath, bindField, title, width = 130, flexGrow = 0, onClick,
        align = 'left', component, fixed, _visible,footer, ...ext
    } = option

    return {
        component: 'FDT.Column',
        columnKey: bindField,
        flexGrow: flexGrow,
        width: width,
        header: {
            component: 'FDT.Cell',
            children: [{
                component: 'label',
                children: title
            }]
        },
        cell: {
            _function: '(row)',
            component: "FDT.Cell",
            className: `fdt-cell fdt-cell-${align}`,
            children: {
                component: 'a',
                children: `{{{
                    var _rowIndex = row.rowIndex
                    return ${fixPath(`${bindPath}[_rowIndex].${bindField}`)}
                }}}`,
                onClick: onClick ? `{{$${onClick}(${bindPath}[row.rowIndex])}}` : undefined
            },
            ...ext
        },
        fixed,
        footer,
        _visible
    }
}
