

export default {
    component: 'div',
    className: `{{$styles('cardList')}}`,
    children: {
        component: 'antd.List',
        rowKey: "id",
        grid: { gutter: 24, xl: 4, lg: 3, md: 3, sm: 2, xs: 1 },
        dataSource: '{{data.list}}',
        renderItem: {
            _function: '(item)',
            component: 'antd.List.Item',
            children: [{
                component: 'antd.Card',
                className: `{{$styles('card')}}`,
                hoverable: true,
                cover: {
                    component: 'img',
                    alt: '{{item.title}}',
                    src: '{{item.cover}}'
                },
                children: [{
                    component: 'antd.Card.Meta',
                    title: {
                        component: 'a',
                        children: '{{item.title}}',
                        description: {
                            component: 'antdpro.Ellipsis',
                            lines: 2,
                            children: '{{item.subDescription}}'
                        }
                    }
                }, {
                    component: 'div',
                    className: `{{$styles('cardItemContent')}}`,
                    children: [{
                        component: 'span',
                        children: `{{$moment(item.updatedAt).fromNow()}}`,
                    }, {
                        component: 'div',
                        className: `{{$styles('avatarList')}}`,
                        children: [{
                            component: 'antdpro.AvatarList',
                            size: 'mini',
                            children: {
                                _for: '(member,i) in item.members',
                                component: 'antdpro.AvatarList.Item',
                                key: `{{item.id + 'avatar' + i}}`,
                                src: '{{member.avatar}}',
                                tips: '{{member.name}}'
                            }
                        }]
                    }]
                }]
            }]
        }
    }
}