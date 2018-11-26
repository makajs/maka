
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
        if (this.component.props.personId || this.component.props.personId == 0) {
            var resp = await fetch.post('/v1/person/findById', { id: this.component.props.personId })
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
            resp = await fetch.post('/v1/person/update', form)
        }
        else {
            resp = await fetch.post('/v1/person/create', form)
        }

        this.base.setState({ 'data.form': resp })
        this.message.success(isModify ? '修改人员成功' : '新增人员成功')

        return resp
    }


    checkSave = (form) => {
        var msg = []
        !form.name && msg.push('请录入姓名!');
        !form.department && msg.push('请录入部门!');
        !form.sex && msg.push('请录入性别!');
        !form.birthday && msg.push('请录入生日!');
        !form.mobile && msg.push('请录入手机!');
        return msg
    }


    loadSex = async () => {
        return [{
            id: 0,
            name: '女'
        }, {
            id: 1,
            name: '男'
        }]
    }

    loadDepartment = async () => {
        return await fetch.post('/v1/department/queryAll', {})
    }

}