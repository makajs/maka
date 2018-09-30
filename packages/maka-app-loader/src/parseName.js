export default function parseName(fullName) {
	const segments = fullName.split('?'),
		name = segments[0],
		query = segments[1] || '',
		params = parseQuery(query)

	return {
		fullName,
		name,
		query,
		params
	}
}

function parseQuery(query) {
	let ret = {},
		seg = query.replace(/^\?/, '').split('&'),
		len = seg.length,
		i = 0,
		s;
	for (; i < len; i++) {
		if (!seg[i]) {
			continue;
		}
		s = seg[i].split('=');
		ret[s[0]] = decodeURIComponent(s[1]);
	}
	return ret;
}