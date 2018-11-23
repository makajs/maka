export default {
    component: 'div',
    className: 'simple-list set-person-list',
    children: [{
        component: 'div',
        className: 'simple-list-header',
        children: [{
            component: 'div',
            className: 'simple-list-header-left',
            children: [{
                component: 'antd.Input.Search',
                className: 'simple-list-header-left-search',
                placeholder: '请录入姓名搜索',
                value: '{{data.filter.search}}',
                onChange: `{{$searchChange}}`
            }, {
                component: 'antd.Button', className: 'icon-button-softly', icon: 'reload', title: '刷新', onClick: '{{$reload}}'
            }]
        }, {
            component: 'div',
            className: 'simple-list-header-center',
        }, {
            component: 'div',
            className: 'simple-list-header-right',
            children: [
                { component: 'antd.Button', className: 'button-bluesky', onClick: '{{$add}}', children: '新增' },
                { component: 'antd.Button', className: 'button-bluesky', onClick: '{{$batchDel}}', children: '批量删除' }
            ]
        }]
    }, {
        component: 'tpl.ReadonlyTable',
        columns: [
            { type: 'sequence' },
            { type: 'isSelected' },
            {
                type: 'custom', title: '', columnKey: 'opt', width: 40, align: 'center',fixed: true,
                cellContent: [{
                    component: 'antd.Icon',
                    className : 'icon-showy',
                    type: 'close',
                    title: '删除',
                    onClick: '{{$del(data.list[row.rowIndex])}}'
                }]
            },
            { type: 'link', title: '姓名', bindField: 'name', onClick: 'modify',fixed: true },
            { type: 'text', title: '部门', bindField: 'department.name',  },
            { type: 'text', title: '性别', bindField: 'sex.name',  width: 60, align: 'center' },
            {
                type: 'text', title: '生日', bindField: 'birthday', width: 200, align: 'center',
                value: `{{{
                    var v = data.list[row.rowIndex].birthday
                    if(!v) return 
                    return $moment(v).format('YYYY-MM-DD')
                }}}`
            },
            { type: 'text', title: '手机', bindField: 'mobile',  width: 200, align: 'center' },
            { type: 'text', title: '地址', bindField: 'address', flexGrow: 1  },
        ]
    }]
}
