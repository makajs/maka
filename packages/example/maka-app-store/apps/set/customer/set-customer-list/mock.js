import { fetch, getAction } from 'maka'


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

fetch.mock('/v1/customer/group/queryAll', (option) => {
    initMockData()
    return {
        result: true,
        value: mockData.customerGroups
    }
})



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


fetch.mock('/v1/customer/del', (option) => {
    initMockData()
    option.customers.forEach(customer => {
        let index = mockData.customers.findIndex(o => o.id == customer.id)

        if (index || index === 0)
            mockData.customers.splice(index, 1)
    })

    return { result: true, value: true }
})



fetch.mock('/v1/customer/group/del', (option) => {
    initMockData()

    let index = mockData.customerGroups.findIndex(o => o.id == option.id)

    if (index || index === 0)
        mockData.customerGroups.splice(index, 1)

    return { result: true, value: true }
})
