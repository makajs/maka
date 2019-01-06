import pkgJson from '../package.json'
import { actionMixin, load } from 'maka'
import './style.less'

const name = pkgJson.name

const state = {
    data: {
        content: 'hello ',
        input: ''
    }
}

@actionMixin('base', 'i18n')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }
}

const desc1 = {
    component: 'div',
    style: {
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.45)',
        position: 'relative',
        left: 42,
        textAlign: 'left',
    },
    children: [{
        component: 'div',
        style: { margin: '8px 0 4px' },
        children: [`{{$i18n('app.result.success.step1-operator', {defaultMessage:'Qu Lili'})}}`,{
            component: 'antd.Icon',
            style: { marginLeft: 8},
            type: 'dingding-o'

        }]
    },{
        component: 'div',
        children: '2016-12-12 12:32'
    }]
} 

const desc2 = {
    component: 'div',
    style: {fontSize: 12, position: 'relative', left: 42, textAlign: 'left'},
    children:[{
        component: 'div',
        style: {margin: '8px 0 4px'},
        children:[`{{$i18n('app.result.success.step2-operator',{defaultMessage:"Zhou Maomao"})}}`,{
            component: 'antd.Icon',
            style: {color: '#00A0E9', marginLeft: 8},

        }]
    },{
        component: 'div',
        children:{
            component: 'a',
            children:`{{$i18n('app.result.success.step2-extra', {defaultMessage:'Urge'})}}`
        }
    }]
}

const actions = [{
    component: 'antd.Button',
    type: 'primary',
    children: `{{$i18n('app.result.success.btn-return',{defaultMessage: 'Back to list'})}}`
},{
    component: 'antd.Button',
    children: `{{$i18n('app.result.success.btn-project',{defaultMessage: 'View project'})}}`
},{
    component: 'antd.Button',
    children: `{{$i18n('app.result.success.btn-print',{defaultMessage: 'Print'})}}`
}]
const view = {
    component: 'div',
    className: 'result-success',
    children: [{
        component: 'antd.Card',
        bordered: false,
        children: {
            component: 'antdpro.Result',
            type: 'success',
            title: `{{$i18n('app.result.success.title')}}`,
            description: `{{$i18n('app.result.success.description')}}`,
            extra: [{
                component: 'div',
                style: {
                    fontSize: 16,
                    color: 'rgba(0, 0, 0, 0.85)',
                    fontWeight: '500',
                    marginBottom: 20,
                },
                children: `{{$i18n('app.result.success.operate-title',{
                    defaultMessage:'Project Name'
                })}}`
            }, {
                component: 'antd.Row',
                style: { marginBottom: 16 },
                children: [{
                    component: 'antd.Col',
                    xs: 24,
                    sm: 12,
                    md: 12,
                    lg: 12,
                    xl: 6,
                    children: [{
                        component: 'span',
                        style: { color: 'rgba(0, 0, 0, 0.85)' },
                        children: `{{$i18n('app.result.success.operate-id',{defaultMessage: 'Project ID：'})}}`
                    }, 23421]
                }, {
                    component: 'antd.Col',
                    xs: 24,
                    sm: 12,
                    md: 12,
                    lg: 12,
                    xl: 6,
                    children: [{
                        component: 'span',
                        style: { color: 'rgba(0, 0, 0, 0.85)' },
                        children: `{{$i18n('app.result.success.principal',{defaultMessage: 'Principal：'})}}`
                    }, `{{$i18n('app.result.success.step1-operator',{defaultMessage:'Qu Lili'})}}`]
                }, {
                    component: 'antd.Col',
                    xs: 24,
                    sm: 24,
                    md: 24,
                    lg: 24,
                    xl: 12,
                    children: [{
                        component: 'span',
                        style: { color: 'rgba(0, 0, 0, 0.85)' },
                        children: `{{$i18n('app.result.success.operate-time',{defaultMessage: 'Effective time：'})}}`
                    }, `2016-12-12 ~ 2017-12-12`]
                }]
            }, {
                component: 'antd.Steps',
                style: { marginLeft: -42, width: 'calc(100% + 84px)' },
                progressDot: true,
                current: 1,
                children: [{
                    component: 'antd.Steps.Step',
                    title: {
                        component: 'span',
                        style: { fontSize: 14 },
                        children: `{{$i18n('app.result.success.step1-title',{defaultMessage:'Create project'})}}`
                    },
                    description:desc1
                },{
                    component: 'antd.Steps.Step',
                    title: {
                        component: 'span',
                        style: { fontSize: 14 },
                        children: `{{$i18n('app.result.success.step2-title',{defaultMessage:'Departmental preliminary review'})}}`
                    },
                    description:desc2
                },{
                    component: 'antd.Steps.Step',
                    title: {
                        component: 'span',
                        style: { fontSize: 14 },
                        children: `{{$i18n('app.result.success.step3-title',{defaultMessage:'Financial review'})}}`
                    },
                },{
                    component: 'antd.Steps.Step',
                    title: {
                        component: 'span',
                        style: { fontSize: 14 },
                        children: `{{$i18n('app.result.success.step4-title',{defaultMessage:'Finish'})}}`
                    },
                }]
            }],
            actions:actions,
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