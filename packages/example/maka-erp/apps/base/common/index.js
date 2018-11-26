import React from 'react'
import pkgJson from './package.json'
import { actionMixin, setHoc, registerComponent, registerAction, registerTemplate, getComponent, createAppElement } from 'maka'
import './style.less'
import * as components from './component'
import * as templates from './template'
import * as actions from './action'
import moment from 'moment'
import lodash from 'lodash'

registerComponent('ctrl', components)

registerTemplate('tpl', templates)

registerAction('moment', moment, true)
registerAction('lodash', lodash, true)
registerAction('modal', components.Modal, true)
registerAction('message', getComponent('antd.message'), true)
registerAction('notification', getComponent('antd.notification'), true)

Object.keys(actions).forEach(key => {
    registerAction(key, actions[key], key == 'numberHelper')
})

//setHoc(components["LocaleProvider"])

const name = pkgJson.name

const state = {
    data: {
        list: [{
            code: 1,
            name: 'name1',
            description: 'description1'
        }, {
            code: 2,
            name: 'name2',
            description: 'description2'
        }, {
            code: 3,
            name: 'name3',
            description: 'description3'
        }],
        pagination: { current: 1, total: 3, pageSize: 20 },
        filter: {
            orderBy: 'default'
        },
        other: {}
    }
}

@actionMixin('base', 'moment', 'lodash', 'modal', 'message', 'notification', 'tableHelper')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
        this.btnClick = this.lodash.throttle(this.btnClick, 1000) //一秒内点击只响应第一次
        this.selectLoadOption = this.lodash.throttle(this.selectLoadOption, 1000)
    }


    selectLoadOption = async () => {
        return [{
            id: 1,
            name: '男'
        }, {
            id: 0,
            name: '女'

        }]
    }

    selectChange = (v) => {
        this.base.setState({ 'data.selectValue': v })
    }
    btnClick = () => {
        this.base.setState({ 'data.dp': this.moment() })
    }

    showErrorModal = () => {
        this.modal.error({ title: 'error', content: 'error' })
    }

    showWarnModal = () => {
        this.modal.warning({ title: 'warn', content: 'warn' })
    }

    showSuccessModal = () => {
        this.modal.success({ title: 'success', content: 'success' })
    }

    showInfoModal = async () => {
        await this.modal.info({ title: 'info', content: 'info' })
    }

    showConfirmModal = async () => {
        var ret = await this.modal.confirm({ title: 'confirm', content: 'confirm' })
        console.log(ret)
    }

    showModal = async () => {
        var ret = await this.modal.show({
            title: 'modal',
            children: createAppElement('antd', {}),
            width: 400,
            bodyStyle: {
                height: 300
            }
        })

        console.log(ret)
    }

    showLoadingMessage = () => {
        var hide = this.message.loading('loading.', 0);
        setTimeout(hide, 2500);
    }

    pageChanged = (current, pageSize) => {
        console.log('pageChanged')
    }

    codeClick = (row) => () => {
        console.log(row)
    }

    headerAddRow = ()=> {
        this.addRow(-1)()
    }

    addRow = (rowIndex) => () => {
        var lst = this.base.gs('data.list')
        lst.splice(rowIndex + 1, 0, {})
        this.base.ss({ 'data.list': lst })
    }

    delRow = (rowIndex) => () => {
        var lst = this.base.gs('data.list')
        lst.splice(rowIndex, 1)
        this.base.ss({ 'data.list': lst })
    }
}

