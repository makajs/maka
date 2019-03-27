import React, { Component } from 'react'
import {getComponent} from 'maka'
import ReactDOM from 'react-dom'

class DrawerComponent extends Component {
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
		this.setState({ visible: false })

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
		this.setState({ visible: false })

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
		var Drawer = getComponent('antd.Drawer') 
		var Button = getComponent('antd.Button') 

		return (
			<Drawer
				visible
				{...otherProps}
				onClose={false}
				onClose={this.handleCancel}
			>
			<div children={children} /> 
			<div
				style={{
				position: 'absolute',
				bottom: 0,
				width: '100%',
				borderTop: '1px solid #e8e8e8',
				padding: '10px 16px',
				textAlign: 'right',
				left: 0,
				background: '#fff',
				borderRadius: '0 0 4px 4px',
				}}
			>
            <Button style={{ marginRight: 8, }}
              onClick={this.handleCancel}
            >{otherProps.cancelText||'取消'}
            </Button>
            <Button onClick={this.handleOk} type="primary">
			{otherProps.okText||'确定'}
            </Button>
          </div>

			</Drawer>
		)
	}
}

DrawerComponent.newInstance = (props) => {
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
					<DrawerComponent
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

let d = window.__Drawer

if (!d) {
	d = DrawerComponent.newInstance()
	window.__Drawer = d
}

export default d