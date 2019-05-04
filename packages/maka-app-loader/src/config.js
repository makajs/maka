var _options = {}

function config(options) {
	if(options.appUrls && _options.appUrls){
		options.appUrls = {
			..._options.appUrls, ...options.appUrls
		}
	}
	Object.assign(_options, options)
}

config.current = _options

export default config