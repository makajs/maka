const menu = [{
    key: '1',
    title: '首页',
    appName: 'home',
    appProps: {},
    icon: 'home'
},{
    key: '2',
    title: '仪表盘',
    appName: 'dashboard',
    appProps: {},
    icon: 'dashboard'
}, {
    key: '3',
    title: '基础档案',
    children: [{
        key: '301',
        title: '人员',
        appName: 'set-person-list'
    },{
        key: '301',
        title: '客户',
        appName: 'set-customer-list'
    }]
}]
export default {
    data: {
        menu,
        menuSelectedKeys: [],
        menuDefaultOpenKeys: [],
        content: {},
        openTabs: [],
        isTabsStyle: true,
        isFoldMenu: true,
        other: {},
        aa:1
    }
}