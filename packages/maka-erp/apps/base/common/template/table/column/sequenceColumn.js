export default function sequenceColumn(option) {
    var {
        title, width = 40, flexGrow = 0, 
        align = 'center', component, fixed  = true,
        paginationPath, _visible, footer, ...ext
    } = option

    return {
        component: 'FDT.Column',
        columnKey: 'sequence',
        flexGrow: flexGrow,
        width: width,
        header: {
            component: 'FDT.Cell',
            children: [{
                component: 'label',
                children: '序号'
            }]
        },
        cell: {
            _function: '(row)',
            component: "FDT.Cell",
            className: `fdt-cell fdt-cell-${align}`,
            children: {
                component: 'span',
                children: `{{{
                    var pagination = ${paginationPath}
                    var startSequence = pagination ? (pagination.current -1 ) * pagination.pageSize + 1 : 1
                    return startSequence + row.rowIndex
                }}}`,
            },
            ...ext
        },
        footer,
        fixed,
        _visible
    }
}
