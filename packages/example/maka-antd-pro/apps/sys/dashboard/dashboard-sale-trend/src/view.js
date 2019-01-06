export default {
    component: 'antd.Row',
    gutter: 0,
    className: 'dashboard-sale-trend',
    children: [{
        component: 'antd.Col',
        lg: 12,
        md: 12,
        sm: 24,
        xl: 16,
        xs: 24,
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
                    right: 20,
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
        component: 'antd.Col',
        lg: 12,
        md: 12,
        sm: 24,
        xl: 8,
        xs: 24,
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
