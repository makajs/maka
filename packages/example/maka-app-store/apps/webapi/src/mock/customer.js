import { fetch } from 'maka'

const mockData = fetch.mockData


fetch.mock('/api/customer/query', (option) => {
    
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

fetch.mock('/api/customer/findById', (option) => {
    

    const person = mockData.customers.find(o => o.id == option.id)
    
    return {
        result: true,
        value: person
    }
})

fetch.mock('/api/customer/create', (option) => {
    

    const id = mockData.customers.length
    const v = { ...option, id }
    mockData.customers.push(v)

    return { result: true, value: v }
})

fetch.mock('/api/customer/update', (option) => {
    
    var index = mockData.customers.findIndex(o => o.id == option.id)
    mockData.customers[index] = option
    return { result: true, value: option }
})

fetch.mock('/api/customer/del', (option) => {
    
    option.customers.forEach(customer => {
        let index = mockData.customers.findIndex(o => o.id == customer.id)

        if (index || index === 0)
            mockData.customers.splice(index, 1)
    })

    return { result: true, value: true }
})


fetch.mock('/api/customer/group/queryAll', (option) => {
    
    return {
        result: true,
        value: mockData.customerGroups
    }
})

fetch.mock('/api/customer/group/findById', (option) => {
    
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

fetch.mock('/api/customer/group/create', (option) => {
    

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

fetch.mock('/api/customer/group/update', (option) => {
    
    var index = mockData.customerGroups.findIndex(o => o.id == option.id)
    mockData.customerGroups[index] = option
    return { result: true, value: option }
})

fetch.mock('/api/customer/group/del', (option) => {
    

    let index = mockData.customerGroups.findIndex(o => o.id == option.id)

    if (index || index === 0)
        mockData.customerGroups.splice(index, 1)

    return { result: true, value: true }
})




