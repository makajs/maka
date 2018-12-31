export default {
    component: 'div',
    className: 'devtools-app',
    children: [{
        component: 'div',
        className: 'devtools-app-left',
        children: [{
            component: 'antd.Input.Search',
            placeholder: "请输入app name过滤",
            value: '{{data.search}}',
            onChange: '{{$searchChange}}'
        }, {
            component: 'antd.Tree',
            onSelect: '{{$appSelected}}',
            selectedKeys: '{{data.selectApp ? [data.selectApp.name]: []}}',
            _visible: '{{data.apps && Object.keys(data.apps).length > 0}}',
            children: {
                _for:'item in Object.keys(data.apps).sort()',
                component: 'antd.Tree.TreeNode',
                key: '{{data.apps[item].name}}',
                title: '{{data.apps[item].name}}',
            }
        }]
    }, {
        component: 'div',
        className: 'devtools-app-content',
        children: [{
            component: 'antd.Card',
            className: 'devtools-app-content-main',
            title: {
                component: 'antd.Radio.Group',
                value: '{{data.selectType}}',
                onChange: '{{$typeChange}}',
                children: [{
                    component: 'antd.Radio.Button',
                    value: 'view',
                    children: '视图(view)'
                }, {
                    component: 'antd.Radio.Button',
                    value: 'state',
                    children: '当前状态(state)'
                }]
            },
            extra: {
                component: 'div',
                children: [{
                    component: 'antd.Button',
                    style: { marginRight: 6 },
                    type: 'softly',
                    children: '格式化',
                    onClick: '{{$formatJson}}',
                    _visible: false
                }, {
                    component: 'antd.Button',
                    _visible: "{{data.selectType == 'view'}}",
                    type: 'softly',
                    children: '重置',
                    onClick: '{{$reset}}',
                    _visible: false
                }]
            },
            children: [{
                component: 'JsonViewer',
                theme: 'monokai',
                displayDataTypes: false,
                name: false,
                onAdd: '{{$jsonChange}}',
                onEdit: '{{$jsonChange}}',
                onDelete: '{{$jsonChange}}',
                src: '{{$getViewerSrc(data)}}'
            }]
        }]
    }]
}