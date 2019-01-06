import pkgJson from '../package.json'
import { actionMixin, load } from 'maka'
import './style.less'

const name = pkgJson.name

const state = {
    data: {
    }
}

@actionMixin('base', 'i18n')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }
}



const actions = [{
    component: 'antd.Button',
    type: 'primary',
    children: `{{$i18n('app.result.error.btn-text',{defaultMessage: 'Return to modify'})}}`
}]

const extra = [{
    component: 'div',
    style: {
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.85)',
        fontWeight: '500',
        marginBottom: 16,
    },
    children: `{{$i18n('app.result.error.hint-title', {
        defaultMessage:'The content you submitted has the following error:'
    })}}`
}, {
    component: 'div',
    style: { marginBottom: 16 },
    children: [{
        component: 'antd.Icon',
        style: { color: '#f5222d', marginRight: 8 },
        type: 'close-circle-o'
    }, `{{$i18n('app.result.error.hint-text1', {defaultMessage: 'Your account has been frozen'})}}`, {
        component: 'a',
        style: { marginLeft: 16 },
        children: [`{{$i18n('app.result.error.hint-btn1', {defaultMessage: 'Thaw immediately'})}}`, {
            component: 'antd.Icon',
            type: 'right'
        }]
    }]
},{
    component: 'div',
    style: { marginBottom: 16 },
    children: [{
        component: 'antd.Icon',
        style: { color: '#f5222d', marginRight: 8 },
        type: 'close-circle-o'
    }, `{{$i18n('app.result.error.hint-text2', {defaultMessage: 'Your account is not yet eligible to apply'})}}`, {
        component: 'a',
        style: { marginLeft: 16 },
        children: [`{{$i18n('app.result.error.hint-btn2', {defaultMessage: 'Upgrade immediately'})}}`, {
            component: 'antd.Icon',
            type: 'right'
        }]
    }]
}]
const view = {
    component: 'div',
    className: 'result-fail',
    children: [{
        component: 'antd.Card',
        bordered: false,
        children: {
            component: 'antdpro.Result',
            type: 'error',
            title: `{{$i18n('app.result.error.title')}}`,
            description: `{{$i18n('app.result.error.description')}}`,
            extra:extra,
            actions: actions,
            style: { marginTop: 48, marginBottom: 16 }
        }
    }]
}

async function beforeRegister() {
    await load(['antd', 'i18n'])
}

export {
    name,
    state,
    action,
    view,
    beforeRegister

}