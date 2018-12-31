import React from 'react'
import { actionMixin } from 'maka'
import initState from './state'

@actionMixin('base', 'moment', 'tableHelper', 'keyboardHelper', 'message', 'modal', 'webapi')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
        this.base.setState = this.setState(this.base.setState)
    }

    onInit = async () => {
        //设置监听tab关闭事件
        this.component.props.addTabCloseListener
            && this.component.props.addTabCloseListener(this.component.props.appFullName, this.tabClose)

        //设置监听tab激活事件
        this.component.props.addTabActiveListener
            && this.component.props.addTabActiveListener(this.component.props.appFullName, this.tabActive)

        if (this.component.props.bomId || this.component.props.bomId == 0) {
            var resp = await this.webapi.bom.findById({ id: this.component.props.bomId })
            this.setForm(resp)
        }
    }

    checkChanged = async () => {
        if (this.base.gs('data.other.isChanged')) {
            return await this.modal.confirm({
                title: '确认',
                content: '存在未保存的更改，是否继续该操作?'
            })
        }
        return true
    }

    prev = async () => {
        if (await this.checkChanged() == false)
            return
        var resp = await this.webapi.bom.prev({ id: this.base.gs('data.form.id') })
        this.setForm(resp)
    }

    next = async () => {
        if (await this.checkChanged() == false)
            return
        var resp = await this.webapi.bom.next({ id: this.base.gs('data.form.id') })
        this.setForm(resp)
    }

    add = async () => {
        if (await this.checkChanged() == false)
            return
        this.base.ss({ 'data': initState.data })
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
            resp = await this.webapi.bom.update(form)
        }
        else {
            resp = await this.webapi.bom.create(form)
        }

        this.setForm(resp)
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
        return await this.webapi.materiel.queryAll({})
    }

    loadTechnic = async () => {
        return await this.webapi.technic.queryAll({})
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
        return await this.webapi.technic.detail.queryAll({ technicId: technic.id })
    }

    //重写base setState方法，记录数据变化后写isChanged标志
    setState = (baseSetState) => (json) => {
        json['data.other.isChanged'] = (json['data.other.isChanged'] !== false)
        baseSetState(json)
    }

    setForm = (form) => {
        this.base.setState({
            'data.form': form,
            'data.other.isChanged': false
        })
    }

    tabActive = async () => {
        if (await this.checkChanged() == false)
            return
        var resp = await this.webapi.bom.findById({ id: this.component.props.bomId })
        this.setForm(resp)
    }

    tabClose = async () => {
        return await this.checkChanged()
    }
}