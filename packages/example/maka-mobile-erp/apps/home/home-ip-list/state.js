

export default {
    data: {
        list: [],
        pagination: { current: 1, total: 0, pageSize: 30 },
        total:{income: 0, pay:0},
        filter: {
            type: 'today'
        },
        other:{
            filterDataSource: [{
                label: '今日',
                value: 'today'
            },{
                label: '昨日',
                value: 'yesterday'
            },{
                label: '本月',
                value: 'month'
            },{
                label: '全部',
                value: 'all'
            }]
        }
    }
}