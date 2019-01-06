const menu = [/*{
    key: 'a1',
    title: '应用商店',
    appName: 'app-store',
    appProps: {},
    icon: 'appstore'
}, {
    key: 'a2',
    title: '网站介绍',
    appName: 'doc',
    appProps: {},
    icon: 'question-circle'
}*/]
export default {
    data: {
        menu,
        menuSelectedKeys: [],
        menuDefaultOpenKeys: [],
        content: {},
        openTabs: [],
        isTabsStyle: true,
        isFoldMenu: true,
        other: {
        },
        optionVisible: false,
        setting: {
            mode: 'inline', //vertical || horizontal || inline
            theme: 'dark', //dark || light
            collapsed: false,
            layout: 'sidermenu', //sidermenu || topmenu
            contentWidth: 'Fluid',
            fixHeader: false,
            fixSiderbar: true,
            autoHideHeader: false,
            colorWeak: false,
            collapse: true,
        },
        notices:[]
      
    }
}