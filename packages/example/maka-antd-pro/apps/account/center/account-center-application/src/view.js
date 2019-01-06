const styles = {
    root: 'account-center-application',
    filterCardList: 'account-center-application-filterCardList',
    cardInfo: 'account-center-application-cardInfo',
}

const itemMenu = {
    component: 'antd.Menu',
    children: [{
        component: 'antd.Menu.Item',
        children: {
            component: 'a',
            target: '_blank',
            rel: 'noopener noreferrer',
            href: 'http://www.alipay.com/',
            children: '1st menu item'
        }
    }, {
        component: 'antd.Menu.Item',
        children: {
            component: 'a',
            target: '_blank',
            rel: 'noopener noreferrer',
            href: 'http://www.taobao.com/',
            children: '2nd menu item'
        }
    }, {
        component: 'antd.Menu.Item',
        children: {
            component: 'a',
            target: '_blank',
            rel: 'noopener noreferrer',
            href: 'http://www.tmall.com/',
            children: '3nd menu item'
        }
    }]
}
export default {
    component: 'antd.List',
    className: styles.filterCardList,
    rowKey: "id",
    grid: { gutter: 24, xxl: 3, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 },
    dataSource: '{{data.list}}',
    renderItem: {
        _function: '(item)',
        component: 'antd.List.Item',
        key: '{{item.id}}',
        children: [{
            component: 'antd.Card',
            hoverable: true,
            bodyStyle: { paddingBottom: 20 },
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
                overlay: itemMenu,
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
                    src: '{{item.avatar}}',
                    
                },title: '{{item.title}}'
            }, {
                component: 'div',
                //className: styles.cardItemContent,
                children: {
                    component: 'div',
                    className: styles.cardInfo,
                    children: [{
                        component: 'div',
                        children: [{
                            component: 'p',
                            children: '活跃用户',

                        }, {
                            component: 'p',
                            children: '{{item.activeUser}}'
                        }]
                    }, {
                        component: 'div',
                        children: [{
                            component: 'p',
                            children: '新增用户',

                        }, {
                            component: 'p',
                            children: '{{item.newUser}}'
                        }]
                    }]
                }
            }]
        }]

    }


}