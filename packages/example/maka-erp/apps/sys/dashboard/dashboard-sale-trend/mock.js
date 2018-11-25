import { fetch, getAction } from 'maka'
const moment = getAction('moment')

const mockData = fetch.mockData

function initMockData() {
    if (!mockData.dashboard) {
        mockData.dashboard = {}
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

}

fetch.mock('/v1/dashboard/sale/trend', (option) => {
    initMockData()
    return {
        result: true,
        value: {
            saleTrend: mockData.dashboard.saleTrend,
            topForStore: mockData.dashboard.topForStore,
        }
    }
})
