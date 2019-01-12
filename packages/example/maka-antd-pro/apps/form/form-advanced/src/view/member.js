const columns = [{
    title: '成员姓名',
    dataIndex: 'name',
    key: 'name',
    width: '20%',
    render: {
        _function: '(text, record)',
        _firstReturn: '{{!record.editable && text}}',
        component: 'antd.Input',
        value: '{{text}}',
        autoFocus: true,
        onChange: `{{$fieldChange('name', record.key)}}`,
        onKeyPress: `{{e=>$keyPress(e, record.key)}}`,
        placeholder: '成员姓名',
    }
}, {
    title: '工号',
    dataIndex: 'workId',
    key: 'workId',
    width: '20%',
    render: {
        _function: '(text, record)',
        _firstReturn: '{{!record.editable && text}}',
        component: 'antd.Input',
        value: '{{text}}',
        autoFocus: true,
        onChange: `{{$fieldChange('workId', record.key)}}`,
        onKeyPress: `{{e=>$keyPress(e, record.key)}}`,
        placeholder: '工号',
    }
}, {
    title: '所属部门',
    dataIndex: 'department',
    key: 'department',
    width: '40%',
    render: {
        _function: '(text, record)',
        _firstReturn: '{{!record.editable && text}}',
        component: 'antd.Input',
        value: '{{text}}',
        autoFocus: true,
        onChange: `{{$fieldChange('department', record.key)}}`,
        onKeyPress: `{{e=>$keyPress(e, record.key)}}`,
        placeholder: '所属部门',
    }

}, {
    title: '操作',
    key: 'action',
    render: {
        _function: '(text, record)',
        component: 'Fragment',
        children: [{
            component: 'span',
            _visible: '{{!!(record.editable && record.isNew)}}',
            children: [{
                component: 'a',
                onClick: '{{$saveRow(record.key)}}',
                children: '保存'
            }, {
                component: 'antd.Divider',
                type: 'vertical',
            }, {
                component: 'antd.Popconfirm',
                title: '是否要删除此行？',
                onConfirm: '{{$removeRow(record.key)}}',
                children: {
                    component: 'a',
                    children: '删除'
                }
            }]
        }, {
            component: 'span',
            _visible: '{{!!(record.editable && !record.isNew)}}',
            children: [{
                component: 'a',
                onClick: '{{$saveRow(record.key)}}',
                children: '保存'
            }, {
                component: 'antd.Divider',
                type: 'vertical'
            }, {
                component: 'a',
                onClick: '{{$cancelRow(record.key)}}',
                children: '取消'
            }]
        }, {
            component: 'span',
            _visible: '{{!record.editable}}',
            children: [{
                component: 'a',
                onClick: '{{$toggleEditable(record.key)}}',
                children: '编辑'
            }, {
                component: 'antd.Divider',
                type: 'vertical'
            }, {
                component: 'antd.Popconfirm',
                title: '是否要删除此行？',
                onConfirm: '{{$removeRow(record.key)}}',
                children: {
                    component: 'a',
                    children: '删除'
                }
            }]
        }]
    }
}]

export default {
    component: 'antd.Card',
    title: '成员管理',
    bordered: false,
    children: [{
        component: 'antd.Table',
        columns,
        dataSource: '{{data.table}}',
        pagination: false,
        rowClassName: `{{record => record.editable ? $styles('editable') : ''}}`
    },{
        component: 'antd.Button',
        style: { width: '100%', marginTop: 16, marginBottom: 50 },
        type:"dashed",
        onClick:'{{$newRow}}',
        icon:"plus"
    }]

}