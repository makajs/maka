import { fetch, getAction } from 'maka'


const mockData = fetch.mockData

function initMockData() {
    const moment = getAction('moment')
    if(!mockData.dashboard){
        mockData.dashboard = {}
    }
    if (!mockData.dashboard.sale) {
        mockData.dashboard.sale = {
            total: 8181818, //总额
            WoW: 0.12, //周同比
            DoD: -0.11,  //日环比
            average: 12345 //日均销售额
        }
    }
}

fetch.mock('/v1/dashboard/sale', (option) => {
    initMockData()
    return {
        result: true,
        value: mockData.dashboard.sale
    }
})
