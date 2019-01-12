export default {
    component: 'Fragment',
    children: [{
        component: 'antd.Row',
        gutter: 24,
        children: [{
            component: 'antd.Col',
            xl: 18, lg: 24, md: 24, sm: 24, xs: 24,
            style: { marginBottom: 24 },
            children: [{
                component: 'antd.Card',
                title: `{{$i18n('app.monitor.trading-activity',{defaultMessage:'Real-Time Trading Activity'})}}`,
                bordered: false,
                children: [{
                    component: 'antd.Row',
                    children: [{
                        component: 'antd.Col',
                        md: 6, sm: 12, xs: 24,
                        children: {
                            component: 'antdpro.NumberInfo',
                            subTitle: `{{$i18n('app.monitor.total-transactions',{defaultMessage:'Total transactions today'})}}`,
                            suffix: '元',
                            total: `{{$numberHelper.format(124543233, 0, ',')}}`

                        },
                    }, {
                        component: 'antd.Col',
                        md: 6, sm: 12, xs: 24,
                        children: {
                            component: 'antdpro.NumberInfo',
                            subTitle: `{{$i18n('app.monitor.sales-target',{defaultMessage:'Sales target completion rate'})}}`,
                            total: '92%'
                        },
                    }, {
                        component: 'antd.Col',
                        md: 6, sm: 12, xs: 24,
                        children: {
                            component: 'antdpro.NumberInfo',
                            subTitle: `{{$i18n('app.monitor.remaining-time',{defaultMessage:'Remaining time of activity'})}}`,
                            total: {
                                component: 'antdpro.CountDown',
                                target: '{{data.targetTime}}'
                            }
                        },
                    }, {
                        component: 'antd.Col',
                        md: 6, sm: 12, xs: 24,
                        children: {
                            component: 'antdpro.NumberInfo',
                            subTitle: `{{$i18n('app.monitor.total-transactions-per-second',{defaultMessage:'Total transactions per second'})}}`,
                            suffix: "元",
                            total: `{{$numberHelper.format(234, 0,',')}}`
                        },
                    }]
                }, {
                    component: 'div',
                    className: `{{$styles('mapChart')}}`,
                    children: [{
                        component: 'antd.Tooltip',
                        title: `{{$i18n('app.monitor.waiting-for-implementation', {defaultMessage:'Waiting for implementation'})}}`,
                        children: [{
                            component: 'img',
                            src: 'https://gw.alipayobjects.com/zos/rmsportal/HBWnDEUXCnGnGrRfrpKa.png',
                            alt: 'map'
                        }]
                    }]
                }]
            }]
        }, {
            component: 'antd.Col',
            xl: 6, lg: 24, md: 24, sm: 24, xs: 24,
            children: [{
                component: 'antd.Card',
                title: `{{$i18n('app.monitor.activity-forecast', {defaultMessage:'Activity forecast'})}}`,
                style: { marginBottom: 24 },
                bordered: false,
                children: {
                    component: 'ActiveChart'
                }
            }, {
                component: 'antd.Card',
                title: `{{$i18n('app.monitor.efficiency', {defaultMessage:'Efficiency'})}}`,
                style: { marginBottom: 24 },
                borderStyle: { textAlign: 'center' },
                bordered: false,
                children: {
                    component: 'antdpro.Charts.Gauge',
                    title: `{{$i18n('app.monitor.ratio',{defaultMessage:'Ratio'})}}`,
                    height: 180,
                    percent: 87
                }
            }]
        }]
    }, {
        component: 'antd.Row',
        gutter: 24,
        children: [{
            component: 'antd.Col',
            xl: 12, lg: 24, sm: 24, xs: 24,
            style: { marginBottom: 24 },
            children: [{
                component: 'antd.Card',
                title: `{{$i18n('app.monitor.proportion-per-category',{defaultMessage:'Proportion Per Category'})}}`,
                bordered: false,
                className: `{{$styles('pieCard')}}`,
                children: [{
                    component: 'antd.Row',
                    style: { padding: '16px 0' },
                    children: [{
                        component: 'antd.Col',
                        span: 8,
                        children: [{
                            component: 'antdpro.Charts.Pie',
                            animate: false,
                            percent: 28,
                            subTitle: `{{$i18n('app.monitor.fast-food', {defaultMessage:'Fast food'})}}`,
                            total: "28%",
                            height: 128,
                            lineWidth: 2
                        }]
                    }, {
                        component: 'antd.Col',
                        span: 8,
                        children: [{
                            component: 'antdpro.Charts.Pie',
                            animate: false,
                            color: "#5DDECF",
                            percent: 22,
                            subTitle: `{{$i18n('app.monitor.western-food', {defaultMessage:'Western food'})}}`,
                            total: "22%",
                            height: 128,
                            lineWidth: 2
                        }]
                    }, {
                        component: 'antd.Col',
                        span: 8,
                        children: [{
                            component: 'antdpro.Charts.Pie',
                            animate: false,
                            color: "#2FC25B",
                            percent: 32,
                            subTitle: `{{$i18n('app.monitor.hot-pot', {defaultMessage:'Hot pot'})}}`,
                            total: "32%",
                            height: 128,
                            lineWidth: 2
                        }]
                    }]
                }]
            }]
        }, {
            component: 'antd.Col',
            xl: 6, lg: 12, sm: 24, xs: 24,
            style: { marginBottom: 24 },
            children: [{
                component: 'antd.Card',
                title: `{{$i18n('app.monitor.popular-searches',{defaultMessage:'Popular Searches'})}}`,
                bordered: false,
                bodyStyle: { overflow: 'hidden' },
                children: {
                    component: 'antdpro.Charts.TagCloud',
                    data:'{{data.tags}}',
                    height: 161
                }
            }]
        },{
            component: 'antd.Col',
            xl: 6, lg: 12, sm: 24, xs: 24,
            style: { marginBottom: 24 },
            children:[{
                component: 'antd.Card',
                title:`{{$i18n('app.monitor.resource-surplus',{defaultMessage:'Resource Surplus'})}}`,
                bodyStyle: {textAlign: 'center', fontSize: 0},
                bordered:false,
                children: [{
                    component: 'antdpro.Charts.WaterWave',
                    height:161,
                    title:`{{$i18n('app.monitor.fund-surplus',{defaultMessage:'Fund Surplus'})}}`,
                    percent: 34
                }]
            }]
        }]
    }]


}