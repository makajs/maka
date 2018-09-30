class context {
	constructor() {
		this._context = {}
	}

	set(key, value) {
		this._context[key] = value
	}

	get(key) {
		return this._context[key]
	}
}


const instance = new context()

export default instance