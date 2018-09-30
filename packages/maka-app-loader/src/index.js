import React from 'react'
import { render } from 'react-dom'
import AppLoader from './appLoader'
import appMiddleware from './appMiddleware'
import reducer from './reducer'
import config from './config'
import start from './start'
import appFactory from './appFactory'
import init from './init'
import loadApp from './loadApp'

const {registerApp, registerApps, getApp, getApps, existsApp} = appFactory

export default {
	AppLoader,
	appMiddleware,
	reducer,
	config,
	init,
	start,
	registerApp,
	registerApps,
	getApp,
	getApps,
	existsApp,
	loadApp
}

export {
	AppLoader,
	appMiddleware,
	reducer,
	config,
	init,
	start,
	registerApp,
	registerApps,
	getApp,
	getApps,
	existsApp,
	loadApp
}