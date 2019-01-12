

export default {
    component: 'antd.List',
    rowKey: "id",
    style: { marginTop: 24 },
    grid: { gutter: 24, xl: 4, lg: 3, md: 3, sm: 2, xs: 1 },
    dataSource: '{{data.list}}',
    renderItem: {
        _function: '(item)',
        component: 'antd.List.Item',
        children: [{
            component: 'antd.Card',
            bodyStyle: { paddingBottom: 20 },
            hoverable: true,
            actions: [{
                component: 'antd.Tooltip',
                title: '下载',
                children: {
                    component: 'antd.Icon',
                    type: 'download'
                }
            }, {
                component: 'antd.Tooltip',
                title: '编辑',
                children: {
                    component: 'antd.Icon',
                    type: 'edit'
                }
            }, {
                component: 'antd.Tooltip',
                title: '分享',
                children: {
                    component: 'antd.Icon',
                    type: 'share-alt'
                }
            }, {
                component: 'antd.Dropdown',
                overlay: {
                    component: 'antd.Menu',
                    children: [{
                        component: 'antd.Menu.Item',
                        children: 'a',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        href: 'http://www.alipay.com/',
                        children: '1st menu item'
                    }, {
                        component: 'antd.Menu.Item',
                        children: 'a',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        href: 'http://www.taobao.com/',
                        children: '2st menu item'
                    }, {
                        component: 'antd.Menu.Item',
                        children: 'a',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        href: 'http://www.tmall.com/',
                        children: '3st menu item'
                    }]
                },
                children: {
                    component: 'antd.Icon',
                    type: 'ellipsis'
                }
            }],
            children: [{
                component: 'antd.Card.Meta',
                avatar: {
                    component: 'antd.Avatar',
                    size: 'small',
                    src: '{{item.avatar}}'
                },
                title: '{{item.title}}'
            }, {
                component: 'div',
                className: `{{$styles('cardItemContent')}}`,
                children: [{
                    component: 'div',
                    className: `{{$styles('cardInfo')}}`,
                    children: [{
                        component: 'div',
                        children: [{
                            component: 'p',
                            children: '活跃用户'
                        }, {
                            component: 'p',
                            children: `{{$numberHelper.formatWan(item.activeUser) + '万'}}`
                        }]
                    }, {
                        component: 'div',
                        children: [{
                            component: 'p',
                            children: '新增用户'
                        }, {
                            component: 'p',
                            children: `{{$numeral(item.newUser).format('0,0')}}`
                        }]
                    }]
                }]
            }]
        }]
    }
}
