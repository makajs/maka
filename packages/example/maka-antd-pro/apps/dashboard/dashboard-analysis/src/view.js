import React from 'react'
import { getComponent } from 'maka'

const topColResponsiveProps = {
    xs: 24,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 6,
    style: { marginBottom: 24 },
};


const IntroduceRow = {
    component: 'antd.Row',
    gutter: 24,
    children: [{
        component: 'antd.Col',
        ...topColResponsiveProps,
        children: [{
            component: 'antdpro.Charts.ChartCard',
            bordered: false,
            title: `{{$i18n('app.analysis.total-sales', {defaultMessage: 'Total Sales'})}}`,
            action: {
                component: 'antd.Tooltip',
                title: `{{$i18n('app.analysis.introduce',{defaultMessage: 'Introduce'})}}`,
                children: {
                    component: 'antd.Icon',
                    type: 'info-circle-o'
                }
            },
            total: {
                component: 'span',
                children: `{{'¥ ' + $numberHelper.format(126560,0,',')}}`
            },
            footer: {
                component: 'antdpro.Charts.Field',
                label: `{{$i18n('app.analysis.day-sales',{defaultMessage:'Daily Sales'})}}`,
                value: `{{'¥ ' + $numberHelper.format(12423,0,',')}}`
            },
            contentHeight: 46,
            children: [{
                component: 'antdpro.Trend',
                flag: 'up',
                style: { marginRight: 16 },
                children: [`{{$i18n('app.analysis.week', {defaultMessage:'Weekly Changes'})}}`, {
                    component: 'span',
                    className: `{{$styles('trendText')}}`,
                    children: '12%'
                }]
            }, {
                component: 'antdpro.Trend',
                flag: 'down',
                children: [`{{$i18n('app.analysis.day', {defaultMessage:'Daily Changes'})}}`, {
                    component: 'span',
                    className: `{{$styles('trendText')}}`,
                    children: '12%'
                }]
            }]
        }]
    }, {
        component: 'antd.Col',
        ...topColResponsiveProps,
        children: [{
            component: 'antdpro.Charts.ChartCard',
            bordered: false,
            title: `{{$i18n('app.analysis.visits', {defaultMessage: 'Visits'})}}`,
            action: {
                component: 'antd.Tooltip',
                title: `{{$i18n('app.analysis.introduce',{defaultMessage: 'Introduce'})}}`,
                children: {
                    component: 'antd.Icon',
                    type: 'info-circle-o'
                }
            },
            total: `{{ $numberHelper.format(8846,0,',')}}`,
            footer: {
                component: 'antdpro.Charts.Field',
                label: `{{$i18n('app.analysis.day-visits',{defaultMessage:'Daily Visits'})}}`,
                value: `{{$numberHelper.format(1234,0,',')}}`
            },
            contentHeight: 46,
            children: {
                component: 'Suspense',
                fallback: null,
                children: {
                    component: 'antdpro.Charts.MiniArea',
                    color: '#975FE4',
                    data: '{{data.visitData}}'
                }
            }
        }]
    }, {
        component: 'antd.Col',
        ...topColResponsiveProps,
        children: [{
            component: 'antdpro.Charts.ChartCard',
            bordered: false,
            title: `{{$i18n('app.analysis.payments', {defaultMessage: 'payments'})}}`,
            action: {
                component: 'antd.Tooltip',
                title: `{{$i18n('app.analysis.introduce',{defaultMessage: 'Introduce'})}}`,
                children: {
                    component: 'antd.Icon',
                    type: 'info-circle-o'
                }
            },
            total: `{{$numberHelper.format(6560,0,',')}}`,
            footer: {
                component: 'antdpro.Charts.Field',
                label: `{{$i18n('app.analysis.conversion-rate',{defaultMessage:'Conversion Rate'})}}`,
                value: '60%'
            },
            contentHeight: 46,
            children: {
                component: 'Suspense',
                fallback: null,
                children: {
                    component: 'antdpro.Charts.MiniBar',
                    data: '{{data.visitData}}'
                }
            }
        }]
    }, {
        component: 'antd.Col',
        ...topColResponsiveProps,
        children: [{
            component: 'antdpro.Charts.ChartCard',
            bordered: false,
            title: `{{$i18n('app.analysis.operational-effect', {defaultMessage: 'Operational Effect'})}}`,
            action: {
                component: 'antd.Tooltip',
                title: `{{$i18n('app.analysis.introduce',{defaultMessage: 'Introduce'})}}`,
                children: {
                    component: 'antd.Icon',
                    type: 'info-circle-o'
                }
            },
            total: `78%`,
            footer: [{
                component: 'div',
                style: { whiteSpace: 'nowrap', overflow: 'hidden' },
                children: [{
                    component: 'antdpro.Trend',
                    flag: 'up',
                    style: { marginRight: 16 },
                    children: [`{{$i18n('app.analysis.week', {defaultMessage:'Weekly Changes'})}}`, {
                        component: 'span',
                        className: `{{$styles('trendText')}}`,
                        children: '12%'
                    }]
                }, {
                    component: 'antdpro.Trend',
                    flag: 'down',
                    children: [`{{$i18n('app.analysis.day', {defaultMessage:'Daily Changes'})}}`, {
                        component: 'span',
                        className: `{{$styles('trendText')}}`,
                        children: '12%'
                    }]
                }]
            }],
            contentHeight: 46,
            children: {
                component: 'Suspense',
                fallback: null,
                children: {
                    component: 'antdpro.Charts.MiniProgress',
                    percent: 78,
                    strokeWidth: 8,
                    target: 80,
                    color: "#13C2C2"
                }
            }
        }]
    }]
}

