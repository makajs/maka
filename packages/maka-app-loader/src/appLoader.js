import React from 'react'
import { Map } from 'immutable'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './action'
import PropTypes from 'prop-types'

class AppLoader extends React.Component {
	constructor(props, context) {
		super(props, context)
	}

	componentDidMount() {
		const {
			name: fullName,
			payload
		} = this.props

		if (!payload.get('@@require')) {
			this.props.loadApp(fullName)
		}
	}

	componentWillReceiveProps(nextProps) {
		const {
			name: fullName,
			payload
		} = nextProps

		if (!payload.get('@@require')) {
			this.props.loadApp(fullName, this.props.name)
		}
		else if (this.props.name != nextProps.name) {
			this.props.clearAppState(this.props.name)
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return true
	}

	componentWillUnmount() {
		const {
			name: fullName,
			payload
		} = this.props

		this.props.clearAppState(fullName)
	}

	render() {
		const {
			name: fullName,
			payload,
			...other
		} = this.props,

			ReduxConnector = payload.getIn(['@@require', 'container'])

		if (ReduxConnector) {
			return (
				<ReduxConnector
					store={this.context.store}
					{...other}
					payload={payload}
					key={fullName}
				/>
			)

		} else {
			return null
		}
	}
}

AppLoader.contextTypes = {
	store: PropTypes.object
}

export default connect((state, props) => {
	const payload = state.get(props.name)

	return {
		payload: payload || Map()
	}
},
	dispatch => ({
		...bindActionCreators(actions, dispatch)
	}), null, {
		withRef: true,
		pure: true
	}
)(AppLoader)