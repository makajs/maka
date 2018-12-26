import { fetch, getAction } from 'maka'


const mockData = fetch.mockData

function initMockData() {
    const moment = getAction('moment')
    if(!mockData.dashboard){
        mockData.dashboard = {}
    }
    if (!mockData.dashboard.saleProportion) {
        mockData.dashboard.saleProportion = {
            total: 10000,
            details: [{
                id: 1,
                name: '家用电器',
                value: 3000
            },{
                id: 2,
                name: '个护健康',
                value: 4000
            },{
                id: 3,
                name: '服饰箱包',
                value: 1000,
            },{
                id: 4,
                name: '母婴产品',
                value: 1500
            },{
                id: 5,
                name: '其他',
                value: 500
            }]
        }
    }
}

fetch.mock('/v1/dashboard/sale/proportion', (option) => {
    initMockData()
    return {
        result: true,
        value: mockData.dashboard.saleProportion
    }
})
