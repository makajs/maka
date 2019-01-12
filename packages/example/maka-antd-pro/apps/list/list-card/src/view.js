export default {
    component: 'Fragment',
    children: [{
        component: 'div',
        className: `{{$styles('cardList')}}`,
        children: [{
            component: 'antd.List',
            rowKey: 'id',
            grid: { gutter: 24, lg: 3, md: 2, sm: 1, xs: 1 },
            dataSource: `{{$getDataSource()}}`,
            renderItem: {
                _function: '(item)',
                component: 'Fragment',
                children: [{
                    component: 'antd.List.Item',
                    _visible: '{{!!item.id}}',
                    key: '{{item.id}}',
                    children: [{
                        component: 'antd.Card',
                        hoverable: true,
                        className: `{{$styles('card')}}`,
                        actions: [{
                            component: 'a',
                            children: '操作一'
                        }, {
                            component: 'a',
                            children: '操作二'
                        }],
                        children: [{
                            component: 'antd.Card.Meta',
                            avatar: {
                                component: 'img',
                                alt: '',
                                className: `{{$styles('cardAvatar')}}`,
                                src: '{{item.avatar}}'
                            },
                            title: {
                                component: 'a',
                                children: '{{item.title}}',
                            },
                            description: {
                                component: 'antdpro.Ellipsis',
                                className: `{{$styles('item')}}`,
                                lines: 3,
                                children: '{{item.description}}'
                            }
                        }]
                    }]
                }, {
                    component: 'antd.List.Item',
                    _visible: '{{!item.id}}',
                    children: {
                        component: 'antd.Button',
                       
                        className: `{{$styles('newButton')}}`,
                        children: [{
                            component: 'antd.Icon',
                            type: 'plus'
                        }, '新增产品']
                    }

                }]
            }
        }]
    }]
}