const menu = [{
    key: '1',
    title: 'Home',
    appName: 'zlj-home',
    appProps: {},
    icon: 'home',
    isDefault: true
},{
    key: '2',
    title: 'Board',
    appName: 'zlj-board',
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
        content: { },
        openTabs: [],
        isTabsStyle: true,
        isFoldMenu: true,
        other: {}
    }
}