import { fetch } from 'maka'

const mockData = fetch.mockData

function initMockData() {
    if (!mockData.departments) {
        mockData.departments = []
        for (let i = 0; i < 5; i++) {
            mockData.departments.push({
                id: i,
                code: '00' + (i + 1),
                name: '部门' + (i + 1),
            })
        }
    }

    if (!mockData.persons) {
        mockData.persons = []
        for (let i = 0; i < 200; i++) {
            mockData.persons.push({
                id: i,
                name: '诸葛' + (i + 1),
                sex: i % 2 == 0 ? { id: 0, name: '女'} : {id:1, name: '男'},
                birthday: `1980-${i % 11 + 1}-${i % 28 + 1}`,
                mobile: '13818181' + (100 + i),
                department: mockData.departments[0],
                address: '北京海淀'
            })
        }
    }
}


fetch.mock('/v1/person/query', (option) => {
    initMockData()
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

fetch.mock('/v1/person/del', (option) => {
    initMockData()
    option.persons.forEach(person => {
        let index = mockData.persons.findIndex(o => o.id == person.id)

        if (index || index === 0)
            mockData.persons.splice(index, 1)
    })

    return { result: true, value: true }
})
