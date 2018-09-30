import parseName from './parseName'
import appFactory from './appFactory'
import loadApp from './loadApp'

export default (actionInjections, reducerInjections) => (store) => {
	return next => async action => {
		const {
			getState,
			dispatch
		} = store

		if (typeof action === 'function') {
			const {
				fullName,
				name,
				query,
				params,
				actionCreator,
				args,
				reducer
			} = action()

			const reduce = (type, ...args) => {
				dispatch({
					type: '@@reduce',
					payload: {
						fullName,
						name,
						query,
						type,
						reducer,
						payload: args,
						reducerInjections
					}
				})
			}

			const getStateByApp = () => getState().get(fullName)
			const injections = {
				currentApp: {
					fullName,
					name,
					query,
					params
				},
				store,
				reduce,
				getState: getStateByApp,
				...actionInjections
			}
			const realAction = actionCreator(
				...args,
				injections
			)

			if (typeof realAction === 'function') {
				realAction(injections)
			}

		} else if (action.type && action.type == '@@loadApp') {
			try {
				const fullName = action.payload.fullName,
					prevFullName = action.payload.prevFullName,
					parsedName = parseName(fullName)


				let appInfo = appFactory.getApp(parsedName.name)
				if (!appInfo) {
					await loadApp(parsedName.name)
				}

				appInfo = appFactory.getApp(parsedName.name)

				if (!appInfo) {
					console.error(`Loading app ${parsed.name} failed`)
					return next(action)
				}

				return next({
					type: '@@loadAppReal',
					payload: {
						fullName,
						appInfo,
						prevFullName,
						action: appInfo.action
					}
				})
			}
			catch (e) {
				console.error(e)
				return next(action)
			}

		} else {
			return next(action)
		}
	}
}

