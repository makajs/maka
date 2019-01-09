export default {
    component: 'div',
    className: 'set-person',
    children:  [{
        component: 'antd.NavBar',
        className: 'set-person-navbar',
        onLeftClick: '{{$goBack}}',
        icon: {
            component: 'FA',
            name: 'angle-left',
            style: { fontSize: 32 }
        }, 
        children: '个人信息'
    },{
        component: 'tpl.Form',
        children: [
            { type: 'select', title: '所属部门', required: true, bindPath: 'data.form.department', onLoadOption: '{{$loadDepartment}}', displayGetter: `{{(v)=>v && '(' + v.code + ')'+v.name}}` },
            { type: 'input', title: '姓名', required: true, bindPath: 'data.form.name' },
            { type: 'select', title: '性别', required: true, bindPath: 'data.form.sex', onLoadOption: '{{$loadSex}}' },
            { type: 'datePicker', title: '生日', required: true, bindPath: 'data.form.birthday' },
            { type: 'number', title: '手机', required: true, bindPath: 'data.form.mobile' },
            { type: 'input', title: '地址', bindPath: 'data.form.address' },
            { component: 'antd.Button', type: 'primary', children: '保存', onClick: '{{$save}}'}
        ]
    }]
}