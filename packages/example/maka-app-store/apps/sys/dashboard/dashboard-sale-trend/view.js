export default {
    component: 'div',
    className: 'dashboard-sale-trend',
    children: [{
        component: 'div',
        className: 'dashboard-sale-trend-left',
        children: [{
            component: 'span',
            children: '总销售额趋势'
        }, {
            component: 'Echarts',
            option: {
                tooltip: {
                    trigger: 'axis',
                },
                xAxis: [{
                    type: 'category',
                    data: '{{data.saleTrend.x}}'
                }],
                yAxis: [{
                    type: 'value'
                }],
                grid: {
                    left: 60,
                    right: 100,
                    bottom: 20,
                    top: 20
                },
                series: [{
                    type: 'bar',
                    smooth: true,
                    sampling: 'average',
                    animation: false,
                    itemStyle: {
                        normal: {
                            color: 'rgb(70, 130, 180)',
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                            shadowBlur: 10
                        },
                    },
                    areaStyle: {
                        normal: {
                            color: 'rgb(70, 130, 180)',
                        }
                    },
                    data: '{{data.saleTrend.y}}'
                }]
            }
        }]
    }, {
        component: 'div',
        className: 'dashboard-sale-trend-right',
        children: [{
            component: 'span',
            className: 'dashboard-sale-trend-right-title',
            children: '门店销售额排行'
        }, {
            component: 'div',
            className: 'dashboard-sale-trend-right-list',
            children: {
                _for: 'item in data.topForStore',
                component: 'div',
                className: 'dashboard-sale-trend-right-list-detail',
                children: [{
                    component: 'antd.Badge',
                    count: '{{item.index}}'
                }, {
                    component: 'div',
                    className: 'dashboard-sale-trend-right-list-detail-name',
                    children: '{{item.storeName}}'
                }, {
                    component: 'div',
                    children: '{{item.total}}'
                }]

            }
        }]
    }]
}
