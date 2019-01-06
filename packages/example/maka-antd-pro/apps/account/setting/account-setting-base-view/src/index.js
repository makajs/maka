import pkgJson from '../package.json'
import { actionMixin, load, getComponent, registerComponent } from 'maka'
import './style.less'
import view from './view'
import GeographicView from './component/GeographicView'

const name = pkgJson.name

registerComponent('GeographicView', GeographicView)

const state = {
    data: {
        provinces: [{ "name": "浙江省", "id": "330000" }],
        citys: [{ "province": "浙江省", "name": "杭州市", "id": "330100" }, { "province": "浙江省", "name": "宁波市", "id": "330200" }, { "province": "浙江省", "name": "温州市", "id": "330300" }, { "province": "浙江省", "name": "嘉兴市", "id": "330400" }, { "province": "浙江省", "name": "湖州市", "id": "330500" }, { "province": "浙江省", "name": "绍兴市", "id": "330600" }, { "province": "浙江省", "name": "金华市", "id": "330700" }, { "province": "浙江省", "name": "衢州市", "id": "330800" }, { "province": "浙江省", "name": "舟山市", "id": "330900" }, { "province": "浙江省", "name": "台州市", "id": "331000" }, { "province": "浙江省", "name": "丽水市", "id": "331100" }]
    }
}

@actionMixin('base', 'i18n')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)

    }

    getFieldValue = (...args) => {
        return this.component.props.form.getFieldValue(...args)
    }

    getFieldDecorator = (...args) => this.component.props.form.getFieldDecorator(...args)

    submitHandler = e => {
        const { form } = this.component.props
        debugger
        e.preventDefault()
        form.validateFieldsAndScroll((err, values) => {
            debugger
            if (!err) {
                //todo
            }
        });
    };


}

async function beforeRegister() {
    await load(['antd', 'action', 'i18n'])
}

function viewDecorator() {
    return getComponent('antd.Form').create()
}

export {
    name,
    state,
    action,
    view,
    viewDecorator,
    beforeRegister
}