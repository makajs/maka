export default function addAndDelColumn(option) {
    var {
        bindPath, title, width = 50, flexGrow = 0,
        align = 'left', component, fixed, fixedRight = true,
        _visible, footer, onHeaderAddRow, onAddRow, onDelRow, ...ext
    } = option

    return {
        component: 'FDT.Column',
        flexGrow: flexGrow,
        width: width,
        header: {
            component: 'FDT.Cell',
            children: [{
                component: 'antd.Icon',
                className: 'icon-softly',
                type: 'plus',
                title: '增行',
                onClick: onHeaderAddRow
            }]
        },
        cell: {
            _function: '(row)',
            component: "FDT.Cell",
            className: `fdt-cell fdt-cell-${align}`,
            children: [{
                component: 'antd.Icon',
                className: 'icon-softly',
                type: 'plus',
                title: '增行',
                style:{marginRight:4},
                onClick: onAddRow
            }, {
                component: 'antd.Icon',
                className: 'icon-showy',
                type: 'close',
                title: '删行',
                onClick: onDelRow
            }],
            ...ext
        },
        fixed,
        footer,
        fixedRight,
        _visible
    }
}
