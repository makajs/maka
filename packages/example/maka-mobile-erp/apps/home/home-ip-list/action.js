
import { actionMixin, fetch, getComponent, navigate } from 'maka'

@actionMixin('base', 'toast', 'numberHelper')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
        const ListView = getComponent('antd.ListView')
        this.dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1.id !== row2.id,
        })
    }

    onInit = () => {
        this.load([], {type: this.component.props.searchType || 'today'})
    }

    load = async (oldList = [], filter = { type: 'today' }, pagination = { current: 1, total: 0, pageSize: 30 }) => {
        var resp = await fetch.post('/v1/home/ip', { filter, pagination })
        var list = oldList.concat(resp.list)
        this.base.ss({
            'data.list': list,
            'data.total': resp.total,
            'data.pagination': resp.pagination,
            'data.filter': filter,
            'data.other.filterVisible': false,
            'data.isLoading': false
        })
    }

    reload = () => {
        var data = this.base.gs()
        this.load([], data.filter, data.pagination)
    }

    filterChange = (opt) => {
        var data = this.base.gs(),
            filter = data.filter

        filter.type = opt.props.value

        this.load([], filter, { current: 1, total: 0, pageSize: 30 })
    }

    endReached = () => {
        var data = this.base.gs()
        if (data.isLoading)
            return

        this.base.ss({ 'data.isLoading': true })

        data.pagination.current += 1

        this.load(data.list, data.filter, data.pagination)
    }

    getDataSource = () => {
        var data = this.base.gs('data'),
            list = data.list,
            dataBlob = {},
            ret

        if (!list || list.length == 0) {
            ret = this.dataSource.cloneWithRows([])
            ret._notParse = true
            return ret 
        }

        for (let i = 0; i < list.length; i++) {
            const ii = i;
            dataBlob[`${ii}`] = list[ii];
        }

        ret = this.dataSource.cloneWithRows(dataBlob)
        ret._notParse = true
        return ret
    }



    goBack = () => {
        this.component.props.onOk({ result: true })
        navigate.goBack()
    }


}
