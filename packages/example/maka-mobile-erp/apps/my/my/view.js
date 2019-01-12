export default {
    component: 'div',
    className: 'my',
    children: [{
        component: 'antd.WhiteSpace'
    }, {
        component: 'antd.List',
        children: [{
            component: 'antd.Result',
            img: {
                component: 'img',
                src: 'https://avatars3.githubusercontent.com/u/43697360?s=200&v=4',
                className: 'spe am-icon am-icon-md my-info'

            },
            title: 'Maka.js',
            message: {
                component: 'div',
                children: 'React and redux based, lightweight javascript framework'
            }
        }
        ]
    }, {
        component: 'antd.List',
        children: [{
            component: 'antd.List.Item',
            onClick: `{{$setperson}}`,
            thumb: {
                component: 'FA',
                name: 'info-circle',
                style: { color: 'green', fontSize: 22 }
            }, 
            children: '个人信息',
        }]
    }, {
        component: 'antd.WhiteSpace'
    }, {
        component: 'antd.List',
        children: [{
            component: 'antd.List.Item',
            onClick: `{{$setting}}`,
            thumb: {
                component: 'FA',
                name: 'whatsapp',
                style: { color: 'green', fontSize: 22 }
            },
            extra: {
                component: 'FA',
                name: 'github',
                style: { color: 'green', fontSize: 18 }
            },
            children: '联系我们',
        }]
    }, {
        component: 'antd.WhiteSpace'
    }, {
        component: 'antd.List',
        children: [{
            component: 'antd.List.Item',
            onClick: `{{$setting}}`,
            thumb: {
                component: 'FA',
                name: 'credit-card',
                style: { color: 'green', fontSize: 18 }
            },
            children: '钱包',
        }]
    }, {
        component: 'antd.WhiteSpace'
    }, {
        component: 'antd.List',
        children: [{
            component: 'antd.List.Item',
            onClick: `{{$setting}}`,
            thumb: {
                component: 'FA',
                name: 'cog',
                style: { color: 'green', fontSize: 18 }
            },
            children: '设置',
        }]
    }, {
        component: 'antd.Button',
        type: 'warning',
        children: '注销',
        onClick: `{{$signOut}}`,
        style: {
            position: 'absolute',
            bottom: '2px',
            width: '100%',
        }
    }]
}