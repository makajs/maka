export default {
    component: 'div',
    className: 'rpt',
    children: [{
        component: 'antd.PullToRefresh',
        onRefresh: '{{$load}}',
        style: { overflow: 'auto' },
        children: [{
            component: 'antd.List',
            children: [{
                component: 'antd.List.Item',
                arrow: 'horizontal',
                children: '收入Top5'
            }]
        }, {
            component: 'div',
            className: 'rpt-row',
            children: [{
                component: 'Echarts',
                option: {
                    title: {
                        show: false,
                    },
                    tooltip: {
                        show: false,
                    },
                    legend: {
                        show: false,
                    },
                    grid: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                    },
                    color:'{{$getColors()}}',
                    series: [{
                        name: '收入Top5',
                        type: 'pie',
                        radius: ['35%', '70%'],
                        center: ['50%', '50%'],
                        avoidLabelOverlap: false,

                        label: {
                            normal: {
                                show: false,
                            },
                            emphasis: {
                                show: false,
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: '{{data.top5Incomes.map(o=>({name: o.name,value:o.amount}) )}}',
                    }]
                }
            }, {
                component: 'ul',
                children: [{
                    _for: 'item in data.top5Incomes',
                    component: 'li',
                    children: [{
                        component: 'span',
                        style: {height: 10, width: 10, marginRight:8, background: '{{$getColors()[_vars[0]]}}'}
                    },{
                        component: 'div',
                        children:'{{item.name}}'
                    },{
                        component: 'div',
                        children: `{{$numberHelper.format((item.amount / item.total)* 100,2) + '%'}}`
                    },{
                        component: 'div',
                        children: `{{$numberHelper.format(item.amount,2,',')}}`
                    }]
                }]
            }]
        },{
            component: 'antd.WhiteSpace',
        },{
            component: 'antd.List',
            children: [{
                component: 'antd.List.Item',
                arrow: 'horizontal',
                children: '支出Top5'
            }]
        }, {
            component: 'div',
            className: 'rpt-row',
            children: [{
                component: 'Echarts',
                option: {
                    title: {
                        show: false,
                    },
                    tooltip: {
                        show: false,
                    },
                    legend: {
                        show: false,
                    },
                    grid: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                    },
                    color:'{{$getColors()}}',
                    series: [{
                        name: '收入Top5',
                        type: 'pie',
                        radius: ['35%', '70%'],
                        center: ['50%', '50%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                            },
                            emphasis: {
                                show: false,
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: '{{data.top5Pays.map(o=>({name: o.name,value:o.amount}) )}}',
                    }]
                }
            }, {
                component: 'ul',
                children: [{
                    _for: 'item in data.top5Pays',
                    component: 'li',
                    children: [{
                        component: 'span',
                        style: {height: 10, width: 10, marginRight:8, background: '{{$getColors()[_vars[0]]}}'}
                    },{
                        component: 'div',
                        children:'{{item.name}}'
                        
                    },{
                        component: 'div',
                        children: `{{$numberHelper.format((item.amount / item.total)* 100,2) + '%'}}`
                    },{
                        component: 'div',
                        children: `{{$numberHelper.format(item.amount,2,',')}}`
                    }]
                }]
            }]
        }]
    }]
}