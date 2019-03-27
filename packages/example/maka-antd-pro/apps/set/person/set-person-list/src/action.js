
import { actionMixin, createAppElement } from 'maka'

@actionMixin('base', 'lodash', 'moment', 'tableHelper', 'modal', 'drawer', 'message', 'webapi')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
        this.searchReload = this.lodash.debounce(this.searchReload, 200)
    }

    onInit = () => {
        const pagination = this.base.gs('data.pagination')
        this.load(pagination)
    }

    load = async (pagination, filter = { search: '' }) => {
        const resp = await this.webapi.person.query( {
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
        var ret = await this.modal.show( {
            title: '新增人员',
            children: createAppElement('set-person', {}),
            width: 500,
            bodyStyle:{
                height: 300
            }
        })

        if (ret) {
            this.reload()
        }
    }

    modify = row => async () => {
        var ret = await this.drawer.show( {
            title: '修改人员',
            children: createAppElement('set-person', {personId: row.id}),
            width: 500,
            bodyStyle:{
                height: 300
            }
        })

        if (ret) {
            this.reload()
        }
    }

    del = row => async () => {
        var ret = await this.modal.confirm({
            title: '删除',
            content: '确认删除?'
        })

        if (!ret)
            return

        const { id } = row

        await this.webapi.person.del( {
            persons: [{ id }]
        })

        this.message.success('删除人员成功')
        this.reload()
    }

    batchDel = async () => {
        const lst = this.base.gs('data.list')

        if (!lst || lst.length == 0) {
            this.message.error('请选中要删除的人员')
            return
        }

        const selectRows = lst.filter(o => o.isSelected)

        if (!selectRows || selectRows.length == 0) {
            this.message.error('请选中要删除的人员')
            return
        }

        const ret = await this.modal.confirm({
            title: '删除',
            content: '确认删除?'
        })

        if (!ret)
            return

        const persons = selectRows.map(o => ({ id: o.id }))

        await this.webapi.person.del( {
            persons
        })

        this.message.success('删除成功')
        this.reload()
    }

}