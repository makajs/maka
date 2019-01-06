import { fetch } from 'maka'

const mockData = fetch.mockData

fetch.mock('/api/notice/query', (option) => {
    return {
        result: true,
        value: mockData.notices
    }
})