const view = {
    component: 'div',
    className: 'simple-modal-card common',
    children: [/*{
        component: 'antd.DatePicker',
        value: '{{data.dp}}'
    }, {
        component: 'antd.Button',
        onClick: '{{$btnClick}}',
        children: '设置日期'
    },{
        component: 'ctrl.InputNumber'
    },{
        component: 'ctrl.Select',
        style: {width: 200},
        onLoadOption: '{{$selectLoadOption}}',
        onChange: '{{$selectChange}}',
        value: '{{data.selectValue}}'
    },{
        component: 'antd.Button',
        onClick: '{{$showErrorModal}}',
        children: 'error modal'
    }, {
        component: 'antd.Button',
        onClick: '{{$showWarnModal}}',
        children: 'warning modal'
    }, {
        component: 'antd.Button',
        onClick: '{{$showSuccessModal}}',
        children: 'success modal'
    }, {
        component: 'antd.Button',
        onClick: '{{$showInfoModal}}',
        children: 'info modal'
    }, {
        component: 'antd.Button',
        onClick: '{{$showConfirmModal}}',
        children: 'confirm modal'
    }, {
        component: 'antd.Button',
        onClick: '{{$showModal}}',
        children: 'modal'
    }, {
        component: 'antd.Button',
        onClick: `{{()=>$message.error('error')}}`,
        children: 'error message'
    }, {
        component: 'antd.Button',
        onClick: `{{()=>$message.warning('warning')}}`,
        children: 'warning message'
    }, {
        component: 'antd.Button',
        onClick: `{{()=>$message.info('info')}}`,
        children: 'info message'
    }, {
        component: 'antd.Button',
        onClick: `{{()=>$message.success('success')}}`,
        children: 'success message'
    }, {
        component: 'antd.Button',
        onClick: `{{$showLoadingMessage}}`,
        children: 'loading message'
    }, {
        component: 'antd.Button',
        onClick: `{{() => $notification.success({
            message:'success',
            description: 'success'
        })}}`,
        children: 'success notification'
    }, {
        component: 'tpl.Input',
        bindPath: 'data.input'
    },{
        component: 'tpl.DatePicker',
        bindPath: 'data.dp'
    },{
        component: 'tpl.MonthPicker',
        bindPath: 'data.mp'
    },{
        component: 'tpl.Checkbox',
        bindPath: 'data.cb'
    },{
        component: 'tpl.Number',
        bindPath: 'data.count'
    },{
        component: 'tpl.Select',
        bindPath: 'data.select',
        onLoadOption: '{{$selectLoadOption}}',
        style: {width: 400}
    },{
        component: 'tpl.Button',
        children: 'fewfwe'
    },/*{
        component: 'tpl.Form',
        children: [{
            type: 'input',
            title: '编码',
            bindPath: 'data.input'
        },{
            type: 'number',
            title: '数字',
            required: true,
            bindPath: 'data.count'
        },{
            type: 'checkbox',
            title: '复选',
            bindPath: 'data.cb'
        },{
            type: 'datePicker',
            title: '日期',
            bindPath: 'data.dp'
        },{
            type: 'monthPicker',
            title: '月份',
            bindPath: 'data.mp'
        },{
            type: 'select',
            title: '选择',
            onLoadOption: '{{$selectLoadOption}}',
            bindPath: 'data.select',
        },'rew',{
            component: 'antd.Button',
            children: 'few'
        },]
    }*/{
            component: 'tpl.Table',
            className: 'common-table',
            columns: [{
                type: 'sequence'
            }, {
                type: 'isSelected'
            }, {
                type: 'link', title: '编码', bindField: 'code', onClick: 'codeClick'
            }, {
                type: 'text', title: '名称', bindField: 'name', width: 100
            }, {
                type: 'text', title: '备注', bindField: 'description', width: 100, align: 'right'
            }, {
                type: 'input', title: '名称编辑', bindField: 'name'
            }, {
                type: 'checkbox', title: '已婚', bindField: 'married'
            }, {
                type: 'datePicker', title: '生日', bindField: 'birthday'
            }, {
                type: 'number', title: '年龄', bindField: 'age'
            }, {
                type: 'monthPicker', title: '参加工作时间', bindField: 'joinJob'
            }, {
                type: 'select', title: '性别', bindField: 'sex', onLoadOption: '{{$selectLoadOption}}',
            }, {
                type: 'addAndDel', onHeaderAddRow: '{{$headerAddRow}}', onAddRow: '{{$addRow(row.rowIndex)}}', onDelRow: '{{$delRow(row.rowIndex)}}'
            },]
        }]
}


export {
    name,
    state,
    action,
    view
}