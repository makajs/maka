import React from 'react'
import * as common from './common'
import utils from '@makajs/utils'
import { fromJS } from 'immutable'
import contextManager from './context'
import config from './config'

const appInstances = {}

export default class action {
	constructor(option) {
		this.appInfo = option.appInfo
		this.meta = fromJS(option.appInfo.view)
		this.cache = {}

		common.setMeta(option.appInfo)
	}

	config = ({ metaHandlers }) => {
		this.metaHandlers = metaHandlers
	}

	initView = (component, injections) => {
		this.component = component
		this.injections = injections
		this.metaHandlers.component = this.component
		this.metaHandlers.injections = this.injections

		appInstances[component.props.appFullName] = {
			appName: component.props.appName,
			appQuery: component.props.appQuery,
			//app: config.getApps()[component.props.appName],
			instance: component
		}

		var initState = (this.appInfo.state && this.appInfo.state.data) || {}
		this.ss('data', fromJS(initState))

		if (this.metaHandlers && this.metaHandlers.onInit) {
			this.metaHandlers.onInit({ component, injections })
		}
	}

	unmount = () => {
		delete appInstances[this.component.appFullName]
	}

	componentWillMount = () => {
		this.metaHandlers
			&& this.metaHandlers['componentWillMount']
			&& this.metaHandlers['componentWillMount'] != this.componentWillMount
			&& this.metaHandlers['componentWillMount']()
	}

	componentDidMount = () => {
		this.metaHandlers
			&& this.metaHandlers['componentDidMount']
			&& this.metaHandlers['componentDidMount'] != this.componentDidMount
			&& this.metaHandlers['componentDidMount']()
	}

	shouldComponentUpdate = (nextProps, nextState) => {
		this.metaHandlers
			&& this.metaHandlers['shouldComponentUpdate']
			&& this.metaHandlers['shouldComponentUpdate'] != this.shouldComponentUpdate
			&& this.metaHandlers['shouldComponentUpdate'](nextProps, nextState)
	}

	componentWillReceiveProps = (nextProps) => {
		this.metaHandlers
			&& this.metaHandlers['componentWillReceiveProps']
			&& this.metaHandlers['componentWillReceiveProps'] != this.componentWillReceiveProps
			&& this.metaHandlers['componentWillReceiveProps'](nextProps)
	}

	componentWillUpdate = (nextProps, nextState) => {
		this.metaHandlers
			&& this.metaHandlers['componentWillUpdate']
			&& this.metaHandlers['componentWillUpdate'] != this.componentWillUpdate
			&& this.metaHandlers['componentWillUpdate'](nextProps, nextState)
	}

	componentDidCatch = (error, info) => {
		this.metaHandlers
			&& this.metaHandlers['componentDidCatch']
			&& this.metaHandlers['componentDidCatch'] != this.componentDidCatch
			&& this.metaHandlers['componentDidCatch'](error, info)
	}

	componentWillUnmount = () => {
		this.metaHandlers
			&& this.metaHandlers['componentWillUnmount']
			&& this.metaHandlers['componentWillUnmount'] != this.componentWillUnmount
			&& this.metaHandlers['componentWillUnmount']()
	}

	componentDidUpdate = () => {
		this.metaHandlers
			&& this.metaHandlers['componentDidUpdate']
			&& this.metaHandlers['componentDidUpdate'] != this.componentDidUpdate
			&& this.metaHandlers['componentDidUpdate']()
	}

	getAppInstances = () => {
		return appInstances
	}

	getState = (fieldPath) => {
		return common.getField(this.injections.getState(), fieldPath)
	}

	setState = (fieldPath, value) => {
		if (value) {
			return this.injections.reduce('setField', fieldPath, value)
		}
		else {
			return this.injections.reduce('setFields', fieldPath)
		}
	}

	parseExpreesion = (v) => {
		if (!this.cache.expression)
			this.cache.expression = {}

		if (this.cache.expression[v]) {
			return this.cache.expression[v]
		}

		if (!this.cache.expressionParams) {
			this.cache.expressionParams = ['data']
				.concat(Object.keys(this.metaHandlers)
					.map(k => "$" + k))
				.concat(['_path', '_rowIndex', '_vars', '_ctrlPath', '_lastIndex'])
		}

		var params = this.cache.expressionParams

		var body = utils.expression.getExpressionBody(v)

		this.cache.expression[v] = new Function(...params, body)
		return this.cache.expression[v]
	}

	execExpression = (expressContent, data, path, rowIndex, vars, ctrlPath) => {
		var values = [data]

		var metaHandlerKeys = Object.keys(this.metaHandlers),
			i, key

		var fun = (n) => this.metaHandlers[n]

		for (i = 0; key = metaHandlerKeys[i++];) {
			values.push(fun(key))
		}

		values.push(path)
		values.push(rowIndex)
		values.push(vars)
		values.push(ctrlPath)
		values.push(vars && vars[vars.length - 1])
		try {
			return this.parseExpreesion(expressContent).apply(this, values)
		}
		catch (e) {
			this.metaHandlers
				&& this.metaHandlers.componentDidCatch
				&& this.metaHandlers.componentDidCatch != this.componentDidCatch
				&& this.metaHandlers.componentDidCatch(e)
			setTimeout(() => {
				console.error(`表达式解析错误：${expressContent}`)
				utils.exception.error(e)
			}, 500)

		}
	}

