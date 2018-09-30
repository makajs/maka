import parseName from './parseName'
import { Map } from 'immutable'

export default function wrapMapStateToProps(fullName) {
	const parsedName = parseName(fullName)

	return state => {
		return {
			appName: parsedName.name,
			appFullName: parsedName.fullName,
			appQuery: parsedName.query,
			appParams: parsedName.params,
			payload: state.get(parsedName.fullName)
		}
	}
}