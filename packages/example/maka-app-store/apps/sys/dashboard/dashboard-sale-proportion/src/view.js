export default  {
    component: 'div',
    className: 'dashboard-sale-proportion',
    children: [{
        component: 'div',
        children: [{
            component: 'Echarts',
            option: {
                title: {
                    text: '销售额',
                    subtext: "{{'总额：' + data.total}}",
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'right',
                    y: 'center',
                    data: "{{data.details.map(o => o.name)}}"
                },
                series: [
                    {
                        type: 'pie',
                        radius: ['50%', '70%'],
                        animation: false,
                        label: {
                            normal: {
                                show: true,
                                formatter: "{b}: {c} ({d}%)"
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '16',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                shadowColor: 'rgba(0, 0, 0, 0.5)',
                                shadowBlur: 10
                            },
                        },
                        data: '{{data.details}}'
                    }
                ]
            },
            style: { height: '100%', width: '100%' }
        }]
    }]
}
