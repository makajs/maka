
import { actionMixin, navigate, fetch } from 'maka'
import React from 'react'

@actionMixin('base', 'lodash', 'moment', 'modal', 'toast')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }
    
    onInit = () => {
        this.load()
    }

    load = async () => {
        let formStr = localStorage['set-person:form']
        if(formStr){ 
            let form = JSON.parse(formStr)
            form.birthday = new Date(form.birthday)
            this.base.setState({ 'data.form': form })
        } else if (this.component.props.personId || this.component.props.personId == 0) {
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
            this.toast.fail(
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
        this.toast.success(isModify ? '修改人员成功' : '新增人员成功')
        
        localStorage['set-person:form'] = '' 

        console.log(form)
        this.goBack()
        
        return resp
    }


    checkSave = (form) => {
        var msg = []
        !form.name && msg.push('请录入姓名!');
        // !form.department && msg.push('请录入部门!');
        // !form.sex && msg.push('请录入性别!');
        // !form.birthday && msg.push('请录入生日!');
        !form.mobile && msg.push('请录入手机!');
        return msg
    }

 

    loadDepartment = async () => {
        let deps = await fetch.post('/v1/department/queryAll', {})
        return deps.map(i=>({
            value: i.id,
            label: i.name
        }));
    }

    goBack = () => { 
        navigate.goBack()
    }

    deleteItem = (index) => () =>{ 
        const form = this.base.gs('data.form')
        form.list = form.list.filter((item,i) => i != index)
        if(form.list.length == 0){
            form.list.push({})
        }
        this.base.ss('data.form', form)
    }

    addItem = (index) => () =>{ 
        const form = this.base.gs('data.form')
        form.list.push({})
        this.base.ss('data.form', form)
    }

    setItem = (index, key) => (value) =>{
        const form = this.base.gs('data.form')
        let item = form.list.filter((item,i) => i == index)[0]
        item[key] = value
        this.base.ss('data.form', form) 
    }

    filesOnChange = (files, type, index) => { 
        console.log(files, type, index)
        this.base.ss('data.form.files', files)  
    }

    saveLocal = () => { 
        const form = this.base.gs('data.form')
        let formStr = JSON.stringify(form)
        try { 
            localStorage['set-person:form'] = formStr   
        } catch (error) {
            form.files = []
            localStorage['set-person:form'] = JSON.stringify(form)   
        } 
        this.toast.success('暂存成功')
        this.goBack()
    }
}