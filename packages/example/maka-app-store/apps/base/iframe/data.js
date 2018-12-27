export function getMeta() {
	return {
		name: 'root',
		component: 'Layout',
		className: 'base-base-iframe',
		style: '{{$getStyle()}}',
		children: [{
			name: 'content',
			component: '::base-iframe',
			src: '{{$getSrc(data)}}',
		}]
	}
}

export function getInitState() {
	return {
		data: {
		}
	}
}