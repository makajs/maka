export default {
    component: 'div',
    className: 'article-list',
    children: [{
        component: 'div',
        className: 'article-list-header',
        children: [{
            component: 'div',
            className: 'article-list-header-left',
        },{
            component: 'div',
            className: 'article-list-header-right',
            children: [{
                component: 'antd.Input.Search',
                placeholder: '搜索',
                value: '{{data.filter.search}}',
                style: {width: 200},
                onChange: `{{$searchChange}}`
            },{
                component: 'antd.Icon',
                className: 'icon-softly',
                type: 'plus-circle-o',
                title: '写文章',
                onClick: '{{$add}}'
            }]
        }]

    }, {
        component: 'antd.List',
        className: 'article-list-content',
        itemLayout: 'vertical',
        size: 'large',
        dataSource: '{{data.list}}',
        renderItem: {
            _function: '(item, rowIndex)',
            component: 'antd.List.Item',
            key: '{{rowIndex}}',
            actions: [{
                component: 'div',
                className: 'article-list-content-item-actions',
                children: [{
                    component: 'span',
                    className: 'article-list-content-item-time',
                    children: `{{ $moment(data.list[rowIndex].updateTime).format('YYYY-MM-DD hh:mm:ss')}}`
                },{
                    component: 'antd.Icon',
                    className: 'article-list-content-item-actions-icon icon-showy',
                    type: 'edit',
                    title: '编辑',
                    onClick: '{{$edit(data.list[rowIndex].id)}}'
                },{
                    component: 'antd.Icon',
                    className: 'article-list-content-item-actions-icon icon-showy',
                    type: 'close',
                    title: '删除',
                    onClick: '{{$del(data.list[rowIndex].id)}}'
                }]
            }],
            children: [{
                component: 'antd.List.Item.Meta',
                title: [{
                    component: 'a',
                    children: `{{data.list[rowIndex].title}}`,
                    onClick: '{{$view(data.list[rowIndex].id)}}'
                }],
                description: `{{data.list[rowIndex].content}}`
            
            }],
      
        }
    },{
        component: 'div',
        className: 'article-list-footer',
        children: [{
            component: 'antd.Pagination',
            pageSize: '{{data.pagination.pageSize}}',
            current: '{{data.pagination.current}}',
            total: '{{data.pagination.total}}',
            onChange: '{{$pageChanged}}',
            onShowSizeChange: '{{$pageChanged}}'
        }]
    }]
}