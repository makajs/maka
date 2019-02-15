import config from './config'
import action, {appInstances} from './action'
import reducer from './reducer'
import wrapper from './wrapper'
import actionMixin from './actionMixin'
import componentFactory from './componentFactory'
import templateFactory from './templateFactory'
import actionFactory from './actionFactory'
import defaultComponent from './defaultComponent'
import rootElement from './rootElement'
import contextManager from './context'
const defaultAction = action
const defaultReducer = reducer

export default {
	config,
	action,
	reducer,
	wrapper,
	actionMixin,
	componentFactory,
	templateFactory,
	actionFactory,
	defaultComponent,
	defaultAction,
	defaultReducer,
	rootElement,
	contextManager,
	appInstances
}


export {
	config,
	action,
	reducer,
	wrapper,
	actionMixin,
	componentFactory,
	templateFactory,
	actionFactory,
	defaultComponent,
	defaultAction,
	defaultReducer,
	rootElement,
	contextManager,
	appInstances
}