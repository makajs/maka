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

    if (!mockData.customers) {
        mockData.customers = []
        for (let i = 0; i < 200; i++) {
            mockData.customers.push({
                id: i,
                code: 'CUSTOMER' + (i + 1),
                name: '客户' + (i + 1),
                customerGroup: mockData.customerGroups[0]
            })
        }
    }
}

fetch.mock('/v1/customer/query', (option) => {
    initMockData()
    const { pagination, filter } = option

    var data = mockData.customers
    if (filter) {
        if (filter.search)
            data = data.filter(o => o.name.indexOf(filter.search) != -1)
    }

    var current = pagination.current
    var pageSize = pagination.pageSize
    var start = (current - 1) * pageSize
    var end = current * pageSize

    start = start > data.length - 1 ? 0 : start
    end = start > data.length - 1 ? pageSize : end
    current = start > data.length - 1 ? 1 : current

    var ret = {
        result: true,
        value: {
            pagination: { current, pageSize, total: data.length },
            list: []
        }
    }
    for (let j = start; j < end; j++) {
        if (data[j])
            ret.value.list.push(data[j])
    }

  
    return ret
})



fetch.mock('/v1/customer/findById', (option) => {
    initMockData()

    const person = mockData.customers.find(o => o.id == option.id)
    
    return {
        result: true,
        value: person
    }
})

fetch.mock('/v1/customer/create', (option) => {
    initMockData()

    const id = mockData.customers.length
    const v = { ...option, id }
    mockData.customers.push(v)

    return { result: true, value: v }
})

fetch.mock('/v1/customer/update', (option) => {
    initMockData()
    var index = mockData.customers.findIndex(o => o.id == option.id)
    mockData.customers[index] = option
    return { result: true, value: option }
})


fetch.mock('/v1/customer/gourp/queryAll', (option) => {
    initMockData()
    return {
        result: true,
        value: mockData.customerGroups
    }
})
