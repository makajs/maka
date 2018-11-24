import React, { Component } from 'react'
import {getComponent} from 'maka'
import ReactDOM from 'react-dom'
import info from './info'
import error from './error'
import success from './success'
import warning from './warning'
import confirm from './confirm'

class ModalComponent extends Component {
	state = {
	}

	setOkListener = (cb) => {
		this.setState({ okListener: cb })
	}

	setCancelListener = (cb) => {
		this.setState({ cancelListener: cb })
	}


	handleOk = async () => {
		let listener = this.state.okListener, ret

		if (listener) {
			ret = await listener()
			if (ret === false) {
				return
			}
		}

		this.props.onOk && this.props.onOk(ret)
	}

	handleCancel = async () => {
		let listener = this.state.cancelListener, ret

		if (listener) {
			ret = await listener()
			if (ret === false) {
				return
			}
		}

		this.props.onCancel && this.props.onCancel(ret)
	}

	render() {
		var { children, ...otherProps } = this.props
		children = React.cloneElement(children, {
			setOkListener: this.setOkListener,
			setCancelLister: this.setCancelListener,
			modalCancel: this.handleCancel,
			modalOk: this.handleOk
		})
		var Modal = getComponent('antd.Modal')
		return (
			<Modal
				visible
				{...otherProps}
				children={children}
				onOk={this.handleOk}
				onCancel={this.handleCancel}
			/>
		)
	}
}

ModalComponent.newInstance = (props) => {
	return {
		show(properties) {
			const div = document.createElement('div')

			return new Promise((resolve, reject) => {
				let handleCancel = (ret) => {
					ReactDOM.unmountComponentAtNode(div)
					try {
						document.body.removeChild(div)
					}
					catch (err) { }
					resolve(ret || false)
				}

				let handleOk = (ret) => {
					ReactDOM.unmountComponentAtNode(div)
					try {
						document.body.removeChild(div)
					}
					catch (err) { }
					resolve(ret || true)
				}

				const props = properties || {}

				props.cancelText = props.cancelText || '取消'
				props.okText = props.okText || '确定'
				
				document.body.appendChild(div)

				ReactDOM.render(
					<ModalComponent
						visible
						maskClosable={false}
						{...props}
						onCancel={handleCancel}
						onOk={handleOk} />
					, div)

			})
		}
	}
}

let m = window.__Modal

if (!m) {
	m = ModalComponent.newInstance()
	window.__Modal = m
}

m.info = info
m.success = success
m.error = error
m.warning = warning
m.confirm = confirm

export default m