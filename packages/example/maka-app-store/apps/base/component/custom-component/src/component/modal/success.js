import React, { Component } from 'react'
import { getComponent } from 'maka'
export default function success(props) {
	return new Promise((resolve, reject) => {
		let handleOk = () => {
			resolve(true)
		}

		let handleCancel = () => {
			resolve(false)
		}

		props.onOk = handleOk
		props.onCancel = handleCancel

		var Modal = getComponent('antd.Modal')
		Modal.success(props)
	})
}
