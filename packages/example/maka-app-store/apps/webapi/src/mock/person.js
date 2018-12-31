import { fetch } from 'maka'

const mockData = fetch.mockData

fetch.mock('/api/person/query', (option) => {
    const { pagination, filter } = option

    var data = mockData.persons
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

fetch.mock('/api/person/del', (option) => {
    option.persons.forEach(person => {
        let index = mockData.persons.findIndex(o => o.id == person.id)

        if (index || index === 0)
            mockData.persons.splice(index, 1)
    })

    return { result: true, value: true }
})

fetch.mock('/api/person/findById', (option) => {
    const person = mockData.persons.find(o => o.id == option.id)
    
    return {
        result: true,
        value: person
    }
})

fetch.mock('/api/person/create', (option) => {
    const id = mockData.persons.length
    const v = { ...option, id }
    mockData.persons.push(v)

    return { result: true, value: v }
})

fetch.mock('/api/person/update', (option) => {
    var index = mockData.persons.findIndex(o => o.id == option.id)
    mockData.persons[index] = option
    return { result: true, value: option }
})

