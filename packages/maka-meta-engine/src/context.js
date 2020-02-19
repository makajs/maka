class context {
	constructor() {
		this._context = {}
	}

	set(key, value, option = { enableLocalStorage: false }) {
		if (option.enableLocalStorage) {
			if (value)
				window.localStorage[key] = JSON.stringify(value)
		}

		if( !value && window.localStorage[key]){
			window.localStorage.removeItem(key)
		}

		this._context[key] = value
	}

	get(key) {
		return this._context[key] || (window.localStorage[key] && JSON.parse(window.localStorage[key]))
	}
}


const instance = new context()

export default instance