const SalesCard = {
    component: 'antd.Card',
    bordered: false,
    bodyStyle: { padding: 0 },
    className: `{{$styles('salesCard')}}`,
    children: [{
        component: 'antd.Tabs',
        size: 'large',
        tabBarStyle: { marginBottom: 24 },
        tabBarExtraContent: {
            component: 'div',
            className: `{{$styles('salesExtraWrap')}}`,
            children: [{
                component: 'div',
                className: `{{$styles('salesExtra')}}`,
                children: [{
                    component: 'a',
                    className: `{{$isActive('today')}}`,
                    onClick: `{{()=> $selectDate('today')}}`,
                    children: `{{$i18n('app.analysis.all-day', {defaultMessage: 'All Day'})}}`
                }, {
                    component: 'a',
                    className: `{{$isActive('week')}}`,
                    onClick: `{{()=> $selectDate('week')}}`,
                    children: `{{$i18n('app.analysis.all-week', {defaultMessage: 'All Week'})}}`
                }, {
                    component: 'a',
                    className: `{{$isActive('month')}}`,
                    onClick: `{{()=> $selectDate('month')}}`,
                    children: `{{$i18n('app.analysis.all-month', {defaultMessage: 'All Month'})}}`
                }, {
                    component: 'a',
                    className: `{{$isActive('year')}}`,
                    onClick: `{{()=> $selectDate('year')}}`,
                    children: `{{$i18n('app.analysis.all-year', {defaultMessage: 'All Year'})}}`
                }]
            }, {
                component: 'antd.DatePicker.RangePicker',
                value: '{{data.rangePickerValue}}',
                onChange: '{{$handleRangePickerChange}}',
                style: { width: 256 }
            }]
        },
        children: [{
            component: 'antd.Tabs.TabPane',
            tab: `{{$i18n('app.analysis.sales', {defaultMessage: 'Sales'})}}`,
            keys: 'sales',
            children: [{
                component: 'antd.Row',
                children: [{
                    component: 'antd.Col',
                    xl: 16, lg: 12, md: 12, sm: 24, xs: 24,
                    children: [{
                        component: 'div',
                        className: `{{$styles('salesBar')}}`,
                        children: [{
                            component: 'Suspense',
                            fallback: null,
                            children: {
                                component: 'antdpro.Charts.Bar',
                                height: 295,
                                title: `{{$i18n('app.analysis.sales-trend',{defaultMessage:'Sales Trend'})}}`,
                                data: '{{data.salesData}}'
                            }
                        }]
                    }]
                }, {
                    component: 'antd.Col',
                    xl: 8, lg: 12, md: 12, sm: 24, xs: 24,
                    children: [{
                        component: 'div',
                        className: `{{$styles('salesRank')}}`,
                        children: [{
                            component: 'h4',
                            className: `{{$styles('rankingTitle')}}`,
                            children: [`{{$i18n('app.analysis.sales-ranking',{defaultMessage:'Sales Ranking'})}}`, {
                                component: 'ul',
                                className: `{{$styles('rankingList')}}`,
                                children: {
                                    _for: '(item,i) in data.rankingListData',
                                    component: 'li',
                                    children: [{
                                        component: 'span',
                                        className: `{{$styles('rankingItemNumber') + ' ' + (i < 3 ? $styles('active'):'')}}`,
                                        children: '{{i+1}}'
                                    }, {
                                        component: 'span',
                                        className: `{{$styles('rankingItemTitle')}}`,
                                        title: '{{item.title}}',
                                        children: '{{item.title}}'
                                    }, {
                                        component: 'span',
                                        children: `{{$numberHelper.format(item.total, 0, ',')}}`
                                    }]
                                }
                            }]
                        }]
                    }]
                }]
            }]
        }, {
            component: 'antd.Tabs.TabPane',
            tab: `{{$i18n('app.analysis.visits', {defaultMessage: 'Visits'})}}`,
            keys: 'views',
            children: [{
                component: 'antd.Row',
                children: [{
                    component: 'antd.Col',
                    xl: 16, lg: 12, md: 12, sm: 24, xs: 24,
                    children: [{
                        component: 'div',
                        className: `{{$styles('salesBar')}}`,
                        children: [{
                            component: 'Suspense',
                            fallback: null,
                            children: {
                                component: 'antdpro.Charts.Bar',
                                height: 295,
                                title: `{{$i18n('app.analysis.visits-trend',{defaultMessage:'Visits Trend'})}}`,
                                data: '{{data.salesData}}'
                            }
                        }]
                    }]
                }, {
                    component: 'antd.Col',
                    xl: 8, lg: 12, md: 12, sm: 24, xs: 24,
                    children: [{
                        component: 'div',
                        className: `{{$styles('salesRank')}}`,
                        children: [{
                            component: 'h4',
                            className: `{{$styles('rankingTitle')}}`,
                            children: [`{{$i18n('app.analysis.visits-ranking',{defaultMessage:'Visits Ranking'})}}`, {
                                component: 'ul',
                                className: `{{$styles('rankingList')}}`,
                                children: {
                                    _for: '(item,i) in data.rankingListData',
                                    component: 'li',
                                    children: [{
                                        component: 'span',
                                        className: `{{$styles('rankingItemNumber') + ' ' + (i < 3 ? $styles('active'):'')}}`,
                                        children: '{{i+1}}'
                                    }, {
                                        component: 'span',
                                        className: `{{$styles('rankingItemTitle')}}`,
                                        title: '{{item.title}}',
                                        children: '{{item.title}}'
                                    }, {
                                        component: 'span',
                                        children: `{{$numberHelper.format(item.total, 0, ',')}}`
                                    }]
                                }
                            }]
                        }]
                    }]
                }]
            }]
        }]


    }]
}

