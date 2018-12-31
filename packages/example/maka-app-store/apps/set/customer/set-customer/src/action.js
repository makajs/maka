
import { actionMixin } from 'maka'
import React from 'react'

@actionMixin('base', 'lodash', 'moment', 'modal', 'message', 'webapi')
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
        if (this.component.props.customerId || this.component.props.customerId == 0) {
            var resp = await this.webapi.customer.findById({ id: this.component.props.customerId })
            this.base.setState({ 'data.form': resp })
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
            resp = await this.webapi.customer.update(form)
        }
        else {
            resp = await this.webapi.customer.create(form)
        }

        this.base.setState({ 'data.form': resp })
        this.message.success(isModify ? '修改客户成功' : '新增客户成功')

        return resp
    }


    checkSave = (form) => {
        var msg = []
        !form.code && msg.push('请录入编码!');
        !form.name && msg.push('请录入名称!');
        return msg
    }


    loadCustomerGroup = async () => {
        return await this.webapi.customer.group.queryAll({})
    }

}