	needUpdate = (meta) => {
		if (!meta)
			return false

		const t = typeof meta

		if (t == 'string' && utils.expression.isExpression(meta))
			return true

		if (t != 'object')
			return false

		if (meta._notParse === true) {
			return false
		}

		return !(t != 'object'
			|| !!meta['$$typeof']
			|| !!meta._isAMomentObject
			|| !!meta._power
			|| meta._visible === false)
	}

	updateMeta = (meta, path, rowIndex, vars, data, ctrlPath) => {

		if (!this.needUpdate(meta))
			return

		if (meta instanceof Array) {
			for (let i = 0; i < meta.length; i++) {
				let sub = meta[i]
				let currentPath = path

				if (!sub)
					continue

				if (sub._power) {
					currentPath = `${path}.${sub._name}`
					sub.path = vars ? `${currentPath}, ${vars.join(',')}` : currentPath
					continue
				}

				let subType = typeof sub, isExpression = false, isMeta = false

				if (subType == 'string' && utils.expression.isExpression(sub)) {
					sub = this.execExpression(sub, data, path, rowIndex, vars, ctrlPath)
					isExpression = true
					if (sub && sub._isMeta === true)
						isMeta = true

					if (sub && sub._isMeta === true) {
						isMeta = true
						meta[i] = sub.value
					}
					else {
						meta[i] = sub
					}
				}

				if (!this.needUpdate(sub))
					continue

				if (isExpression && !isMeta) {
					continue
				}

				subType = typeof sub

				if (sub instanceof Array) {
					currentPath = `${path}.${i}`
					sub.path = vars ? `${currentPath}, ${vars.join(',')}` : currentPath
					this.updateMeta(sub, currentPath, rowIndex, vars, data, ctrlPath)
					continue
				}

				if (sub._name && sub.component) {
					currentPath = `${path}.${sub._name}`
					sub.path = vars ? `${currentPath}, ${vars.join(',')}` : currentPath
					this.updateMeta(sub, currentPath, rowIndex, vars, data, sub.path)
				}
				else {
					currentPath = `${path}.${i}`
					sub.path = vars ? `${currentPath}, ${vars.join(',')}` : currentPath
					this.updateMeta(sub, currentPath, rowIndex, vars, data, ctrlPath)
				}

			}
			return
		}

		var excludeProps = meta._excludeProps
		if (excludeProps && utils.expression.isExpression(excludeProps)) {
			excludeProps = this.execExpression(excludeProps, data, path, rowIndex, vars, ctrlPath)
		}

		if (excludeProps && excludeProps instanceof Array) {
			for (var i = 0; i < excludeProps.length; i++) {
				if (meta[excludeProps[i]])
					delete meta[excludeProps[i]]
			}
			delete meta['_excludeProps']

		}

		var keys = Object.keys(meta),
			j, key

		for (j = 0; key = keys[j++];) {
			let v = meta[key],
				t = typeof v,
				currentPath = path


			if (!v)
				continue

			if (v._power) {
				currentPath = `${path}.${key}.${v._name}`
				v.path = vars ? `${currentPath}, ${vars.join(',')}` : currentPath
				continue
			}

			let isExpression = false, isMeta = false
			if (t == 'string' && utils.expression.isExpression(v)) {
				v = this.execExpression(v, data, `${path}.${key}`, rowIndex, vars, ctrlPath)
				isExpression = true
				if (key == '...' && v && typeof v == 'object') {
					Object.keys(v).forEach(kk => {
						meta[kk] = v[kk]
					})
					delete meta['...']
				} else {
					if (v && v._isMeta === true) {
						isMeta = true
						meta[key] = v.value
					}
					else {
						meta[key] = v
					}
				}
			}

			t = typeof t

			if (!this.needUpdate(v))
				continue

			if (isExpression && !isMeta) {
				continue
			}

			if (v instanceof Array) {
				this.updateMeta(v, `${path}.${key}`, rowIndex, vars, data, ctrlPath)
				continue
			}

			if (v._name && v.component) {
				currentPath = `${path}.${key}.${v._name}`
				v.path = vars ? `${currentPath}, ${vars.join(',')}` : currentPath
				this.updateMeta(v, currentPath, rowIndex, vars, data, v.path)
			}
			else {
				currentPath = `${path}.${key}`
				v.path = vars ? `${currentPath}, ${vars.join(',')}` : currentPath
				this.updateMeta(v, currentPath, rowIndex, vars, data, ctrlPath)
			}
		}
	}

	getMeta = (fullPath, propertys, data) => {
		const meta = common.getMeta(this.appInfo, fullPath, propertys)

		if (!fullPath) {
			var metaMap = common.getMetaMap(this.appInfo)
			fullPath = metaMap.keySeq().toList().find(o=>o.indexOf('.') == -1)
			//fullPath = common.getMetaMap(this.appInfo).keys().next().value
		}

		const parsedPath = utils.path.parsePath(fullPath),
			path = parsedPath.path,
			rowIndex = parsedPath.vars ? parsedPath.vars[0] : undefined,
			vars = parsedPath.vars

		if (!data)
			data = common.getField(this.injections.getState())

		meta._power = undefined
		meta.path = fullPath
		this.updateMeta(meta, path, rowIndex, vars, data, fullPath)
		return meta
	}

	setMetaForce = (appName, meta) => {
		common.setMetaForce(appName, meta)
	}

	gm = this.getMeta

	gs = this.getState

	ss = this.setState

	fromJS = fromJS

	context = contextManager
}