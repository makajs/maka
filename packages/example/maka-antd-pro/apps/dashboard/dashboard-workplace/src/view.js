
const styles = {
    main: 'dashboard-workplace-main',
    projectList: 'dashboard-workplace-projectList',
    projectGrid: 'dashboard-workplace-projectGrid',
    cardTitle: 'dashboard-workplace-cardTitle',
    projectItemContent: 'dashboard-workplace-projectItemContent',
    datetime: 'dashboard-workplace-datetime',
    activeCard: 'dashboard-workplace-activeCard',
    activitiesList: 'dashboard-workplace-activitiesList',
    username: 'dashboard-workplace-username',
    event: 'dashboard-workplace-event',
    linkGroup: 'dashboard-workplace-linkGroup',
    chart: 'dashboard-workplace-chart',
    members: 'dashboard-workplace-members',
    pieCard: 'dashboard-workplace-pieCard',
}
const EditableLinkGroup = {
    component: 'div',
    className: styles.linkGroup,
    children: [{
        _for: 'l in data.links',
        component: 'a',
        key: `{{'linkGroup-item-' + (l.id || l.title)}}`,
        children: '{{l.title}}'
    }, {
        component: 'antd.Button',
        size: 'small',
        type: 'primary',
        ghost: true,
        icon: 'plus',
        children: '添加'
    }]

}
export default {
    component: 'div',
    className: styles.main,
    children: [{
        component: 'antd.Row',
        gutter: 24,
        children: [{
            component: 'antd.Col',
            xl: 16, lg: 24, md: 24, sm: 24, xs: 24,
            children: [{
                component: 'antd.Card',
                className: styles.projectList,
                style: { marginBottom: 24 },
                title: '进行中的项目',
                bordered: false,
                extra: {
                    component: 'a',
                    children: '全部项目',
                },
                bodyStyle: { padding: 0 },
                children: {
                    _for: 'item in data.notice',
                    component: 'antd.Card.Grid',
                    className: styles.projectGrid,
                    key: '{{item.id}}',
                    children: [{
                        component: 'antd.Card',
                        bordered: false,
                        bodyStyle: { padding: 0 },
                        children: [{
                            component: 'antd.Card.Meta',
                            title: {
                                component: 'div',
                                className: styles.cardTitle,
                                children: [{
                                    component: 'antd.Avatar',
                                    size: 'small',
                                    src: '{{item.logo}}'
                                }, {
                                    component: 'a',
                                    href: '{{item.href}}',
                                    children: '{{item.title}}'
                                }],

                            },
                            description: '{{item.description}}'
                        }, {
                            component: 'div',
                            className: styles.projectItemContent,
                            children: [{
                                component: 'a',
                                href: '{{item.memberLink}}',
                                children: `{{item.member || ''}}`
                            }, {
                                component: 'span',
                                className: styles.datetime,
                                title: '{{item.updatedAt}}',
                                children: '{{$moment(item.updatedAt).fromNow()}}',
                                _visible: '{{!!item.updatedAt}}'
                            }]

                        }]
                    }]
                }
            }, {
                component: 'antd.Card',
                bodyStyle: { padding: 0 },
                bordered: false,
                className: styles.activeCard,
                title: "动态",
                children: [{
                    component: 'antd.List',
                    size: 'large',
                    children: [{
                        component: 'div',
                        className: styles.activitiesList,
                        children: {
                            _for: 'item in data.list',
                            component: 'antd.List.Item',
                            key: '{{item.id}}',
                            children: [{
                                component: 'antd.List.Item.Meta',
                                avatar: {
                                    component: 'antd.Avatar',
                                    src: '{{item.user.avatar}}'
                                },
                                title: {
                                    component: 'span',
                                    children: [{
                                        component: 'a',
                                        className: styles.username,
                                        style: { marginRight: 4 },
                                        children: '{{item.user.name}}'
                                    }, {
                                        component: 'span',
                                        className: styles.event,
                                        children: [{
                                            _for: 'kk in item.template.split(/@\{([^{}]*)\}/gi)',
                                            component: `{{item[kk] ? 'a':'span'}}`,
                                            href: '{{item[kk] && item[kk].link}}',
                                            key: '{{item[kk] && item[kk].name}}',
                                            children: '{{item[kk] ? item[kk].name : kk}}',
                                        }]
                                    }]
                                },
                                description: {
                                    component: 'span',
                                    className: styles.datetime,
                                    title: '{{item.updateAt}}',
                                    children: '{{$moment(item.updateAt).fromNow()}}'
                                }
                            }]
                        }
                    }]
                }]
            }]
        }, {
            component: 'antd.Col',
            xl: 8, lg: 24, md: 24, sm: 24, xs: 24,
            children: [{
                component: 'antd.Card',
                style: { marginBottom: 24 },
                bordered: false,
                title: '快速开始 / 便捷导航',
                children: EditableLinkGroup
            }, {
                component: 'antd.Card',
                style: { marginBottom: 24 },
                bordered: false,
                title: 'XX 指数',
                children:[{
                    component: 'div',
                    className: styles.chart,
                    children: {
                        component: 'antdpro.Charts.Radar',
                        hasLegend: true,
                        height: 343,
                        data: '{{data.radarData}}'
                    }
                }]
            },{
                component: 'antd.Card',
                bodyStyle:{ paddingTop: 12, paddingBottom: 12 },
                bordered:false,
                title:"团队",
                children:[{
                    component:'div',
                    className: styles.members,
                    children:[{
                        component:'antd.Row',
                        gutter: 48,
                        children:{
                            _for: 'item in data.notice',
                            component: 'antd.Col',
                            span:12,
                            key: `{{'members-item-'+item.id}}`,
                            children:[{
                                component: 'a',
                                href: '{{item.href}}',
                                children:[{
                                    component: 'antd.Avatar',
                                    src: '{{item.logo}}',
                                    size: 'small'
                                },{
                                    component: 'span',
                                    className: styles.member,
                                    children:'{{item.member}}'
                                }]
                            }]
                        }
                    }]
                }]
            }]

        }]
    }]
}