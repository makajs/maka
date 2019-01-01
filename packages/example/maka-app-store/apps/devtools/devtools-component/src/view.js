export default {
    component: 'div',
    className: 'devtools-component',
    children: [{
        component: 'div',
        className: 'devtools-component-left',
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
        className: 'devtools-component-content',
        children: [{
            component: 'antd.Input',
            style: {marginBottom: 10},
            disabled: true,
            value: `{{ data.selectedNode ? ( $getUrl(data.selectedNode.id) || '未配置帮助网址') : ''}}`
        }, {
            component: 'AppLoader',
            appName: 'common-iframe?component',
            iframeSrc: `{{data.selectedNode ? $getUrl(data.selectedNode.id): ''}}`
        }]
    }]
}