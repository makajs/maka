import React from 'react'
import * as common from './common'
import utils from '@makajs/utils'
import { fromJS } from 'immutable'
import contextManager from './context'
import config from './config'

export const appInstances = {}

export default class action {
	constructor(option) {
		this.appInfo = option.appInfo
		this.meta = fromJS(option.appInfo.view)
		var plugins = option.plugins
		this.cache = {}

		common.setMeta(option.appInfo, plugins)
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

	parseExpreesion = (v, extParas) => {
		if (!this.cache.expression)
			this.cache.expression = {}

		var key = v
		if (extParas && extParas.length > 0) {
			key = key + extParas.toString()
		}
		if (this.cache.expression[key]) {
			return this.cache.expression[key]
		}

		if (!this.cache.expressionParams) {
			this.cache.expressionParams = ['data']
				.concat(Object.keys(this.metaHandlers)
					.map(k => "$" + k))
				.concat(['_path', '_vars'])
		}

		var params = this.cache.expressionParams

		if (extParas && extParas.length > 0) {
			params = params.concat(extParas)
		}

		var body = utils.expression.getExpressionBody(v)
		this.cache.expression[v] = new Function(...params, body)
		return this.cache.expression[v]
	}

	execExpression = (expressContent, data, path, vars, extParas) => {
		var values = [data]

		var metaHandlerKeys = Object.keys(this.metaHandlers),
			i, key

		var fun = (n) => this.metaHandlers[n]

		for (i = 0; key = metaHandlerKeys[i++];) {
			values.push(fun(key))
		}

		values.push(path)
		values.push((vars || '').split(','))

		var extParaKeys
		if (extParas) {
			extParaKeys = Object.keys(extParas)

			if (extParaKeys && extParaKeys.length > 0) {
				extParaKeys.forEach(k => {
					values.push(extParas[k])
				})
			}
		}
		try {
			return this.parseExpreesion(expressContent, extParaKeys).apply(this, values)
		}
		catch (e) {
			this.metaHandlers
				&& this.metaHandlers.componentDidCatch
				&& this.metaHandlers.componentDidCatch != this.componentDidCatch
				&& this.metaHandlers.componentDidCatch(e)
			setTimeout(() => {
				console.error(`expression parsing error：${expressContent}`)
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

	updateMeta = (meta, data, path, vars, extParas) => {
		//path && (meta.path = path)
		if (meta instanceof Array) {
			for (let i = 0; i < meta.length; i++) {
				let sub = meta[i]
				let currentPath = path

				if (!sub)
					continue

				if (sub._for) {
					sub._vars = vars
					sub._extParas = extParas
					sub.path = `${path}.${sub._name}`
					continue
				}

				if (sub._function) {
					sub._vars = vars
					sub._extParas = extParas
					sub.path = `${path}.${sub._name}`
					continue
				}

				let subType = typeof sub, isExpression = false, isMeta = false

				if (subType == 'string' && utils.expression.isExpression(sub)) {
					sub = this.execExpression(sub, data, path, vars, extParas)
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
					this.updateMeta(sub, data, currentPath, vars, extParas)
					continue
				}
				if (sub._name && sub.component) {
					currentPath = `${path}.${sub._name}`
					sub.path = currentPath
					this.updateMeta(sub, data, currentPath, vars, extParas)
					continue
				}
				currentPath = `${path}.${i}`
				this.updateMeta(sub, data, currentPath, vars, extParas)
			}
			return
		}

		var excludeProps = meta._excludeProps
		if (excludeProps && utils.expression.isExpression(excludeProps)) {
			excludeProps = this.execExpression(excludeProps, data, path, vars, extParas)
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
				currentPath = `${path}.${key}`

			if (!v)
				continue

			if (key == '_vars' || key == '_extParas')
				continue

			let isExpression = false, isMeta = false
			if (t == 'string' && utils.expression.isExpression(v)) {
				isExpression = true
				v = this.execExpression(v, data, currentPath, vars, extParas)
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

			if (!this.needUpdate(v))
				continue


			if (v._for) {
				v._vars = vars
				v._extParas = extParas
				v.path = `${path}.${key}.${v._name}`
				continue
			}

			if (v._function) {
				v._vars = vars
				v._extParas = extParas
				v.path = `${path}.${key}.${v._name}`
				continue
			}

			if (isExpression && !isMeta) {
				continue
			}

			if (v._name && v.component) {
				v.path = `${path}.${key}.${v._name}`
				this.updateMeta(v, data, `${path}.${key}.${v._name}`, vars, extParas)
				continue
			}

			if (v instanceof Array) {
				this.updateMeta(v, data, currentPath, vars, extParas)
				continue
			}

			this.updateMeta(v, data, currentPath, vars, extParas)
		}
	}

	getMeta = (path, propertys, data, vars, extParas) => {
		const meta = common.getMeta(this.appInfo, path, propertys)

		if (!path) {
			var metaMap = common.getMetaMap(this.appInfo)
			path = metaMap.keySeq().toList().find(o => o.indexOf('.') == -1)
		}

		if (!data)
			data = common.getField(this.injections.getState())

		meta._power = undefined
		meta._for = undefined
		meta._function = undefined
		meta.path = path
		if (vars)
			meta._vars = vars

		this.updateMeta(meta, data, path, vars, extParas)
		return meta
	}

	setMetaForce = (appName, meta) => {
		common.setMetaForce(appName, meta)
	}

	gm = this.getMeta

	gs = this.getState

	ss = this.setState

	context = contextManager
}

