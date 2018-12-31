import { fetch } from 'maka'

const mockData = fetch.mockData

fetch.mock('/api/materiel/queryAll', (option) => {
    return {
        result: true,
        value: mockData.materiels
    }
})
