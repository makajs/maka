import { fetch } from 'maka'

const mockData = fetch.mockData

fetch.mock('/api/appstore/query', (option) => {
    
    return { result: true, value: mockData.apps }
})

fetch.mock('/api/appstore/install', (option) => {
    

    var { id } = option
    mockData.apps.find(o => o.id === id).isInstalled = true
    return { result: true, value: true }
})

fetch.mock('/api/appstore/uninstall', (option) => {
    

    var { id } = option
    mockData.apps.find(o => o.id === id).isInstalled = false
    return { result: true, value: true }
})

