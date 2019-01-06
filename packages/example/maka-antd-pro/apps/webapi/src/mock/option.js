import { fetch } from 'maka'

const mockData = fetch.mockData

fetch.mock('/api/option/query', (option) => {
    
    return { result: true, value: mockData.option }

})

fetch.mock('/api/option/update', (option) => {
    
    mockData.option = {
        ...mockData.option,
        ...option
    }

    return { result: true, value: mockData.option }
})
