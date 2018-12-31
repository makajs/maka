export default {
    component: 'div',
    className: 'dashboard-trade',
    children: [{
        component: 'div',
        className: 'dashboard-trade-header',
        children: [{
            component: 'span',
            children: '支付笔数'
        }, {
            component: 'antd.Icon',
            className: 'icon-softly',
            type: 'info-circle',
            title: '指标说明'
        }]
    }, {
        component: 'p',
        className: 'dashboard-trade-text',
        children: `{{$numberHelper.format(data.total, 2, ',')}}`
    }, {
        component: 'div',
        className: 'dashboard-trade-chart',
        children: {
            component: 'Echarts',
            option: {
                tooltip: {
                    trigger: 'axis',
                },
                xAxis: {
                    show: false,
                    type: 'category',
                    data: '{{data.x}}'
                },
                yAxis: {
                    show: false,
                },
                grid: {
                    left: 0,
                    right: 0,
                    bottom: 15,
                    top: 15
                },
                series: [{
                    type: 'bar',
                    smooth: true,
                    sampling: 'average',
                    animation: false,
                    itemStyle: {
                        normal: {
                            color: 'rgb(0,134,139)',
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                            shadowBlur: 10
                        },
                    },
                    areaStyle: {
                        normal: {
                            color: 'rgb(0,134,139)',
                        }
                    },
                    data: '{{data.y}}'
                }]
            },
            style: { height: '100%', width: '100%' }
        }

    }, {
        component: 'div',
        className: 'dashboard-trade-footer',
        children: [{
            component: 'span',
            children: '转化率'
        }, {
            component: 'h2',
            children: "{{data.conversionRate*100 + '%'}}"
        }]
    }]
}