const menu = {
    component: 'antd.Menu',
    children: [{
        component: 'antd.Menu.Item',
        children: '操作一'
    }, {
        component: 'antd.Menu.Item',
        children: '操作二'
    }]
}

const dropdownGroup = {
    component: 'span',
    className: `{{$styles('iconGroup')}}`,
    children: {
        component: 'antd.Dropdown',
        overlay: menu,
        placement: "bottomRight",
        children: {
            component: 'antd.Icon',
            type: 'ellipsis'
        }
    }
}

const columns = [{
    title: `{{$i18n('app.analysis.table.rank',{defaultMessage:'Rank'})}}`,
    dataIndex: 'index',
    key: 'index'
}, {
    title: `{{$i18n('app.analysis.table.search-keyword',{defaultMessage:'Search keyword'})}}`,
    dataIndex: 'keyword',
    key: 'keyword',
    render: text => <a href="/">{text}</a>
}, {
    title: `{{$i18n('app.analysis.table.users',{defaultMessage:'Users'})}}`,
    dataIndex: 'count',
    key: 'count',
    sorter: (a, b) => a.count - b.count,
    className: `{{$styles('alignRight')}}`,
}, {
    title: `{{$i18n('app.analysis.table.weekly-range',{defaultMessage:'Weekly Range'})}}`,
    dataIndex: 'range',
    key: 'range',
    sorter: (a, b) => a.range - b.range,
    render: (text, record) => {
        const Trend = getComponent('antdpro.Trend')
        return (
            <Trend flag={record.status === 1 ? 'down' : 'up'}>
                <span style={{ marginRight: 4 }}>{text}%</span>
            </Trend>
        )
    },
    align: 'right',
}]


