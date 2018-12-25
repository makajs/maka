export default function addAndDelColumn(option) {
    var {
        bindPath, title, width = 50, flexGrow = 0,
        align, component, fixed = true, fixedRight,
        _visible, footer, onDel, ...ext
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
            children: [{
                component: 'antd.Icon',
                className: 'icon-showy',
                type: 'close',
                title: '删除',
                onClick: onDel
            }],
            ...ext
        },
        fixed,
        footer,
        fixedRight,
        _visible
    }
}
