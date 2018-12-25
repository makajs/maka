import React, { Component } from 'react'
import classNames from 'classnames'

export default class textCellComponent extends React.PureComponent {
    render() {
        let {
            height,
            width,
            style,
            className,
            align,
            sand,
            value,
            dataType,
            precision,
            enableTooltip,
            enableEllipsis,
            ...other
        } = this.props

        let cls = classNames({
            'fdt-cell': true,
            [`fdt-cell-${align}`]: !!align,
            [className]: !!className
        })

        let innerStyle = {
            height,
            width,
            ...style,
        }

        switch (dataType) {
            case 'bool':
                value = (value == undefined || value == false) ? 'No' : 'Yes'
                break
            case 'float':
                if (precision && (!!value)) {
                    value = parseFloat(value).toFixed(precision)
                }
                break
        }

        if (value == null || value == undefined) {
            value = ''
        }

        value = value + ''

        if (sand) {
            value = sand(value)
        }

        let ext = {}
        if (enableTooltip) {
            ext.title = value
        }

        if (enableEllipsis) {
            ext.title = value
            value = [<span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{value}</span>]
        }

        return (
            <div {...other} className={cls} style={innerStyle} {...ext}>
                {value}
            </div>
        )
    }
}