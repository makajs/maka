export default {
    component: 'div',
    className: 'my',
    children: [{
        component: 'antd.WhiteSpace'
    }, {
        component: 'antd.List',
        children: [{
            component: 'antd.List.Item',
            onClick: `{{$signOut}}`,
            thumb: {
                component: 'FA',
                name: 'reply',
                style: { color: 'green', fontSize: 18 }
            },
            children: '注销',
        }]
    }]
}