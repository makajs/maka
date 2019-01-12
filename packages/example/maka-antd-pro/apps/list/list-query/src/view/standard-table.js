
const columns = [{
    title: '规则名称',
    dataIndex: 'name',
}, {
    title: '描述',
    dataIndex: 'desc',
}, {
    title: '服务调用次数',
    dataIndex: 'callNo',
    sorter: true,
    align: 'right',
    render: val => `${val} 万`,
    needTotal: true,
}, {
    title: '状态',
    dataIndex: 'status',
    filters: [{
        text: status[0],
        value: 0,
    }, {
        text: status[1],
        value: 1,
    }, {
        text: status[2],
        value: 2,
    }, {
        text: status[3],
        value: 3,
    }],
    render: {
        _function: '(val)',
        component: 'antd.Badge',
        status: '{{data.statusMap[val]}}',
        value: '{{data.status[val]}}'
    }
}, {
    title: '上次调度时间',
    dataIndex: 'updatedAt',
    sorter: true,
    render: {
        _function: '(val)',
        component: 'span',
        children: `{{$moment(val).format('YYYY-MM-DD HH:mm:ss')}}`
    }
}, {
    title: '操作',
    render: {
        _function: '(text, record)',
        component: 'Fragment',
        children: [{
            component: 'a',
            onClick: '{{$setting(record)}}',
            children: '配置'
        }, {
            component: 'antd.Divider',
            type: 'vertical',

        }, {
            component: 'a',
            children: '订阅警报'
        }],
    }
}]


export default {
    component: 'div',
    className: `{{$styles('standardTable')}}`,
    children: {
        component: 'div',
        className: `{{$styles('tableAlert')}}`,
        children: [{
            component: 'antd.Alert',
            message: [
                '已选择', {
                    component: 'a',
                    style: { fontWeight: 600 },
                    children: '{{$getSelectedRowKeys().length}}'
                },
                '项', {
                    component: 'span',
                    style: { marginLeft: 8 },
                    key: 'callNo',
                    children: [
                        '服务调用次数',
                        '总计', {
                            component: 'span',
                            style: { fontWeight: 600 },
                            children: `{{$sum('callNo') + '万'}}`
                        }
                    ],
                    _visible: '{{data.selectedRows && data.selectedRows.length > 0}}'
                }, {
                    component: 'a',
                    onClick: '{{$clearSelectedKeys}}',
                    style: { marginLeft: 24 },
                    children: '清空'
                }],
            type: 'info',
            showIcon: true
        }, {
            component: 'antd.Table',
            rowKey: 'key',
            rowSelection: {
                selectedRowKeys: '{{$getSelectedRowKeys()}}',
                onChange: '{{$selectRowsChange}}',
                getCheckboxProps: record => ({
                    disabled: record.disabled
                }),
            },
            columns,
            dataSource: '{{data.list}}',
            pagination: `{{({
                ...data.pagination, 
                showSizeChanger: true,
                showQuickJumper: true
            })}}`,
            onChange: '{{$tableChange}}'
        }]
    }
}