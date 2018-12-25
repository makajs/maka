import { fetch, getAction } from 'maka'

const mockData = fetch.mockData

function initMockData() {
    if (!mockData.materiels) {
        mockData.materiels = [{
            id: 1,
            code: 'M001',
            name: '物料1',
            spec: '规格1',
            prop: '属性1',
            uom: {
                name: '个'
            }
        }, {
            id: 2,
            code: 'M002',
            name: '物料2',
            spec: '规格2',
            prop: '属性2',
            uom: {
                name: '件'
            }
        }]
    }

    if (!mockData.technics) {
        mockData.technics = [{
            id: 1,
            code: 'T001',
            name: '工艺1',
        }, {
            id: 2,
            code: 'T002',
            name: '工艺2',
        }]
    }

    if (!mockData.technicDetails) {
        mockData.technicDetails = [{
            id: 1,
            technicId: 1,
            code: 'TD001',
            name: '工艺1工序1',
        }, {
            id: 2,
            technicId: 1,
            code: 'T002',
            name: '工艺1工序2',
        }, {
            id: 1,
            technicId: 2,
            code: 'TD003',
            name: '工艺2工序1',
        }, {
            id: 2,
            technicId: 2,
            code: 'T004',
            name: '工艺2工序2',
        }]
    }

    if (!mockData.boms) {
        mockData.boms = [{
            id: 0,
            code: '001',
            materiel: mockData.materiels[0],
            technic: mockData.technics[0],
            amount: 1,
            yield: 100,
            status: { id: 2, name: '未使用' },
            details: [{
                id: 1,
                materiel: mockData.materiels[0],
                amount: 1,
                lossRate: 0,
                technicDetail: mockData.technicDetails[0]
            }]
        }]
    }
}

fetch.mock('/v1/bom/query', (option) => {
    initMockData()
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

fetch.mock('/v1/bom/del', (option) => {
    initMockData()
    option.boms.forEach(bom => {
        let index = mockData.boms.findIndex(o => o.id == bom.id)

        if (index || index === 0)
            mockData.boms.splice(index, 1)
    })

    return { result: true, value: true }
})
