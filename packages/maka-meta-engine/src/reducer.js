import Immutable, { Map, List } from 'immutable'

import contextManager from './context'

import * as common from './common'

class reducer {
	constructor(option) {
		this.appInfo = option.appInfo
	}

	init = (state, option) => {
		const {
			data = {},
		} = option

		return this.initByImmutable(state, {
			data: Immutable.fromJS(data),
		})
	}

	initByImmutable = (state, option) => {
		const {
			data,
		} = option

		//Clear the attribute in the state that is not @@, which is added by maka-app-loader
		const keys = []
		state.mapKeys(key => {
			if (key.indexOf('@@') === -1)
				keys.push(key)
		})

		keys.forEach(key => {
			state = state.remove(key)
		})

		//Setting status
		return state
			.set('data', data)
	}

	getMeta = common.getMeta

	getField = common.getField

	getFields = common.getFields

	setField = common.setField

	setFields = common.setFields

	gm = common.getMeta

	gf = common.getField

	gfs = common.getFields

	sf = common.setField

	sfs = common.setFields

	context = contextManager

}

export default function creator(option) {
	return new reducer(option)
}