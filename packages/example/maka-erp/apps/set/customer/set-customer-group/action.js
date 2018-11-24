
import { actionMixin, fetch } from 'maka'
import React from 'react'

@actionMixin('base', 'lodash', 'moment', 'modal', 'message')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    onInit = () => {
        if (this.component.props.setOkListener)
            this.component.props.setOkListener(this.onOk)
        this.load()
    }

    load = async () => {
        if (this.component.props.customerGroupId || this.component.props.customerGroupId == 0) {
            console.log(this.component.props.customerGroupId)
            var resp = await fetch.post('/v1/customer/group/findById', { id: this.component.props.customerGroupId })
            this.base.setState({ 'data.form': resp })
        }
        else if(this.component.props.parent){
            this.base.setState({'data.form.customerGroup': this.component.props.parent})
        }
    }

    onOk = async () => {
        return await this.save()
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
            resp = await fetch.post('/v1/customer/group/update', form)
        }
        else {
            resp = await fetch.post('/v1/customer/group/create', form)
        }

        this.base.setState({ 'data.form': resp })
        this.message.success(isModify ? '修改客户组成功' : '新增客户组成功')

        return resp
    }


    checkSave = (form) => {
        var msg = []
        !form.code && msg.push('请录入编码!');
        !form.name && msg.push('请录入名称!');
        return msg
    }


    loadDepartment = async () => {
        var resp = await fetch.post('/v1/department/queryAll', {})
        return resp.map(o => {
            return { ...o, codeAndName: `(${o.code})${o.name}` }
        })
    }

}