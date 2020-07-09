
import {getGlobal} from '../env'
const mockApi = {}
const mockData = {}
const _options = {
	store: localStorage
}
getGlobal().self = getGlobal()

require('whatwg-fetch')

function config(options) {
	Object.assign(_options, options)
	if (options.token) {
		setAccessToken(options.token)
	}
}

function mock(url, handler) {
	/*url = {
		'test/url1':()=>{},
		'test/url2':()=>{}
	}*/
	if (url && typeof url == "object") {
		Object.keys(url).forEach(u => {
			mock(u, url[u])
		})
	}

	//url=v1/*/
	//handler={
	//	person:()=>{}
	//}
	//
	else if (url.indexOf("*") != -1) {
		let paths = url.split('*')
		let pre = paths.shift()
		Object.keys(handler).forEach(key => {
			let theUrl = pre + key + paths.join('*')
			mock(theUrl, handler[key])
		})
	} else {
		mockApi[url] = handler;
	}
}


function isMockUrl(url) {
	if (!_options.excludeMockUrls)
		return _options.mock

	if (_options.excludeMockUrls.find(o => {
		if(o === url)
			return true
		if(o.test && o.test(url))
			return true 

		return false
		
	})) {
		return !_options.mock
	}
	else {
		return _options.mock
	}
}

function fixUrl(url) {
	if(_options.prefix)
		return `${_options.prefix}${url}`
	else
		return url
}

function get(url, headers, option) {
	if (!option || option.ignoreAOP !== true) {
		before()
	}

	if (isMockUrl(url)) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				try {
					if (getAccessToken()) {
						headers = headers ? { ...headers, token: getAccessToken() } : { token: getAccessToken() }
					}
					var resp = mockApi[url](headers)
					if (resp.then && resp.catch) {
						resp.then(r => {
							resp = after(resp, url, undefined, headers)
							return resolve(resp)
						}).catch(reject)
						return resp
					}
					else if (!option || option.ignoreAOP !== true) {
						resp = after(resp, url, undefined, headers)
					}
					resolve(resp)
				}
				catch (e) {
					reject(e)
				}
			}, 0)
		})
	}

	let request = headers = {
		method: 'GET',
		credentials: 'same-origin',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			...headers,
			token: getAccessToken(),
			"Authorization": getAccessToken()? "Bearer " + getAccessToken() : ''
		}, 
	}

	if(option && option.token) { 
		request.headers['token'] = option.token
		request.headers["Authorization"] = "Bearer " + option.token
	}
	
	return new Promise((resolve, reject) => {
		fetch(fixUrl(url), request)
			.then(response => {
				let json = {}
				let contentType = response.headers.get('Content-Type');
				contentType = contentType && contentType.split(";")[0]
				if(contentType == 'application/json' ){
					json = response.json()
				}else if(contentType == 'application/octet-stream' ){
						response.blob().then(blob => { let a = document.createElement('a')
						let url = window.URL.createObjectURL(blob)   
						let name = response.headers.get('Content-Disposition')
						name = name.split('name=')[1].split(';')[0]
						a.href = url
						a.download = name
						a.click()
						window.URL.revokeObjectURL(url)
					})
				}
				return json
			})
			.then(responseJson => {
				responseJson = after(responseJson, url, undefined, request)
				resolve(responseJson)
			})
			.catch(error => reject(error))
	})
}

function post(url, data, headers, option) {
	headers = headers || {}
	if (!option || option.ignoreAOP !== true) {
		before(url, data, headers)
	}
	if (isMockUrl(url)) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				try {
					if (getAccessToken()) {
						headers = headers ? { ...headers, token: getAccessToken() } : { token: getAccessToken() }
					}
					var mockFun = mockApi[url]
					if (!mockFun || typeof mockFun != 'function') {
						throw (url + ':handler is invalid')
					}
					var resp = mockFun(data, headers)
					if (resp.then && resp.catch) {
						resp.then(r => {
							r = after(r, url, data, headers)
							return resolve(r)
						}).catch(reject)
						return resp
					}
					else if (!option || option.ignoreAOP !== true) {
						resp = after(resp, url, data, headers)
					}
					resolve(resp)
				}
				catch (e) {
					reject(e)
				}
			}, 0)
		})
	}

	let request = {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			...headers,
			token: getAccessToken(),
			"Authorization": getAccessToken()? "Bearer " + getAccessToken() : ''
		},
		body: JSON.stringify(data)
	}
	if(option && option.type == 'file'){
		request.body = option.body
		delete request.headers['Content-Type']
	}

	if(option && option.token) { 
		request.headers['token'] = option.token
		request.headers["Authorization"] = "Bearer " + option.token
	}

	if(option && option.signal) { 
		request.signal = option.signal
	}

	return new Promise((resolve, reject) => {
		fetch(fixUrl(url), request)
			.then(response => { 
				let json = {}
				let contentType = response.headers.get('Content-Type').split(";")[0]
				let contentDisposition = response.headers.get('Content-Disposition')
				if(contentType == 'application/json' ){
					json = response.json()
				}else if(contentDisposition != null){
					response.blob().then(blob => { 
						let a = document.createElement('a')
						let url = window.URL.createObjectURL(blob)   
						let name = response.headers.get('Content-Disposition')
						name = name.split('name=')[1].split(';')[0]
						a.href = url
						a.download = decodeURI(name)
						a.click()
						window.URL.revokeObjectURL(url)
					})
				}
				return json
			
			})
			.then(responseJson => {
				responseJson = after(responseJson, url, data, request)
				resolve(responseJson)
			})
			.catch(error => reject(error))
	})

}

function formPost(url, data, isFree) {
	data = data || {}
	var accessToken = getAccessToken()//toke in sessionStorage
	if (!!accessToken && !isFree) {
		data.token = accessToken
	}

	var postForm = document.createElement("form")//form object
	postForm.method = "post"
	postForm.action = url
	postForm.target = "_blank"

	var keys = Object.keys(data)

	for (var k of keys) {
		var emailInput = document.createElement("input");//email input
		emailInput.setAttribute("name", k)
		emailInput.setAttribute("value", data[k])
		postForm.appendChild(emailInput)
	}

	document.body.appendChild(postForm)
	postForm.submit()
	document.body.removeChild(postForm)
}

function test(url, data, result) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(result)
		}, 0)
	})
}

function before(url, data, headers) {
	if (_options.before) {
		_options.before(url, data, headers)
	}
}

function after(response, url, data, headers) {
	if (_options.after) {
		return _options.after(response, url, data, headers)
	}

	return response
}


function getAccessToken() {
	return _options.store['_accessToken'] || '';
	// return localStorage['_accessToken'] || '';
	//return sessionStorage['_accessToken'] || '';
}

function setAccessToken(token) {
	_options.store['_accessToken'] = token
	// localStorage['_accessToken'] = token;
	//sessionStorage['_accessToken'] = token;
}

function clearAccessToken() {
	_options.store['_accessToken'] = ''
	// localStorage['_accessToken'] = ''
	//sessionStorage['_accessToken'] = ''
}

export default {
	config,
	get,
	post,
	formPost,
	test,
	mockData,
	mock,
	mockApi,
	isMockUrl,
	getAccessToken,
	setAccessToken,
	clearAccessToken
}

export {
	config,
	get,
	post,
	formPost,
	test,
	mockData,
	mock,
	mockApi,
	isMockUrl,
	getAccessToken,
	setAccessToken,
	clearAccessToken
}