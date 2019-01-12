const LoadMore = {
    component: 'div',
    style: { textAlign: 'center', marginTop: 16 },
    children: {
        component: 'antd.Button',
        style: { paddingLeft: 48, paddingRight: 48 },
        children: '加载更多'
    }
}


const IconText = {
    component: 'span',
    children: [{
        component: 'antd.Icon',
        type: '{{item.type}}',
        style: { marginRight: 8 },
        children: '{{item.text}}'
    }]
}
const ArticleListContent = {
    component: 'div',
    className: `{{$styles('listContent')}}`,
    children: [{
        component: 'div',
        className: `{{$styles('description')}}`,
        children: '{{item.content}}',
    }, {
        component: 'div',
        className: `{{$styles('extra')}}`,
        children: [{
            component: 'antd.Avatar',
            src: '{{item.avatar}}',
            size: 'small'
        }, {
            component: 'a',
            href: '{{item.href}}',
            children: '{{item.owner}}',

        }, '发布在', {
            component: 'a',
            href: '{{item.href}}',
            children: '{{item.href}}'
        }, {
            component: 'em',
            children: `{{$moment(item.updatedAt).format('YYYY-MM-DD HH:mm')}}`
        }]
    }]

}


export default {
    component: 'antd.Card',
    style: { marginTop: 24 },
    bordered: false,
    bodyStyle: { padding: '8px 32px 32px 32px' },
    children: [{
        component: 'antd.List',
        size: "large",
        rowKey: "id",
        itemLayout: "vertical",
        loadMore: LoadMore,
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
                },'{{item.star}}']
            }, {
                component: 'span',
                children: [{
                    component: 'antd.Icon',
                    type: 'like-o',
                    style: { marginRight: 8 },
                   
                },'{{item.like}}']
            }, {
                component: 'span',
                children: [{
                    component: 'antd.Icon',
                    type: 'message',
                    style: { marginRight: 8 },
                },'{{item.message}}']
            }],
            extra: {
                component: 'div',
                className: `{{$styles('listItemExtra')}}`
            },
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
                        children: 'Ant Design'
                    }, {
                        component: 'antd.Tag',
                        children: '设计语言'
                    }, {
                        component: 'antd.Tag',
                        children: '蚂蚁金服'
                    }]
                }
            },
                ArticleListContent]
        }
    }]


}