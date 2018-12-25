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
        },{
            id: 3,
            title: '人员',
            icon: 'user',
            appName: 'set-person-list',
            isInstalled: false
        },{
            id: 4,
            title: '客户',
            icon: 'team',
            appName: 'set-customer-list',
            isInstalled: false
        },{
            id: 5,
            title: 'BOM',
            icon: 'profile',
            appName: 'set-bom-list',
            isInstalled: false
        }]
    }

    if(!mockData.plugins){
        mockData.plugins = [{
            id: 1,
            title: '人员列表插件',
            forApp: 'set-person-list',
            appName: 'set-person-list-plugin',
            isInstalled: false
        }]
    }
}



fetch.mock('/api/logout', ()=>{
    initMockData()
    fetch.clearAccessToken()
    return {result: true, value: true}
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

fetch.mock('/api/plugin/query', (option)=> {
    initMockData()
    return { result: true, value: mockData.plugins }
})

fetch.mock('/api/plugin/install', (option)=> {
    initMockData()
    var { id } = option
    mockData.plugins.find(o => o.id === id).isInstalled = true
    return { result: true, value: true }
})

fetch.mock('/api/plugin/uninstall', (option)=> {
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

