export default {
    component: 'antd.List',
    className: `{{$styles('root')}}`,
    size: "large",
    rowKey: "id",
    itemLayout: "vertical",
    dataSource: '{{data.list}}',
    renderItem: {
        _function: '(item)',
        component: 'antd.List.Item',
        key: '{{item.id}}',
        actions: [{
            component: 'span',
            children: [{
                component: 'antd.Icon',
                type: 'star-o',
                style: { marginRight: 8 },
            }, '{{item.star}}']
        }, {
            component: 'span',
            children: [{
                component: 'antd.Icon',
                type: 'like-o',
                style: { marginRight: 8 },
            }, '{{item.like}}']
        }, {
            component: 'span',
            children: [{
                component: 'antd.Icon',
                type: 'message',
                style: { marginRight: 8 },
            }, '{{item.message}}']
        }],
        children: [{
            component: 'antd.List.Item.Meta',
            title: {
                component: 'a',
                className: `{{$styles('listItemMetaTitle')}}`,
                href: '{{item.href}}',
                children: '{{item.title}}'
            },
            description: {
                component: 'span',
                children: [{
                    component: 'antd.Tag',
                    children: 'Ant Design',

                }, {
                    component: 'antd.Tag',
                    children: '设计语言',

                }, {
                    component: 'antd.Tag',
                    children: '蚂蚁金服',

                }]
            }
        }, {
            component: 'div',
            className: `{{$styles('listContent')}}`,
            children: [{
                component: 'div',
                className: `{{$styles('description')}}`,
                children: '{{item.content}}'
            }, {
                component: 'div',
                className: `{{$styles('extra')}}`,
                children: [{
                    component: 'antd.Avatar',
                    src: '{{item.avatar}}',
                }, {
                    component: 'a',
                    children: '{{item.owner}}',

                }, '发布在', {
                    component: 'a',
                    children: '{{item.href}}'
                }, {
                    component: 'em',
                    children: `{{$moment(item.updateAt).format('YYYY-MM-DD HH:mm')}}`
                }]
            }]
        }]
    }

}