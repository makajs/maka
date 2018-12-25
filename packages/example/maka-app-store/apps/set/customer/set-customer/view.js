export default {
    component: 'div',
    className: 'simple-modal-card set-customer',
    children: {
        component: 'tpl.Form',
        children: [
            {
                type: 'select', title: '客户组', required: true, bindPath: 'data.form.customerGroup',
                onLoadOption: '{{$loadCustomerGroup}}', onChange: `{{(v)=>$base.setState({'data.form.customerGroup': v })}}`,
            },
            { type: 'input', title: '编码', required: true, bindPath: 'data.form.code' },
            { type: 'input', title: '名称', required: true, bindPath: 'data.form.name' },
            { component: 'antd.Button', children: '保存', onClick: '{{$save}}', _visible: false }
        ]
    }
}