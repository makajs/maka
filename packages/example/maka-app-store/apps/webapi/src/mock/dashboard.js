import { fetch } from 'maka'

const mockData = fetch.mockData

fetch.mock('/api/dashboard/hotSearch', (option) => {
    return {
        result: true,
        value: mockData.dashboard.hotSearch
    }
})


fetch.mock('/api/dashboard/market', (option) => {
    return {
        result: true,
        value: mockData.dashboard.market
    }
})

fetch.mock('/api/dashboard/sale', (option) => {
    return {
        result: true,
        value: mockData.dashboard.sale
    }
})


fetch.mock('/api/dashboard/saleProportion', (option) => {
    return {
        result: true,
        value: mockData.dashboard.saleProportion
    }
})

fetch.mock('/api/dashboard/saleTrend', (option) => {
    return {
        result: true,
        value: {
            saleTrend: mockData.dashboard.saleTrend,
            topForStore: mockData.dashboard.topForStore,
        }
    }
})


fetch.mock('/api/dashboard/trade', (option) => {
    return {
        result: true,
        value: mockData.dashboard.trade
    }
})


fetch.mock('/api/dashboard/visit', (option) => {
    return {
        result: true,
        value: mockData.dashboard.visit
    }
})
