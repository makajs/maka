export default function customColumn(option) {
    var {
        bindPath, title, width = 130, flexGrow = 0, 
        align = 'left', component, fixed, _visible,footer, cellContent, ...ext
    } = option

    return {
        component: 'FDT.Column',
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
            children: cellContent,
            ...ext
        },
        fixed,
        footer,
        _visible
    }
}
