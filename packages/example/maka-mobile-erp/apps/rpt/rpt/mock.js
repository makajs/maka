import { fetch, getAction } from 'maka'
const moment = getAction('moment')
const lodash = getAction('lodash')

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
}


fetch.mock('/v1/rpt', (option) => {
    initMockData()
    var data = mockData.ips
    var incomes = data.filter(o => o.type.code = 'income')
    var incomeTotal = incomes.reduce((a,b)=>a+b.amount, 0)

    var pays = data.filter(o => o.type.code = 'pay')
    var payTotal = pays.reduce((a,b)=>a+b.amount, 0)

    var top5Incomes = lodash.chain(incomes)
        .groupBy(o => o.goods.id)
        .map(o => { return { name: o[0].goods.name, amount: o.reduce((a,b)=>a+b.amount, 0), total: incomeTotal  } })
        .sortBy('amount')
        .value()
        .reverse()
        .slice(0, 5)

    top5Incomes.push({
        name: '其他',
        amount: incomeTotal - top5Incomes.reduce((a, b) => a + b.amount, 0),
        total: incomeTotal
    })


    var top5Pays = lodash.chain(pays)
        .groupBy(o => o.goods.id)
        .map(o => { return { name: o[0].goods.name, amount: o.reduce((a,b)=>a+b.amount, 0), total: payTotal } })
        .sortBy('amount')
        .value()
        .reverse()
        .slice(0, 5)

        top5Pays.push({
        name: '其他',
        amount: payTotal - top5Pays.reduce((a, b) => a + b.amount, 0),
        total: payTotal
    })

    return {
        result: true,
        value: {
            top5Incomes: top5Incomes,
            top5Pays: top5Pays
        }
    }
})


