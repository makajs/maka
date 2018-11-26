import React from 'react'
import { actionMixin, fetch } from 'maka'
import initState from './state'

@actionMixin('base', 'moment', 'tableHelper', 'message')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    onInit = async () => {
        if (this.component.props.bomId || this.component.props.bomId == 0) {
            var resp = await fetch.post('/v1/bom/findById', { id: this.component.props.bomId })
            this.base.setState({ 'data.form': resp })
        }
    }

    prev = async () => {
        var resp = await fetch.post('/v1/bom/prev', { id: this.base.gs('data.form.id') })
        this.base.setState({ 'data.form': resp })
    }

    next = async () => {
        var resp = await fetch.post('/v1/bom/next', { id: this.base.gs('data.form.id') })
        this.base.setState({ 'data.form': resp })
    }

    add = () => {
        this.base.ss({'data': initState.data })
    }

    save = async () => {
        const form = this.base.gs('data.form')

        const msg = this.checkSave(form)

        if (msg.length > 0) {
            this.message.error(
                <ul style={{ textAlign: 'left' }}>
                    {msg.map(o => <li>{o}</li>)}
                </ul>
            )
            return false
        }

        var isModify = (form.id || form.id == 0)

        var resp

        if (isModify) {
            resp = await fetch.post('/v1/bom/update', form)
        }
        else {
            resp = await fetch.post('/v1/bom/create', form)
        }

        this.base.setState({ 'data.form': resp })
        this.message.success(isModify ? '修改BOM成功' : '新增BOM成功')
    }

    checkSave(form) {
        var msg = []
        !form.code && msg.push('编码不能为空!');
        !form.materiel && msg.push('物料不能为空!');
        !form.technic && msg.push('工艺不能为空!');
        !form.amount && msg.push('数量不能为空或者0!');
        !form.yield && msg.push('成品率不能为空或者0!');

        if (form.details.length == 0)
            msg.push(`BOM至少需要一行明细信息！`);

        form.details.forEach((d, index) => {
            !d.materiel && msg.push(`明细第${index + 1}行，物料不能为空！`);
            !d.amount && msg.push(`明细第${index + 1}行，用量不能为空或者0！`);
            (!d.lossRate && d.lossRate !== 0) && msg.push(`明细第${index + 1}行，损耗率不能为空！`);
            !d.technicDetail && msg.push(`明细第${index + 1}行，工序不能为空！`);
        })

        return msg
    }



    headerAddRow = () => {
        this.addRow(-1)()
    }

    addRow = (rowIndex) => () => {
        var lst = this.base.gs('data.form.details')
        lst.splice(rowIndex + 1, 0, initState.data.form.details[0])
        this.base.ss({ 'data.form.details': lst })
    }

    delRow = (rowIndex) => () => {
        var lst = this.base.gs('data.form.details')
        lst.splice(rowIndex, 1)
        this.base.ss({ 'data.form.details': lst })
    }

    loadMateriel = async () => {
        return await fetch.post('/v1/materiel/queryAll', {})
    }

    loadTechnic = async () => {
        return await fetch.post('/v1/technic/queryAll', {})
    }

    loadStatus = async () => {
        return [{
            id: 1,
            name: '已使用'
        }, {
            id: 2,
            name: '未使用'
        }]
    }

    loadTechnicDetail = async () => {
        var technic = this.base.gs('data.form.technic')
        if (!technic) return []
        return await fetch.post('/v1/technic/detail/queryAll', { technicId: technic.id })
    }
}