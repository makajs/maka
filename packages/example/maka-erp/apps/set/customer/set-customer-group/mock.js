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

    if(o.parentId || o.parentId == 0){
        var parent = mockData.customerGroups.find(p => p.id == o.parentId)
        o.parent = {id: parent.id, code: parent.code, name: parent.name}
    }
    return {
        result: true,
        value: o
    }
})

fetch.mock('/v1/customer/group/create', (option) => {
    initMockData()

    const id = mockData.customerGroups.length
    const v = { ...option, id }
    if(option.parent){
        v.parentId = option.parent.id
        delete v.parent 
    }
    
    console.log(v)
    mockData.customerGroups.push(v)

    return { result: true, value: v }
})

fetch.mock('/v1/customer/group/update', (option) => {
    initMockData()
    var index = mockData.customerGroups.findIndex(o => o.id == option.id)
    mockData.customerGroups[index] = option
    return { result: true, value: option }
})
