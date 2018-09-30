export function loadApp(fullName, prevFullName) {
	return {
		type: '@@loadApp',
		payload: {
			fullName,
			prevFullName
		}
	}
}

export function clearAppState(fullName) {
	return {
		type: '@@clearAppState',
		payload: {
			fullName
		}
	}
}