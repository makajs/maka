import { fetch } from 'maka'

const mockData = fetch.mockData


fetch.mock('/api/technic/queryAll', (option) => {
    return {
        result: true,
        value: mockData.technics
    }
})

fetch.mock('/api/technic/detail/queryAll', (option) => {
    var details = mockData.technicDetails.filter(o => o.technicId == option.technicId)
    return {
        result: true,
        value: details
    }
})

