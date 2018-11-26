export default {
    component: 'div',
    className: 'simple-list set-bom-list',
    children: [{
        component: 'div',
        className: 'simple-list-header',
        children: [{
            component: 'div',
            className: 'simple-list-header-left',
            children: [{
                component: 'antd.Input.Search',
                className: 'simple-list-header-left-search',
                placeholder: '请录入编码搜索',
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
        component: 'tpl.Table',
        columns: [
            { type: 'sequence' },
            { type: 'isSelected' },
            { type: 'del', onDel: '{{$del(data.list[row.rowIndex])}}' },
            { type: 'link', title: '编码', bindField: 'code', onClick: 'modify', fixed: true },
            { type: 'text', title: '物料编码', bindField: 'materiel.code', flexGrow:1 },
            { type: 'text', title: '物料名称', bindField: 'materiel.name', flexGrow:1},
            { type: 'text', title: '工艺编码', bindField: 'technic.code', flexGrow:1},
            { type: 'text', title: '工艺名称', bindField: 'technic.name', flexGrow:1},
            { type: 'text', title: '数量', bindField: 'amount', flexGrow:1, align: 'right'},
            { type: 'text', title: '成品率', bindField: 'yield', flexGrow:1, align: 'right'},
            { type: 'text', title: '使用状态', bindField: 'status.name', flexGrow:1, align: 'center'},
            
        ]
    }]
}
