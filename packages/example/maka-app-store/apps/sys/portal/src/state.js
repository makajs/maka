const menu = [{
    key: '1',
    title: '应用商店',
    appName: 'app-store',
    appProps: {},
    icon:'appstore'
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
        optionVisible:false,
        setting:{}
    }
}