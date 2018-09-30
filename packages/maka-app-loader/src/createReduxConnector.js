import React from 'react'
import { connect } from 'react-redux'

export default function createReduxConnector(WrappedComponent, mapStateToProps, mapDispatchToProps, mergeProps, options) {
	return connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(WrappedComponent)
}