export default {
    component: 'div',
    className: 'dashboard-market',
    children: [{
        component: 'div',
        className: 'dashboard-market-header',
        children: [{
            component: 'span',
            children: '运营活动效果'
        }, {
            component: 'antd.Icon',
            className: 'icon-softly',
            type: 'info-circle',
            title: '指标说明'
        }]
    }, {
        component: 'div',
        className: 'dashboard-market-chart',
        children: {
            name: 'chart',
            component: 'Echarts',
            option: {
                tooltip: {
                    formatter: "{a} <br/>{b} : {c}%"
                },
                grid: {
                    left: 0,
                    right: 0,
                    bottom: 0,
                    top: 0
                },
                series: [{
                    type: 'gauge',
                    detail: { formatter: '{value}%' },
                    radius: '100%',
                    startAngle: 180,
                    endAngle: 0,
                    animation: false,
                    itemStyle: {
                        normal: {
                            color: 'rgb(255, 70, 131)',
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                            shadowBlur: 10
                        },
                    },
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                    title: {
                        show: false,
                    },
                    pointer: {
                        width: 4,
                    },
                    data: [{
                        value: '{{ data.rate * 100}}',
                        name: '效果'
                    }]
                }]
            },
            style: { height: '100%', width: '100%' }
        }
    }, {
        component: 'div',
        className: 'dashboard-market-footer',
        children: [{
            component: 'span',
            children: '周同比'
        }, {
            component: 'h2',
            children: "{{data.WoW * 100 + '%'}}"
        }, {
            component: 'antd.Icon',
            type: "{{data.WoW> 0 ? 'caret-up' : 'caret-down'}}",
            style: "{{({color: data.WoW> 0 ? 'red': 'green'})}}"
        }, {
            component: 'span',
            children: '日环比'
        }, {
            component: 'h2',
            children: "{{data.DoD * 100 + '%'}}"
        }, {
            component: 'antd.Icon',
            type: "{{data.DoD> 0 ? 'caret-up' : 'caret-down'}}",
            style: "{{({color: data.DoD> 0 ? 'red': 'green'})}}"
        }]
    }]
}
