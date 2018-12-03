import { fetch, getAction } from 'maka'
const moment = getAction('moment')

const mockData = fetch.mockData

function getRandomNum(min, max) {
    var Range = max - min;
    var Rand = Math.random();
    return (min + Math.round(Rand * Range));
}

function initMockData() {
    if (!mockData.goodss) {
        mockData.goodss = []
        for (var i = 0; i < 8; i++) {
            mockData.goodss.push({
                id: i,
                name: '商品' + i,
            })
        }
    }

    if (!mockData.ips) {
        mockData.ips = []
        for (var i = 0; i < 200; i++) {
            mockData.ips.push({
                id: i,
                type: { code: 'income', name: '收入' },
                goods: mockData.goodss[getRandomNum(0, 6)],
                amount: getRandomNum(3, 10000),
                date: moment().subtract(getRandomNum(0, 40), 'days').format('YYYY-MM-DD')
            })
        }

        for (var i = 0; i < 100; i++) {
            mockData.ips.push({
                id: i,
                type: { code: 'pay', name: '支出' },
                goods: mockData.goodss[getRandomNum(0, 6)],
                amount: getRandomNum(3, 10000) * -1,
                date: moment().subtract(getRandomNum(0, 40), 'days').format('YYYY-MM-DD')
            })
        }
    }

    if (!mockData.todos) {
        mockData.todos = []
        for(var i = 0; i < 10; i ++ ){
            mockData.todos.push({
                id: i,
                title: '待办事物' + i,
                description: '代办描述' + i,
                date: moment().subtract(getRandomNum(0, 40), 'days').format('YYYY-MM-DD')
            })
        }
    }

    if (!mockData.toAudits) {
        mockData.toAudits = []
        for(var i = 0; i < 5; i ++ ){
            mockData.toAudits.push({
                id: i,
                title: '待审事物' + i,
                description: '待审事物' + i,
                date: moment().subtract(getRandomNum(0, 40), 'days').format('YYYY-MM-DD')
            })
        }
    }
}

fetch.mock('/v1/home', (option) => {
    initMockData()
    return {
        result: true,
        value: {
            incomeAndPays: [{
                title: '今日',
                type: 'today',
                date: moment().format('YYYY-MM-DD'),
                income: mockData.ips.filter(o => o.date == moment().format('YYYY-MM-DD') && o.type.code == 'income').reduce((a, b) => a + b.amount, 0),
                pay: mockData.ips.filter(o => o.date == moment().format('YYYY-MM-DD') && o.type.code == 'pay').reduce((a, b) => a + b.amount, 0) * -1,
            }, {
                title: '昨日',
                type: 'yesterday',
                date: moment().subtract(1, 'days').format('YYYY-MM-DD'),
                income: mockData.ips.filter(o => o.date == moment().subtract(1, 'days').format('YYYY-MM-DD') && o.type.code == 'income').reduce((a, b) => a + b.amount, 0),
                pay: mockData.ips.filter(o => o.date == moment().subtract(1, 'days').format('YYYY-MM-DD') && o.type.code == 'pay').reduce((a, b) => a + b.amount, 0) * -1, 
            }, {
                title: '本月',
                type: 'month',
                date: moment().format('YYYY-MM'),
                income: mockData.ips.filter(o => moment(o.date).format('YYYY-MM') == moment().format('YYYY-MM') && o.type.code == 'income').reduce((a, b) => a + b.amount, 0),
                pay: mockData.ips.filter(o => moment(o.date).format('YYYY-MM') == moment().format('YYYY-MM') && o.type.code == 'pay').reduce((a, b) => a + b.amount, 0) * -1,
            }],
            todoCount: mockData.todos.length,
            toAuditCount: mockData.toAudits.length,
        }
    }
})
