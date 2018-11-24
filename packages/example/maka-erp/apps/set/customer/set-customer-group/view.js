export default {
    component: 'div',
    className: 'simple-modal-card set-customer-group',
    children: {
        component: 'tpl.Form',
        children: [
            { type: 'input', title: '上级客户组', disabled: true, bindPath: 'data.form.customerGroup.name'},
            { type: 'input', title: '编码', required: true, bindPath: 'data.form.code' },
            { type: 'input', title: '名称', required: true, bindPath: 'data.form.name' },
            { component: 'antd.Button', children: '保存', onClick: '{{$save}}', _visible: false}
        ]
    }
}