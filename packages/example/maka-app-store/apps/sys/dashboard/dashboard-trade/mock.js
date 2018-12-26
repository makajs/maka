import { fetch, getAction } from 'maka'


const mockData = fetch.mockData

function initMockData() {
    const moment = getAction('moment')
    if(!mockData.dashboard){
        mockData.dashboard = {}
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
}

fetch.mock('/v1/dashboard/trade', (option) => {
    initMockData()
    return {
        result: true,
        value: mockData.dashboard.trade
    }
})
