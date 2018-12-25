import { fetch } from 'maka'

const mockData = fetch.mockData

function initMockData() {
    if (!mockData.home) {
        mockData.home = {}
    }

    if(!mockData.home.todos){
        mockData.home.todos = []
        for (let i = 0; i < 50; i++) {
            mockData.home.todos.push({
                id: i,
                description: '待办' + i,
                date: `2017-${i % 11 + 1}-${i % 28 + 1}`,
            })
        }
    }
}


fetch.mock('/v1/home/todo', (option) => {
    initMockData()
    return {result: true, value: mockData.home.todos}
})
