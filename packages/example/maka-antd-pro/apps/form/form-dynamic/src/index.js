import pkgJson from '../package.json'
import { actionMixin, getTemplate, load } from 'maka'
import './style.less'

const name = pkgJson.name

const state = {
    data: {
        content: 'hello ',
        input: ''
    }
}

@actionMixin('base')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    } 

    dynamicView = () => {
        let viewJson = this.component.props.view || viewForm
        if(typeof viewJson == "string"){
            viewJson = JSON.parse(viewJson)
        }
        let view = getTemplate('tpl.Form')(viewJson)
        return view
    }

    loadDepartment = () => {}
    loadSex = () => {}
    save = () => {}
}
 
const viewForm = {
    component: 'tpl.Form',
    children: [
        { type: 'select', title: '所属部门', required: true, bindPath: 'data.form.department', onLoadOption: '{{$loadDepartment}}', displayGetter: `{{(v)=>v && '(' + v.code + ')'+v.name}}` },
        { type: 'input', title: '姓名', required: true, bindPath: 'data.form.name' },
        { type: 'select', title: '性别', required: true, bindPath: 'data.form.sex', onLoadOption: '{{$loadSex}}' },
        { type: 'datePicker', title: '生日', required: true, bindPath: 'data.form.birthday' },
        { type: 'number', title: '手机', required: true, bindPath: 'data.form.mobile' },
        { type: 'input', title: '地址', bindPath: 'data.form.address' },
        { component: 'antd.Button', children: '保存', onClick: '{{$save}}', _visible: false}
    ]
}

const viewDynamic = { 
    component:'tpl.DynamicView' 
}

const viewDynamicWrapped = { 
    component:'div',
    children:{
        component:'tpl.DynamicView' 
    }
}

const view = viewDynamicWrapped

async function beforeRegister() {
    await load(['template'])
}
export {
    name,
    state,
    action,
    view,
    beforeRegister
}