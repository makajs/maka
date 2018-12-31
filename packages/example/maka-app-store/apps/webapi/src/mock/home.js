import { fetch } from 'maka'

const mockData = fetch.mockData

fetch.mock('/api/home/todo', (option) => {
    return {result: true, value: mockData.home.todos}
})


fetch.mock('/v1/home/chart', (option) => {
    return {
        result: true,
        value:{
            xAxisData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            seriesData: [
                [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            ]
        }
    }
})

