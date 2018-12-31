import React, { Component } from 'react'
import classNames from 'classnames'

export default class cellComponent extends React.PureComponent {
	render() {
		const {
      		height,
			width,
			style,
			className,
			align,
			children,
			columnKey,
			...other
    	} = this.props

		let cls = classNames({
			'fdt-cell': true,
			[`fdt-cell-${align}`]: !!align,
			[className]: !!className
		})

		var innerStyle = {
			height,
			width,
			...style,
		}

		return (
			<div {...other} className={cls} style={innerStyle}>
				{children}
			</div>
		)
	}
}