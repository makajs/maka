const styles = {
    root: 'account-center-project',
    coverCardList: 'account-center-project-coverCardList',
    cardItemContent: 'account-center-project-cardItemContent',
    avatarList: 'account-center-project-avatarList',
}


export default {
    component: 'antd.List',
    className: styles.coverCardList,
    rowKey: "id",
    grid: { gutter: 24, xxl: 3, xl: 2, lg: 2, md: 2, sm: 2, xs: 1},
    dataSource: '{{data.list}}',
    renderItem: {
        _function: '(item)',
        component: 'antd.List.Item',
        key: '{{item.id}}',
        children: [{
            component: 'antd.Card',
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
                    children: '{{item.title}}'
                },
                description: '{{item.subDescription}}'
            },{
                component: 'div',
                className: styles.cardItemContent,
                children:[{
                    component: 'span',
                    children: '{{$moment(item.updateAt).fromNow()}}'
                },{
                    component: 'div',
                    className: styles.avatarList,
                    children: [{
                        component: 'antdpro.AvatarList',
                        size: 'mini',
                        children:{
                            _for:'member in item.members',
                            component: 'antdpro.AvatarList.Item',
                            key:`{{item.id+member.id}}`,
                            src: '{{member.avatar}}',
                            tips: '{{member.name}}'

                        }
                    }]
                }]
            }]
        }]

    }


}