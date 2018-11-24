import { fetch } from 'maka'

const mockData = fetch.mockData

function initMockData() {
    if (!mockData.customerGroups) {
        mockData.customerGroups = [{
            id: 0,
            code: 'CG001',
            name: '北京客户'
        }]
    }
}

fetch.mock('/v1/customer/group/findById', (option) => {
    initMockData()
    const o = mockData.customerGroups.find(o => o.id == option.id)
    return {
        result: true,
        value: o
    }
})

fetch.mock('/v1/customer/group/create', (option) => {
    initMockData()

    const id = mockData.customerGroups.length
    const v = { ...option, id }
    if(option.customerGroup){
        v.parentId = option.customerGroup.id
        delete v.customerGroup 
    }
    
    console.log(v)
    mockData.customerGroups.push(v)

    return { result: true, value: v }
})

fetch.mock('/v1/customer/group/update', (option) => {
    initMockData()
    mockData.customerGroups[option.id] = option
    return { result: true, value: option }
})
