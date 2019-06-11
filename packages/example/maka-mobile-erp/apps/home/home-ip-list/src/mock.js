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
}


fetch.mock('/v1/home/ip', (option) => {
    initMockData()
    const { pagination, filter } = option
    
    var data = mockData.ips
    switch (filter.type) {
        case 'today':
            data = data.filter(o => o.date == moment().format('YYYY-MM-DD'))
            break;
        case 'yesterday':
            data = data.filter(o => o.date == moment().subtract(1, 'days').format('YYYY-MM-DD'))
            break;
        case 'month':
            data = data.filter(o => moment(o.date).format('YYYY-MM') == moment().format('YYYY-MM'))
            break;
        default:
            break;
    }

    data = data.sort((a, b) => moment(a.date).isBefore(moment(b.date)) ? 1 : -1)

    var totalPay = data.filter(o => o.type.code == 'pay').reduce((a, b) => a + b.amount, 0)
    var totalIncome = data.filter(o => o.type.code == 'income').reduce((a, b) => a + b.amount, 0)

    var current = pagination.current
    var pageSize = pagination.pageSize
    var start = (current - 1) * pageSize
    var end = current * pageSize

    if (start > data.length - 1) {
        return {
            result: true,
            value: {
                pagination: { current, pageSize, total: data.length },
                list: [],
                total: {
                    pay: totalPay,
                    income: totalIncome
                }
            }
        }
    }
    start = start > data.length - 1 ? 0 : start
    end = start > data.length - 1 ? pageSize : end
    current = start > data.length - 1 ? 1 : current
    var ret = {
        result: true,
        value: {
            pagination: { current, pageSize, total: data.length },
            list: [],
            total: {
                pay: totalPay,
                income: totalIncome
            }
        }
    }

    for (let j = start; j < end; j++) {
        if (data[j])
            ret.value.list.push(data[j])
    }


    return ret
})


