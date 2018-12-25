
import { actionMixin, fetch, createAppElement } from 'maka'

@actionMixin('base', 'lodash', 'moment', 'tableHelper', 'modal', 'message')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
        this.searchReload = this.lodash.debounce(this.searchReload, 200)
    }

    onInit = () => {
        //设置监听tab激活事件
        this.component.props.addTabActiveListener 
            && this.component.props.addTabActiveListener(this.component.props.appFullName, this.tabActive)


        const pagination = this.base.gs('data.pagination')
        this.load(pagination)
    }

    load = async (pagination, filter = { search: '' }) => {
        const resp = await fetch.post('/v1/bom/query', {
            pagination,
            filter
        })

        if (!resp.pagination)
            resp.pagination = pagination

        resp.filter = filter
        resp.filter.search = this.base.gs('data.filter.search')

        this.base.ss({
            'data.list': resp.list,
            'data.pagination': resp.pagination,
            'data.filter': resp.filter
        })
    }

    reload = async () => {
        const pagination = this.base.gs('data.pagination'),
            filter = this.base.gs('data.filter')
        this.load(pagination, filter)
    }


    pageChanged = (current, pageSize) => {
        const filter = this.base.gs('data.filter')
        this.load({ current, pageSize }, filter)
    }

    searchChange = (e) => {
        var v = e.target.value
        this.base.setState({ 'data.filter.search': v })

        this.searchReload(v)
    }

    searchReload = (v) => {
        const pagination = this.base.gs('data.pagination'),
            filter = this.base.gs('data.filter')

        filter.search = v
        this.load(pagination, filter)
    }

    add = async () => {
        this.component.props.setPortalContent && this.component.props.setPortalContent('新增BOM', 'set-bom')
    }

    modify = row => async () => {
        this.component.props.setPortalContent && this.component.props.setPortalContent('BOM维护', 'set-bom', {bomId: row.id})
    }

    del = row => async () => {
        var ret = await this.modal.confirm({
            title: '删除',
            content: '确认删除?'
        })

        if (!ret)
            return

        const { id } = row

        await fetch.post('/v1/bom/del', {
            boms: [{ id }]
        })

        this.message.success('删除BOM成功')
        this.reload()
    }

    batchDel = async () => {
        const lst = this.base.gs('data.list')

        if (!lst || lst.length == 0) {
            this.message.error('请选中要删除的BOM')
            return
        }

        const selectRows = lst.filter(o => o.isSelected)

        if (!selectRows || selectRows.length == 0) {
            this.message.error('请选中要删除的BOM')
            return
        }

        const ret = await this.modal.confirm({
            title: '删除',
            content: '确认删除?'
        })

        if (!ret)
            return

        const boms = selectRows.map(o => ({ id: o.id }))

        await fetch.post('/v1/bom/del', {
            boms
        })

        this.message.success('删除成功')
        this.reload()
    }

    tabActive = () => {
        this.reload()
    }

}