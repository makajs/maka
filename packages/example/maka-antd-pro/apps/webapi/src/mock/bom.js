import { fetch } from 'maka'

const mockData = fetch.mockData

fetch.mock('/api/bom/findById', (option) => {
    const bom = mockData.boms.find(o => o.id == option.id)
    
    return {
        result: true,
        value: bom
    }
})

fetch.mock('/api/bom/query', (option) => {
    const { pagination, filter } = option

    var data = mockData.boms
    if (filter) {
        if (filter.search)
            data = data.filter(o => o.code.indexOf(filter.search) != -1)
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

fetch.mock('/api/bom/del', (option) => {
    option.boms.forEach(bom => {
        let index = mockData.boms.findIndex(o => o.id == bom.id)

        if (index || index === 0)
            mockData.boms.splice(index, 1)
    })

    return { result: true, value: true }
})


fetch.mock('/api/bom/prev', (option) => {
    if(mockData.boms.length == 0){
        return {
            result: false,
            error: { message: '已经是首页' }
        }
    }

    var index = 0 

    if( option.id || option.id == 0) 
        index =  mockData.boms.findIndex(o => o.id == option.id)
    else
        index = mockData.boms.length 

    if(index == 0){
        return {
            result: false,
            error: { message: '已经是首页' }
        }
    }
    
    return {
        result: true,
        value: mockData.boms[index-1]
    }
})

fetch.mock('/api/bom/next', (option) => {
    if(mockData.boms.length == 0){
        return {
            result: false,
            error: { message: '已经是末页' }
        }
    }

    var index = 0 

    if( option.id || option.id == 0) 
        index =  mockData.boms.findIndex(o => o.id == option.id)
    else
        index = -1

    if(index == mockData.boms.length -1){
        return {
            result: false,
            error: { message: '已经是末页' }
        }
    }
    
    return {
        result: true,
        value: mockData.boms[index+1]
    }
})

fetch.mock('/api/bom/create', (option) => {
    const id = mockData.boms.length
    const v = { ...option, id }
    mockData.boms.push(v)

    return { result: true, value: v }
})

fetch.mock('/api/bom/update', (option) => {
    var index = mockData.boms.findIndex(o => o.id == option.id)
    mockData.boms[index] = option
    return { result: true, value: option }
})


