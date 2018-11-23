import React from 'react'
import FixedDataTable from 'maka-fixed-data-table'


export default function SequenceColumn(props) {
	const {
		enableLink, //启用链接
		startSequence, //开始序号值
		enableAddDelrow, //启用增删行功能
		footer, //脚
		onAddrow, //增行事件
		onDelrow, //删行事件
		onClick, //点击事件
	} = props

	const getContent = (ps) => {

		//序号列显示内容，如果有开始序号那么加上
		let text = startSequence ? (startSequence + ps.rowIndex) + '' : (ps.rowIndex + 1) + ''

		let Icon = Maka.getComponent('antd.Icon')

		//启用链接，会响应click事件
		if (enableLink) {
			return (
				<div className='fdt-sequence-cell' onClick={onClick ? () => onClick(ps) : undefined}>
					{enableAddDelrow ? <Icon type="plus" className='fdt-add-row' onClick={() => onAddrow ? onAddrow(ps) : undefined} /> : null}
					<a>
						{text}
					</a>
					{enableAddDelrow ? <Icon type="close" className='fdt-remove-row' onClick={() => onDelrow ? onDelrow(ps) : undefined} /> : null}
				</div>
			)
		}

		return <div className='fdt-sequence-cell'>
			{enableAddDelrow ? <Icon type="plus" className='fdt-add-row' onClick={() => onAddrow ? onAddrow(ps) : undefined} /> : null}
			<a style={{ color: "#444444", cursor: "default" }}>
				{text}
			</a>
			{enableAddDelrow ? <Icon type="close" className='fdt-remove-row' onClick={() => onDelrow ? onDelrow(ps) : undefined} /> : null}
		</div>
	}


	var Column = FixedDataTable.Column
	var Cell = FixedDataTable.Cell
	return (
		<Column
			key="_sequence"
			width={42}
			fixed={true}
			cell={ps => getContent(ps)}
			header={
				<Cell>序号</Cell>
			}
			footer={footer}
		/>
	)


}

