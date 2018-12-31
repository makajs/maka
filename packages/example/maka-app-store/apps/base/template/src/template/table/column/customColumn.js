export default function customColumn(option) {
    var {
        bindPath, title, width = 130, flexGrow = 0, 
        align = 'left', component, required, fixed, fixedRight,  _visible,footer, cellContent, ...ext
    } = option

    return {
        component: 'FDT.Column',
        flexGrow: flexGrow,
        width: width,
        header: {
            component: 'FDT.Cell',
            children: [{
                component: 'label',
                className: required ? 'ant-form-item-required' : '',
                children: title,
              
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
        fixedRight,
        _visible
    }
}
