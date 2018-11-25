export default {
    component: 'div',
    className: 'dashboard-hot-search',
    children: [{
        component: 'div',
        className: 'dashboard-hot-search-top',
        children: [{
            component: 'div',
            className: 'dashboard-hot-search-top-left',
            children: [{
                component: 'span',
                children: '搜索用户数'
            }, {
                component: 'h2',
                children: '{{data.userCount.total}}'
            }, {
                component: 'Echarts',
                option: '{{$getChartOption(data.userCount)}}',
                style: { height: 70, width: '100%' }
            }]
        }, {
            component: 'div',
            className: 'dashboard-hot-search-top-right',
            children: [{
                component: 'span',
                children: '搜索次数'
            }, {
                component: 'h2',
                children: '{{data.searchCount.total}}'
            }, {
                component: 'Echarts',
                option: '{{$getChartOption(data.searchCount)}}',
                style: { height: 70, width: '100%' }
            }]
        }]
    }, {
        component: 'div',
        className: 'dashboard-hot-search-bottom',
        children: [{
            component: 'tpl.ReadonlyTable',
            enablePagination: false,
            columns: [
                { type: 'text', title: '排名', bindField: 'ranking', width: 40, align: 'center' },
                { type: 'text', title: '关键字', bindField: 'key', flexGrow: 1 },
                { type: 'text', title: '搜索次数', bindField: 'searchCount', width: 60, align: 'right' },
                { type: 'text', title: '周涨幅', bindField: 'weeklyGains', width: 60, align: 'right' }
            ]
        }]
    }]
}