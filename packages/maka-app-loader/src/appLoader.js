import React from 'react'
import { Map } from 'immutable'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './action'
import PropTypes from 'prop-types'
import pluginFactory from './pluginFactory'
import parseName from './parseName'

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

		var req = payload.get('@@require')
		if (!req) {
			this.props.loadApp(fullName, this.props.name)
		}
		else if (this.props.name != nextProps.name) {
			if(this.props._notClearAppState !== true){
				this.props.clearAppState(this.props.name) 
			}
		}
		else{
			let cachePlugins = req.get('plugins').toJS()
			let parsedName = parseName(fullName)

			let plugins = pluginFactory.getPluginNames(parsedName.name) || []

			if( JSON.stringify(cachePlugins.sort()) !== JSON.stringify(plugins.sort()) ){
				this.props.loadPlugin(fullName, this.props.name)
			}
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

		if(this.props._notClearAppState !== true ){
			this.props.clearAppState(fullName)
		}
		else{
			var parentApp = this.props._parentApp
			if(parentApp){
				if(!window.MAKA.store.getState().getIn([parentApp,'data'])){
					this.props.clearAppState(fullName)
				}
			}
		}
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
},dispatch => ({
		...bindActionCreators(actions, dispatch)
	}), null, {
		//withRef: true,
		pure: true
	}
)(AppLoader)