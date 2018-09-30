import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import maka from './maka'
import config from './config'
import utils from '@makajs/utils'

export default function wrapper(option) {
	return WrappedComponent => {
		return class internal extends Component {

			constructor(props) {
				super(props)
				this.state = { hasError: false }
			}

			componentWillMount() {
				this.props.componentWillMount && this.props.componentWillMount()
			}

			componentDidMount() {
				this.props.initView && this.props.initView(this)
				this.props.componentDidMount && this.props.componentDidMount()
			}

			shouldComponentUpdate(nextProps, nextState) {
				if (this.props.shouldComponentUpdate
					&& this.props.shouldComponentUpdate(nextProps, nextState) === true)
					return true

				if (nextState.hasError != this.state.hasError) {
					return true
				}

				for (var o in this.props) {
					if (this.props[o] != nextProps[o]) {
						return true
					}
				}
				return false
			}


			componentWillReceiveProps(nextProps) {
				if (this.state.hasError) {
					this.setState({ hasError: false, error: undefined })
				}

				this.props.componentWillReceiveProps
					&& this.props.componentWillReceiveProps(nextProps)
			}

			componentWillUpdate(nextProps, nextState) {
				this.props.componentWillUpdate
					&& this.props.componentWillUpdate(nextProps, nextState)
			}

			componentDidCatch(error, info) {
				utils.exception.error(error)
				this.setState({ hasError: true, error })

				this.props.componentDidCatch
					&& this.props.componentDidCatch(error, info)
			}


			componentWillUnmount() {
				this.props.unmount && this.props.unmount()
				this.props.componentWillUnmount
					&& this.props.componentWillUnmount()
			}

			componentDidUpdate() {
				this.props.componentDidUpdate
					&& this.props.componentDidUpdate()
			}

			render() {
				if (this.state.hasError) {
					return <div style={{ color: 'red' }}>{this.state.error && this.state.error.message}</div>
				}

				if (this.props.notRender === true || this.props._notRender === true)
					return null

				if (!WrappedComponent)
					return null

				if (!this.props.payload || !this.props.payload.get('data'))
					return null

				if (this.props.payload.getIn(['data', '_notRender']) === true)
					return null

				return <WrappedComponent {...this.props} maka={maka} />
			}
		}
	}
}