const TopSearch = {
    component: 'antd.Card',
    bordered: false,
    title: `{{$i18n('app.analysis.online-top-search',{defaultMessage: 'Online Top Search'})}}`,
    extra: dropdownGroup,
    style: { marginTop: 24 },
    children: [{
        component: 'antd.Row',
        gutter: 68,
        children: [{
            component: 'antd.Col',
            sm: 12, xs: 24,
            style: { marginBottom: 24 },
            children: [{
                component: 'antdpro.NumberInfo',
                subTitle: {
                    component: 'span',
                    children: [`{{$i18n('app.analysis.search-users', {defaultMessage:'search users'})}}`, {
                        component: 'antd.Tooltip',
                        title: `{{$i18n('app.analysis.introduce', {defaultMessage: 'introduce'})}}`,
                        children: {
                            component: 'antd.Icon',
                            type: 'info-circle-o',
                            style: { marginLeft: 8 }
                        }
                    }]
                },
                gap: 8,
                total: `{{$numberHelper.format(12321, 0, ',')}}`,
                status: "up",
                subTotal: 17.1,
            }, {
                component: 'antdpro.Charts.MiniArea',
                line: true,
                height: 45,
                data: '{{data.visitData2}}'
            }]
        }, {
            component: 'antd.Col',
            sm: 12, xs: 24,
            style: { marginBottom: 24 },
            children: [{
                component: 'antdpro.NumberInfo',
                subTitle: {
                    component: 'span',
                    children: [`{{$i18n('app.analysis.per-capita-search', {defaultMessage:'Per Capita Search'})}}`, {
                        component: 'antd.Tooltip',
                        title: `{{$i18n('app.analysis.introduce', {defaultMessage: 'introduce'})}}`,
                        children: {
                            component: 'antd.Icon',
                            type: 'info-circle-o',
                            style: { marginLeft: 8 }
                        }
                    }]
                },
                gap: 8,
                total: 2.7,
                status: 'down',
                subTotal: 26.2,
            }, {
                component: 'antdpro.Charts.MiniArea',
                line: true,
                height: 45,
                data: '{{data.visitData2}}'
            }]
        }]
    }, {
        component: 'antd.Table',
        rowKey: '{{(record)=>record.inex}}',
        size: 'small',
        columns: columns,
        dataSource: '{{data.searchData}}',
        pagination: {
            style: { marginBottom: 0 },
            pageSize: 5,
        }
    }]
}

