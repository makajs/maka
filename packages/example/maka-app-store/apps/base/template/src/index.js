import pkgJson from '../package.json'
import { actionMixin, registerTemplate, load } from 'maka'
import * as templates from './template'

import './style.less'

const name = pkgJson.name

registerTemplate('tpl', templates)

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
    }
}

@actionMixin('base','tableHelper')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    pageChanged = (current, pageSize) => {
        console.log('pageChanged')
    }



    headerAddRow = () => {
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
    className: 'template',
    children: [{
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
        }]
    }]
}

async function beforeRegister(){
    await load(['i18n', 'image', 'action', 'antd', 'fixed-data-table', 'custom-component', 'style'])
}

export {
    name,
    state,
    action,
    view,
    beforeRegister
}