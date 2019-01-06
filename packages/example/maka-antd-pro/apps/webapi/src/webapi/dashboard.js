import { fetch } from 'maka'

export default {
    dashboard: {
        hotSearch: (option) => fetch.post('/api/dashboard/hotSearch', option),
        market: (option) => fetch.post('/api/dashboard/market', option),
        sale: (option) => fetch.post('/api/dashboard/sale', option),
        saleProportion: (option) => fetch.post('/api/dashboard/saleProportion', option),
        saleTrend: (option) => fetch.post('/api/dashboard/saleTrend', option),
        trade: (option) => fetch.post('/api/dashboard/trade', option),
        visit: (option) => fetch.post('/api/dashboard/visit', option),
    }
}