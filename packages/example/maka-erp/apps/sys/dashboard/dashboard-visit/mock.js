import { fetch, getAction } from 'maka'
const moment = getAction('moment')

const mockData = fetch.mockData

function initMockData() {
    if(!mockData.dashboard){
        mockData.dashboard = {}
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
}

fetch.mock('/v1/dashboard/visit', (option) => {
    initMockData()
    return {
        result: true,
        value: mockData.dashboard.visit
    }
})
