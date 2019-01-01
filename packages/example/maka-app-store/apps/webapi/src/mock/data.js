import { fetch, getAction } from 'maka'

const mockData = fetch.mockData

function initMockData(){
    
    const moment = getAction('moment')

    /*app */
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
        }, {
            id: 6,
            title: '百度',
            icon: 'smile',
            appName: 'common-iframe',
            appProps: { iframeSrc: 'https://www.baidu.com' },
            alwaysRender: true,
            isInstalled: false
        }, {
            id: 7,
            title: '开发工具',
            icon: 'tool',
            appName: 'devtools',
            //isModal: true,
            bodyStyle: {
                height: 400
            },
            width: 1100,
            isInstalled: false
        }]
    }

    /*插件*/
    if (!mockData.plugins) {
        mockData.plugins = [{
            id: 1,
            title: '人员列表插件',
            forApp: 'set-person-list',
            appName: 'set-person-list-plugin',
            isInstalled: false
        }]
    }

    /*配置信息 */
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

    /*用户*/
    if (!mockData.users) {
        mockData.users = [{
            id: 1,
            account: 13334445556,
            password: 'c4ca4238a0b923820dcc509a6f75849b',
            name: 'zlj'
        }]
    }

    /*home*/
    if (!mockData.home) {
        mockData.home = {}
    }

    if (!mockData.home.todos) {
        mockData.home.todos = []
        for (let i = 0; i < 50; i++) {
            mockData.home.todos.push({
                id: i,
                description: '待办' + i,
                date: `2017-${i % 11 + 1}-${i % 28 + 1}`,
            })
        }
    }

    /* 仪表盘 */
    if (!mockData.dashboard) {
        mockData.dashboard = {}
    }

    if (!mockData.dashboard.hotSearch) {
        let userCountX = [],
            userCountY = [],
            searchCountX = [],
            searchCountY = [],
            list = []

        for (let i = 0; i < 7; i++) {
            userCountX.push(moment().add(i, 'days').format('YYYY-MM-DD'))
            let v = Math.floor(Math.random() * 100) + 10
            userCountY.push(v)
        }

        for (let i = 0; i < 7; i++) {
            searchCountX.push(moment().add(i, 'days').format('YYYY-MM-DD'))
            let v = Math.floor(Math.random() * 100) + 10
            searchCountY.push(v)
        }

        for (let i = 1; i < 31; i++) {
            list.push({
                ranking: i,
                key: '搜索关键字' + i,
                searchCount: (100 - i) * 100,
                weeklyGains: '10%'
            })
        }

        mockData.dashboard.hotSearch = {
            userCount: {
                x: userCountX,
                y: userCountY,
                total: userCountY.reduce((a, b) => a + b, 0)
            },
            searchCount: {
                x: searchCountX,
                y: searchCountY,
                total: searchCountY.reduce((a, b) => a + b, 0)
            },
            list
        }
    }

    if (!mockData.dashboard.market) {
        mockData.dashboard.market = {
            rate: 0.88,
            WoW: 0.12,
            DoD: -0.11
        }
    }

    if (!mockData.dashboard.sale) {
        mockData.dashboard.sale = {
            total: 8181818, //总额
            WoW: 0.12, //周同比
            DoD: -0.11,  //日环比
            average: 12345 //日均销售额
        }
    }

    if (!mockData.dashboard.saleProportion) {
        mockData.dashboard.saleProportion = {
            total: 10000,
            details: [{
                id: 1,
                name: '家用电器',
                value: 3000
            },{
                id: 2,
                name: '个护健康',
                value: 4000
            },{
                id: 3,
                name: '服饰箱包',
                value: 1000,
            },{
                id: 4,
                name: '母婴产品',
                value: 1500
            },{
                id: 5,
                name: '其他',
                value: 500
            }]
        }
    }

    if (!mockData.dashboard.saleTrend) {
        const x = []
        const y = []

        for (let i = 12; i >= 0; i--) {
            x.push(moment().subtract(i, 'months').format('YYYY-MM'))
            let v = Math.floor(Math.random() * 10000) + 100
            y.push(v)
        }

        mockData.dashboard.saleTrend = {
            x, y
        }
    }

    if (!mockData.dashboard.topForStore) {
        mockData.dashboard.topForStore = []
        for (let i = 1; i < 8; i++) {
            mockData.dashboard.topForStore.push({
                index: i,
                storeName: '北京市海淀区上地门店' + i,
                total: (100 - i) * 100
            })
        }
    }

    if (!mockData.dashboard.trade) {
        const x = []
        const y = []
        var total = 0

        for (let i = 0; i < 30; i++) {
            x.push(moment().add(i, 'days').format('YYYY-MM-DD'))
            let v = Math.floor(Math.random() * 100) + 10
            y.push(v)
            total += v
        }

        mockData.dashboard.trade = {
            total,
            x,
            y,
            conversionRate: 0.65
        }
    }

    if (!mockData.dashboard.visit) {
        const x = []
        const y = []
        var total = 0

        for (let i = 0; i < 30; i++) {
            x.push(moment().add(i, 'days').format('YYYY-MM-DD'))
            let v = Math.floor(Math.random() * 100) + 10
            y.push(v)
            total += v
        }

        mockData.dashboard.visit = {
            total,
            x,
            y,
            average: Math.round(total / 30)
        }
    }

    /* 物料*/
    if (!mockData.materiels) {
        mockData.materiels = [{
            id: 1,
            code: 'M001',
            name: '物料1',
            spec: '规格1',
            prop: '属性1',
            uom: {
                name: '个'
            }
        }, {
            id: 2,
            code: 'M002',
            name: '物料2',
            spec: '规格2',
            prop: '属性2',
            uom: {
                name: '件'
            }
        }]
    }

    /*工艺*/
    if (!mockData.technics) {
        mockData.technics = [{
            id: 1,
            code: 'T001',
            name: '工艺1',
        }, {
            id: 2,
            code: 'T002',
            name: '工艺2',
        }]
    }

    /*工艺工序*/
    if (!mockData.technicDetails) {
        mockData.technicDetails = [{
            id: 1,
            technicId: 1,
            code: 'TD001',
            name: '工艺1工序1',
        }, {
            id: 2,
            technicId: 1,
            code: 'T002',
            name: '工艺1工序2',
        }, {
            id: 1,
            technicId: 2,
            code: 'TD003',
            name: '工艺2工序1',
        }, {
            id: 2,
            technicId: 2,
            code: 'T004',
            name: '工艺2工序2',
        }]
    }

    /*bom*/
    if (!mockData.boms) {
        mockData.boms = [{
            id: 0,
            code: '001',
            materiel: mockData.materiels[0],
            technic: mockData.technics[0],
            amount: 1,
            yield: 100,
            status: { id: 2, name: '未使用' },
            details: [{
                id: 1,
                materiel: mockData.materiels[0],
                amount: 1,
                lossRate: 0,
                technicDetail: mockData.technicDetails[0]
            }]
        }]
    }

    /*客户分类*/
    if (!mockData.customerGroups) {
        mockData.customerGroups = [{
            id: 0,
            code: 'CG001',
            name: '北京客户'
        }]
    }

    /*客户*/
    if (!mockData.customers) {
        mockData.customers = []
        for (let i = 0; i < 200; i++) {
            mockData.customers.push({
                id: i,
                code: 'CUSTOMER' + (i + 1),
                name: '客户' + (i + 1),
                customerGroup: mockData.customerGroups[0]
            })
        }
    }

    /*部门*/
    if (!mockData.departments) {
        mockData.departments = []
        for (let i = 0; i < 5; i++) {
            mockData.departments.push({
                id: i,
                code: '00' + (i + 1),
                name: '部门' + (i + 1),
            })
        }
    }

    /*人员*/
    if (!mockData.persons) {
        mockData.persons = []
        for (let i = 0; i < 200; i++) {
            mockData.persons.push({
                id: i,
                name: '诸葛' + (i + 1),
                sex: i % 2 == 0 ? { id: 0, name: '女'} : {id:1, name: '男'},
                birthday: `1980-${i % 11 + 1}-${i % 28 + 1}`,
                mobile: '13818181' + (100 + i),
                department: mockData.departments[0],
                address: '北京海淀'
            })
        }
    }
}

export default initMockData
