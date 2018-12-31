export default {
    component: 'div',
    className: 'dashboard-visit',
    children: [{
        component: 'div',
        className: 'dashboard-visit-header',
        children: [{
            component: 'span',
            children: '总访问量'
        }, {
            component: 'antd.Icon',
            className: 'icon-softly',
            type: 'info-circle',
            title: '指标说明'
        }]
    }, {
        component: 'p',
        className: 'dashboard-visit-text',
        children: `{{$numberHelper.format(data.total, 2, ',')}}`
    }, {
        component: 'div',
        className: 'dashboard-visit-chart',
        children: {
            component: 'Echarts',
            option: {
                tooltip: {
                    trigger: 'axis',
                },
                xAxis: {
                    show: false,
                    type: 'category',
                    boundaryGap: false,
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
                    type: 'line',
                    smooth: true,
                    sampling: 'average',
                    animation: false,
                    itemStyle: {
                        normal: {
                            color: 'rgb(255, 70, 131)',
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                            shadowBlur: 10
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: 'rgb(255, 70, 131)',
                        }
                    },
                    data: '{{data.y}}'
                }]
            },
            style: { height: '100%', width: '100%' }
        }
    }, {
        component: 'div',
        className: 'dashboard-visit-footer',
        children: [{
            component: 'span',
            children: '日均访问量'
        }, {
            component: 'h2',
            children: `{{$numberHelper.format(data.average, 2, ',')}}`
        }]
    }]
}