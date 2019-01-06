import { fetch } from 'maka'

const mockData = fetch.mockData

fetch.mock('/api/plugin/query', (option) => {
    
    return { result: true, value: mockData.plugins }
})

fetch.mock('/api/plugin/install', (option) => {
    
    var { id } = option
    mockData.plugins.find(o => o.id === id).isInstalled = true
    return { result: true, value: true }
})

fetch.mock('/api/plugin/uninstall', (option) => {
    
    var { id } = option
    mockData.plugins.find(o => o.id === id).isInstalled = false
    return { result: true, value: true }
})