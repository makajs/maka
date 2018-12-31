import { fetch, getAction } from 'maka'


const mockData = fetch.mockData


function initMockData() {
    const moment = getAction('moment')
    if(!mockData.dashboard){
        mockData.dashboard = {}
    }

    if (!mockData.dashboard.hotSearch) {
        let userCountX = [],
            userCountY = [],
            searchCountX = [],
            searchCountY = [],
            list = []

        for (let i = 0; i < 7; i++) {
            userCountX.push(moment().add(i, 'days').format('YYYY-MM-DD'))
            let v = Math.floor(Math.random() * 100) + 10
            userCountY.push(v)
        }

        for (let i = 0; i < 7; i++) {
            searchCountX.push(moment().add(i, 'days').format('YYYY-MM-DD'))
            let v = Math.floor(Math.random() * 100) + 10
            searchCountY.push(v)
        }

        for (let i = 1; i < 31; i++) {
            list.push({
                ranking: i,
                key: '搜索关键字' + i,
                searchCount: (100 - i) * 100,
                weeklyGains: '10%'
            })
        }

        mockData.dashboard.hotSearch = {
            userCount: {
                x: userCountX,
                y: userCountY,
                total: userCountY.reduce((a, b) => a + b, 0)
            },
            searchCount: {
                x: searchCountX,
                y: searchCountY,
                total: searchCountY.reduce((a, b) => a + b, 0)
            },
            list
        }
    }
}

fetch.mock('/v1/dashboard/hot/search', (option) => {
    initMockData()
    return {
        result: true,
        value: mockData.dashboard.hotSearch
    }
})
