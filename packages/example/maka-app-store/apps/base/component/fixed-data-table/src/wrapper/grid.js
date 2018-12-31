import React from 'react'
import ReactDOM from 'react-dom'
import SequenceColumn from './sequenceColumn'
import FixedDataTable from 'maka-fixed-data-table'

export default function GridComponent(props) {
	let {
		key,
		rowsCount,
		headerHeight,
		rowHeight,
		groupHeaderHeight,
		footerHeight,
		width,
		height,
		heightFromRowsCount,
		readonly,
		onRowClick,
		onRowDoubleClick,
		onRowMouseEnter,
		onRowMouseLeave,
		onScrollEnd,
		scrollToRow,
		scrollToColumn,
		columns,
		...other
	} = props

	//高度根据行数计算
	if (heightFromRowsCount) {
		height = headerHeight + 2 + rowHeight * rowsCount + footerHeight
	}

	columns = [...columns]
	return (
		<FixedDataTable.Table
			{...other}
			key={key}
			rowsCount={(height == 0 || width == 0) ? 0 : rowsCount}
			headerHeight={headerHeight}
			rowHeight={rowHeight}
			groupHeaderHeight={groupHeaderHeight}
			footerHeight={footerHeight}
			width={width}
			height={height}
			scrollToRow={(height != 0 && width != 0) ? scrollToRow : undefined}
			scrollToColumn={(height != 0 && width != 0) ? scrollToColumn : undefined}
			onRowDoubleClick={readonly === false ? undefined : onRowDoubleClick}
			onRowClick={readonly === false ? undefined : onRowClick}
			onRowMouseEnter={readonly === false ? undefined : onRowMouseEnter}
			onRowMouseLeave={readonly === false ? undefined : onRowMouseLeave}
			scrollEnd={onScrollEnd}
		>
			{columns}
		</FixedDataTable.Table>
	)
}