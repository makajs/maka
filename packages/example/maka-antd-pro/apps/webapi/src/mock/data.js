import { fetch, getAction } from 'maka'

const mockData = fetch.mockData

function initMockData() {

    const moment = getAction('moment')


    /* menu */
    if (!mockData.menus) {
        mockData.menus = [{
            icon: 'dashboard',
            locale: 'menu.dashboard',
            children: [{
                locale: 'menu.dashboard.analysis',
                appName: 'dashboard-analysis'
            }, {
                locale: 'menu.dashboard.monitor',
                appName: 'dashboard-monitor'
            }, {
                locale: 'menu.dashboard.workplace',
                appName: 'dashboard-workplace'
            }]
        }, {
            icon: 'form',
            locale: 'menu.form',
            children: [{
                locale: 'menu.form.basicform',
                appName: 'form-basic'
            }, {
                locale: 'menu.form.stepform',
                appName: 'form-step'
            }, {
                locale: 'menu.form.advancedform',
                appName: 'form-advanced'
            }]

        }, {
            icon: 'table',
            locale: 'menu.list',
            children: [{
                locale: 'menu.list.searchtable',
                appName: 'list-query'
            }, {
                locale: 'menu.list.basiclist',
                appName: 'list-basic'
            }, {
                locale: 'menu.list.cardlist',
                appName: 'list-card'
            }, {
                locale: 'menu.list.searchlist',
                children:[{
                    locale:'menu.list.searchlist.articles',
                    appName: 'list-search-article'
                },{
                    locale:'menu.list.searchlist.projects',
                    appName: 'list-search-project'
                },{
                    locale:'menu.list.searchlist.applications',
                    appName: 'list-search-application'
                }]
            }]
        }, {
            icon: 'profile',
            locale: 'menu.profile',
            children: [{
                locale: 'menu.profile.basic',
                appName: 'profile-basic'
            }, {
                locale: 'menu.profile.advanced',
                appName: 'profile-advanced'
            }]
        }, {
            icon: 'check-circle-o',
            locale: 'menu.result',
            children: [{
                locale: 'menu.result.success',
                appName: 'result-success'
            }, {
                locale: 'menu.result.fail',
                appName: 'result-fail'
            }]
        }, {
            icon: 'warning',
            locale: 'menu.exception',
            children: [{
                locale: 'menu.exception.not-permission',
                appName: 'common-exception?403',
                appProps: { type: '403', desc: 'app.exception.description.403' }

            }, {
                locale: 'menu.exception.not-find',
                appName: 'common-exception?404',
                appProps: { type: '404', desc: 'app.exception.description.404' }

            }, {
                locale: 'menu.exception.server-error',
                appName: 'common-exception?500',
                appProps: { type: '500', desc: 'app.exception.description.500' }

            }]
        }, {
            icon: 'user',
            locale: 'menu.account',
            children: [{
                locale: 'menu.account.center',
                appName: 'account-center'
            }, {
                locale: 'menu.account.settings',
                appName: 'account-setting'
            }]
        }]
    }


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
        }/*, {
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
        }*/]
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
            activePrimaryColor: 'geekblue',
            mode: 'inline', //vertical || horizontal || inline
            theme: 'dark', //dark || light
            collapsed: false,
            layout: 'sidermenu', //sidermenu || topmenu
            contentWidth: 'Fluid',
            fixedHeader: false,
            fixedSiderbar: false,
            autoHideHeader: false,
            colorWeak: false,
            collapse: true,
            tabStyle: true,
            horizontalMenu: false,

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
            }, {
                id: 2,
                name: '个护健康',
                value: 4000
            }, {
                id: 3,
                name: '服饰箱包',
                value: 1000,
            }, {
                id: 4,
                name: '母婴产品',
                value: 1500
            }, {
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
                sex: i % 2 == 0 ? { id: 0, name: '女' } : { id: 1, name: '男' },
                birthday: `1980-${i % 11 + 1}-${i % 28 + 1}`,
                mobile: '13818181' + (100 + i),
                department: mockData.departments[0],
                address: '北京海淀'
            })
        }
    }

    if (!mockData.notices) {
        mockData.notices = [{
            "id": "000000001", "avatar": "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png", "title": "你收到了 14 份新周报", "datetime": "2017-08-09", "type": "notification"
        }, {
            "id": "000000002", "avatar": "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png", "title": "你推荐的 曲妮妮 已通过第三轮面试", "datetime": "2017-08-08", "type": "notification"
        }, {
            "id": "000000003", "avatar": "https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png", "title": "这种模板可以区分多种通知类型", "datetime": "2017-08-07", "read": true, "type": "notification"
        }, {
            "id": "000000004", "avatar": "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png", "title": "左侧图标用于区分不同的类型", "datetime": "2017-08-07", "type": "notification"
        }, {
            "id": "000000005", "avatar": "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png", "title": "内容不要超过两行字，超出时自动截断", "datetime": "2017-08-07", "type": "notification"
        }, {
            "id": "000000006", "avatar": "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg", "title": "曲丽丽 评论了你", "description": "描述信息描述信息描述信息", "datetime": "2017-08-07", "type": "message", "clickClose": true
        }, {
            "id": "000000007", "avatar": "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg", "title": "朱偏右 回复了你", "description": "这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像", "datetime": "2017-08-07", "type": "message", "clickClose": true
        }, {
            "id": "000000008", "avatar": "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg", "title": "标题", "description": "这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像", "datetime": "2017-08-07", "type": "message", "clickClose": true
        }, {
            "id": "000000009", "title": "任务名称", "description": "任务需要在 2017-01-12 20:00 前启动", "extra": "未开始", "status": "todo", "type": "event"
        }, {
            "id": "000000010", "title": "第三方紧急代码变更", "description": "冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务", "extra": "马上到期", "status": "urgent", "type": "event"
        }, {
            "id": "000000011", "title": "信息安全考试", "description": "指派竹尔于 2017-01-09 前完成更新并发布", "extra": "已耗时 8 天", "status": "doing", "type": "event"
        }, {
            "id": "000000012", "title": "ABCD 版本发布", "description": "冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务", "extra": "进行中", "status": "processing", "type": "event"
        }]
    }
}

export default initMockData
