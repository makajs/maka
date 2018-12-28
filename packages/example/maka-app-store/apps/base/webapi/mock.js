import { fetch } from 'maka'

const mockData = fetch.mockData

function initMockData() {
    if (!mockData.apps) {
        mockData.apps = [{
            id: 1,
            title: '首页',
            icon: 'home',
            appName: 'home',
            isInstalled: false
        }, {
            id: 2,
            title: '仪表盘',
            icon: 'dashboard',
            appName: 'dashboard',
            isInstalled: false
        }, {
            id: 3,
            title: '人员',
            icon: 'user',
            appName: 'set-person-list',
            isInstalled: false
        }, {
            id: 4,
            title: '客户',
            icon: 'team',
            appName: 'set-customer-list',
            isInstalled: false
        }, {
            id: 5,
            title: 'BOM',
            icon: 'profile',
            appName: 'set-bom-list',
            isInstalled: false
        },{
            id: 6,
            title: '百度',
            icon: 'smile',
            appName: 'base-iframe',
            appProps: {iframeSrc: 'https://www.baidu.com'},
            alwaysRender: true,
            isInstalled: false
        },{
            id: 7,
            title: '开发工具',
            icon: 'tool',
            appName: 'devtools-app',
            isModal: true,
            bodyStyle: {
                height: 400
            },
            width: 1100,
            isInstalled: false
        }]
    }

    if (!mockData.plugins) {
        mockData.plugins = [{
            id: 1,
            title: '人员列表插件',
            forApp: 'set-person-list',
            appName: 'set-person-list-plugin',
            isInstalled: false
        }]
    }

    if (!mockData.option) {
        mockData.option = {
            styles: [{
                key: 'dark',
                img: 'theme-style-dark.svg',
                appName: 'theme-style-dark'
            }, {
                key: 'light',
                img: 'theme-style-light.svg',
                appName: 'theme-style-light'
            }],
            primaryColors: [{
                key: 'blue',
                color: 'rgb(24, 144, 255)',
                appName: 'theme-primary-color-blue'
            }, {
                key: 'green',
                color: 'rgb(19, 194, 194)',
                appName: 'theme-primary-color-green'
            }, {
                key: 'red',
                color: 'rgb(245, 34, 45)',
                appName: 'theme-primary-color-red'
            }],
            activePrimaryColor: 'blue',
            activeStyle: 'dark'
        }
    }
}



fetch.mock('/api/logout', () => {
    initMockData()
    fetch.clearAccessToken()
    return { result: true, value: true }
})

fetch.mock('/api/appstore/query', (option) => {
    initMockData()
    return { result: true, value: mockData.apps }
})

fetch.mock('/api/appstore/install', (option) => {
    initMockData()

    var { id } = option
    mockData.apps.find(o => o.id === id).isInstalled = true
    return { result: true, value: true }
})

fetch.mock('/api/appstore/uninstall', (option) => {
    initMockData()

    var { id } = option
    mockData.apps.find(o => o.id === id).isInstalled = false
    return { result: true, value: true }
})

fetch.mock('/api/plugin/query', (option) => {
    initMockData()
    return { result: true, value: mockData.plugins }
})

fetch.mock('/api/plugin/install', (option) => {
    initMockData()
    var { id } = option
    mockData.plugins.find(o => o.id === id).isInstalled = true
    return { result: true, value: true }
})

fetch.mock('/api/plugin/uninstall', (option) => {
    initMockData()
    var { id } = option
    mockData.plugins.find(o => o.id === id).isInstalled = false
    return { result: true, value: true }
})

fetch.mock('/api/portal/getMenu', (option) => {
    initMockData()

    var menus = mockData.apps.filter(o => o.isInstalled === true)
    return { result: true, value: menus }
})

fetch.mock('/api/option/query', (option) => {
    initMockData()
    return { result: true, value: mockData.option }

})

fetch.mock('/api/option/update', (option) => {
    initMockData()
    mockData.option = {
        ...mockData.option,
        ...option
    }

    return { result: true, value: mockData.option }
})
