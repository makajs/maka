import pkgJson from '../package.json'
import { load, registerComponent } from 'maka'
import './style/index.less'
import view from './view'
import action from './action'
import state from './state'
import ActiveChart from './component/active-chart'
const name = pkgJson.name

registerComponent('ActiveChart', ActiveChart)

async function beforeRegister() {
    await load(['antd', 'action', 'i18n'])
}

export {
    name,
    state,
    action,
    view,
    beforeRegister
}