export default {
    component: 'div',
    className: 'home-ip-list',
    children: [{
        component: 'antd.NavBar',
        className: 'home-ip-list-navbar',
        onLeftClick: '{{$goBack}}',
        icon: {
            component: 'FA',
            name: 'angle-left',
            style: { fontSize: 32 }
        },
        rightContent: {
            component: 'antd.Popover',
            visible: '{{data.other.filterVisible}}',
            onVisibleChange: `{{(visible)=>$base.ss({'data.other.filterVisible': visible})}}`,
            onSelect: '{{$filterChange}}',
            overlay: [{
                _for: 'item in data.other.filterDataSource',
                component: 'antd.Popover.Item',
                key: '{{item.value}}',
                value: '{{item.value}}',
                children: [{
                    component: 'span',
                    style: { marginRight: 8 },
                    children: {
                        component: 'FA',
                        name: 'check',
                        _visible: '{{ data.filter.type == item.value }}'
                    }
                }, '{{item.label}}']
            }],
            children: {
                component: 'FA',
                name: 'filter'
            }
        },
        children: '收支明细'
    }, {
        component: 'antd.ListView',
        className: 'home-ip-list-content',
        dataSource: '{{$getDataSource()}}',
        onEndReachedThreshold: 500,
        scrollRenderAheadDistance: 200,
        pageSize: 4,
        onEndReached: '{{$endReached}}',
        onScroll: '{{()=>{}}}',
        pullToRefresh: {
            component: 'antd.PullToRefresh',
            onRefresh: '{{$reload}}'
        },
        renderHeader: {
            _function: '()',
            component: 'div',
            className: 'home-ip-list-header',
            children: [{
                component: 'div',
                children: '{{data.other.filterDataSource.find(o=>o.value==data.filter.type).label}}'
            }, {
                component: 'div',
                children: [
                    `{{'收入：' + $numberHelper.format(data.total.income,2)}}`, 
                    {component: 'span', style: {margin:'0 10px'}},
                    `{{'支出：'+ $numberHelper.format(data.total.pay * -1,2)}}`
                ]
            }]
        },
        renderFooter: {
            _function: '()',
            component: 'div',
            children: `{{data.isLoading?'加载中...':''}}`,
        },
        renderRow: {
            _function: '(row, sectionID, rowID)',
            component: 'div',
            key: '{{rowID}}',
            children: [{
                component: 'div',
                className: 'home-ip-list-content-row',
                children: [{
                    component: 'FA',
                    className: 'home-ip-list-content-row-icon',
                    name: 'usd'
                }, {
                    component: 'div',
                    className: 'home-ip-list-content-row-center',
                    children: [{
                        component: 'div',
                        className: 'home-ip-list-content-row-title',
                        children: `{{row.goods.name }}`
                    }, {
                        component: 'div',
                        className: 'home-ip-list-content-row-date',
                        children: '{{row.date}}'
                    }]
                }, {
                    component: 'div',
                    className: 'home-ip-list-content-row-amount',
                    style: { color: `{{row.amount < 0 ? 'green': 'red'}}` },
                    children: `{{(row.amount < 0 ?'':'+') + $numberHelper.format(row.amount,2)}}`

                }]
            }]
        },
        renderSeparator: {
            _function: '(sectionID,rowID)',
            component: 'div',
            key: '{{rowID}}',
            style: {
                backgroundColor: '#F5F5F9',
                height: 1,
            }
        }

    }]
}