const ProportionSales = {
    component: 'antd.Card',
    className: `{{$styles('salesCard')}}`,
    bordered: false,
    title: `{{$i18n('app.analysis.the-proportion-of-sales',{defaultMessage:'The Proportion of Sales'})}}`,
    bodyStyle: { padding: 24 },
    extra: {
        component: 'div',
        className: `{{$styles('salesCardExtra')}}`,
        children: [
            dropdownGroup, {
                component: 'div',
                className: `{{$styles('salesTypeRadio')}}`,
                children: [{
                    component: 'antd.Radio.Group',
                    value: '{{data.salesType}}',
                    onChange: '{{$handleChangeSalesType}}',
                    children: [{
                        component: 'antd.Radio.Button',
                        value: 'all',
                        children: `{{$i18n('app.analysis.channel.all', {defaultMessage:'ALL'})}}`
                    }, {
                        component: 'antd.Radio.Button',
                        value: 'online',
                        children: `{{$i18n('app.analysis.channel.online', {defaultMessage:'Online'})}}`
                    }, {
                        component: 'antd.Radio.Button',
                        value: 'stores',
                        children: `{{$i18n('app.analysis.channel.stores', {defaultMessage:'Stores'})}}`
                    }]
                }]
            }
        ]
    },
    style: { marginTop: 24 },
    children: [{
        component: 'div',
        style: { minHeight: 380 },
        children: [{
            component: 'h4',
            style: { marginTop: 8, marginBottom: 32 },
            children: `{{$i18n('app.analysis.sales', {defaultMessage:'Sales'})}}`
        }, {
            component: 'antdpro.Charts.Pie',
            hasLegend: true,
            subTitle: `{{$i18n('app.analysis.sales', {defaultMessage:'Sales'})}}`,
            total: `{{{
               var total = $getPieData(data).reduce((pre, now) => now.y + pre, 0)
               return '¥ ' + $numberHelper.format(total, 0, ',')
            }}}`,
            data: `{{$getPieData(data)}}`,
            valueFormat: `{{value=>'¥ ' + $numberHelper.format(value, 0, ',')}}`,
            height: 248,
            lineWidth: 4
        }]
    }]
}

const CustomTab = {
    component: 'antd.Row',
    gutter: 8,
    style: { width: 138, margin: '8px 0' },
    children: [{
        component: 'antd.Col',
        span: 12,
        children: [{
            component: 'antdpro.NumberInfo',
            title: '{{shop.name}}',
            subTitle: `{{$i18n('app.analysis.conversion-rate', {defaultMessage: 'Conversion Rate'})}}`,
            gap: 2,
            total: `{{shop.cvr * 100+'%'}}`,
            theme: `{{data.currentTabKey !== data.name && 'light'}}`
        },]
    }, {
        component: 'antd.Col',
        span: 12,
        style: { paddingTop: 36 },
        children: {
            component: 'Suspense',
            fallback: null,
            children: {
                component: 'antdpro.Charts.Pie',
                animate: false,
                color: `{{data.currentTabKey !== shop.name && '#BDE4FF'}}`,
                inner: 0.55,
                tooltip: false,
                margin: [0, 0, 0, 0],
                percent: '{{shop.cvr * 100}}',
                height: 64
            }

        }
    }]
}

const OfflineData = {
    component: 'antd.Card',
    className: `{{$styles('offlineCard')}}`,
    bordered: false,
    style: { marginTop: 32 },
    children: [{
        component: 'antd.Tabs',
        activeKey: '{{ data.currentTabKey || (data.offlineData[0] && data.offlineData[0].name)}}',
        onChange: '{{$handleTabChange}}',
        children: {
            _for: 'shop in data.offlineData',
            component: 'antd.Tabs.TabPane',
            tab: CustomTab,
            key: '{{shop.name}}',
            children: {
                component: 'div',
                style: { padding: '0 24px' },
                children: [{
                    component: 'Suspense',
                    fallback: null,
                    children: {
                        component: 'antdpro.Charts.TimelineChart',
                        height: 400,
                        data: '{{data.offlineChartData}}',
                        titleMap: {
                            y1: `{{$i18n('app.analysis.traffic')}}`,
                            y2: `{{$i18n('app.analysis.payments')}}`,
                        }
                    }
                }]
            }
        }
    }]

}
export default {
    component: 'Fragment',
    //className: `{{$styles('main,
    children: [
        IntroduceRow,
        SalesCard, {
            component: 'antd.Row',
            gutter: 24,
            children: [{
                component: 'antd.Col',
                xl: 12, lg: 24, md: 24, sm: 24, xs: 24,
                children: TopSearch
            }, {
                component: 'antd.Col',
                xl: 12, lg: 24, md: 24, sm: 24, xs: 24,
                children: ProportionSales
            }]
        }, OfflineData
    ]
}