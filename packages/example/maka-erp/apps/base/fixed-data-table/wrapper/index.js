import React from 'react'
import AutoSizer from './autoSizer'
import Grid from './grid'
import omit from 'omit.js'
import classNames from 'classnames'

import Cell from './cell'
import TextCell from './textCell'
import FixedDataTable from 'maka-fixed-data-table'

function getInternalGrid(props, width, height) {

    const enableResizeColumn = !!props.enableResizeColumn
    var resizeProps = {}, columns = []
    if (enableResizeColumn && props.onColumnResizeEndCallback) {
        resizeProps = {
            isColumnResizing: false,
            onColumnResizeEndCallback: props.onColumnResizeEndCallback
        }

        props.columns && props.columns.forEach((c, index) => {
            if (index < props.columns.length - 1) {
                var cw = props.columnWidths && props.columnWidths[c.props.columnKey]
                var p = {
                    isResizable: c.props.isResizeable === false ? false : true
                }
                if (cw) {
                    p.width = cw
                    p.flexGrow = 0
                }
                c = React.cloneElement(c, p)
            }
            columns.push(c)
        })
    }
    else {
        columns = props.columns
    }
    return (
        Grid({
            ...omit(props, ['className']),
            width,
            height,
            ...resizeProps,
            columns
        })
    )
}

function FDT(props) {
    let className = classNames({
        'fdt': true,
        [props.className]: !!props.className,
    })

    const width = props.isFix ? props.width : 0
    const height = props.isFix ? props.height : 0

    return (
        <div className={className} onKeyDown={props.onKeyDown} onKeyUp={props.onKeyUp}>
            <AutoSizer >
                {({ width, height }) => getInternalGrid(props, width, height)}
            </AutoSizer>
        </div>

    )
}

export default {
    ...FixedDataTable,
    Table:FDT,
    Cell,
    TextCell
}