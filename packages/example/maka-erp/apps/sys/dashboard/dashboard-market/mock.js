import { fetch } from 'maka'

const mockData = fetch.mockData

function initMockData() {
    if(!mockData.dashboard){
        mockData.dashboard = {}
    }
    if (!mockData.dashboard.market) {
        mockData.dashboard.market = {
            rate: 0.88,
            WoW: 0.12,
            DoD: -0.11
        }
    }
}

fetch.mock('/v1/dashboard/market', (option) => {
    initMockData()
    return {
        result: true,
        value: mockData.dashboard.market
    }
})
