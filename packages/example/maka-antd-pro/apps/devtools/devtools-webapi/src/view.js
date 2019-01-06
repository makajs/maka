export default {
    component: 'div',
    className: 'devtools-webapi',
    children: [{
        component: 'div',
        className: 'devtools-webapi-left',
        children: [{
            component: 'antd.Input.Search',
            placeholder: "请输入app name过滤",
            value: '{{data.search}}',
            onChange: '{{$searchChange}}'
        }, {
            component: 'antd.Tree',
            onSelect: '{{$nodeSelected}}',
            selectedKeys: '{{data.selectedNode ? [data.selectedNode.id]: []}}',
            children: `{{$treeHelper.loopTreeChildren(data.treeDs)}}`,
            _visible: '{{data.treeDs && data.treeDs.length > 0}}',
        }]
    }, {
        component: 'div',
        className: 'devtools-webapi-content',
        children: [{
            component: 'antd.Input',
            style: {marginBottom: 10},
            disabled: true,
            value: `{{ data.selectedNode ? (data.selectedNode.url || '未配置帮助网址') : ''}}`

        }, {
            component: 'AppLoader',
            appName: 'common-iframe?action',
            iframeSrc: `{{data.selectedNode ? data.selectedNode.url: ''}}`
        }]
    }]
}