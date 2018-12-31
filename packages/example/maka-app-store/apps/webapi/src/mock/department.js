import { fetch } from 'maka'

const mockData = fetch.mockData

fetch.mock('/api/department/queryAll', (option) => {
    return {
        result: true,
        value: mockData.departments
    }
})
