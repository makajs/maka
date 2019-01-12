export default {
    component: 'div',
    className: 'tree-table set-customer-list',
    children: [{
        component: 'antd.Card',
        className: 'tree-table-left',
        title: '客户组',
        extra: {
            component: 'div',
            className: 'tree-table-left-extra',
            children: [
                { component: 'antd.Button', className: 'icon-button-softly', icon: 'reload', title: '刷新', onClick: '{{$treeReload}}' },
                { component: 'antd.Button', className: 'icon-button-softly', icon: 'plus', title: '新增', onClick: '{{$treeAdd}}' },
                { component: 'antd.Button', className: 'icon-button-softly', icon: 'edit', title: '修改', onClick: '{{$treeModify}}' },
                { component: 'antd.Button', className: 'icon-button-showy', icon: 'close', title: '删除', onClick: '{{$treeDel}}' },
            ]
        },
        children: [{
            component: 'antd.Tree',
            selectedKeys: `{{[data.filter.customerGroupId+'']}}`,
            onSelect: '{{$treeSelect}}',
            onExpand: `{{(expandedKeys)=>$base.setState({'data.other.exandedKeys':expandedKeys} )}}`,
            expandedKeys: '{{data.other.exandedKeys}}',
            children: `{{$treeHelper.loopTreeChildren(data.tree)}}`
        }]
    }, {
        component: 'antd.Card',
        className: 'tree-table-content',
        title: {
            component: 'div',
            className: 'tree-table-content-header-left',
            children: [{
                name: 'search',
                component: 'antd.Input.Search',
                className: 'tree-table-content-header-left-search',
                placeholder: '编码/名称',
                value: '{{data.filter.search}}',
                onChange: `{{$searchChange}}`
            }, {
                component: 'antd.Button', className: 'icon-button-softly', icon: 'reload', title: '刷新', onClick: '{{$reload}}'
            }]
        },
        extra: {
            component: 'div',
            className: 'tree-table-content-header-right',
            children: [
                { component: 'antd.Button', className: 'button-bluesky', onClick: '{{$add}}', children: '新增' },
                { component: 'antd.Button', className: 'button-bluesky', onClick: '{{$batchDel}}', children: '批量删除' }
            ]
        },
        children: {
            component: 'tpl.Table',
            autoHeight: false,
            bindPath: 'data.list',
            columns: [
                { type: 'sequence' },
                { type: 'isSelected' },
                { type: 'del', onDel: '{{$del(data.list[row.rowIndex])}}'},
                { type: 'link', title: '编码', bindField: 'code', onClick: 'modify', flexGrow:1 },
                { type: 'text', title: '名称', bindField: 'name', flexGrow:1 },
            ]
        }
    }]
}

