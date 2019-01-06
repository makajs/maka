
import { actionMixin, createAppElement } from 'maka'

@actionMixin('base', 'lodash', 'moment', 'tableHelper', 'treeHelper', 'modal', 'message', 'webapi')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
        this.searchReload = this.lodash.debounce(this.searchReload, 200)
    }

    onInit = () => {
        const pagination = this.base.gs('data.pagination')
        this.load('all', pagination)
    }

    load = async (type, pagination, filter = { search: '' }) => {
        var tree, list, customers
        switch (type) {
            case 'all':
                tree = (await this.webapi.customer.group.queryAll({})) || []
                tree = this.treeHelper.build(tree)
                customers = await this.webapi.customer.query({ pagination, filter })
                list = customers.list || []
                pagination = customers.pagination
                break
            case 'list':
                customers = await this.webapi.customer.query({ pagination, filter })
                list = customers.list || []
                pagination = customers.pagination
                break
            case 'tree':
                tree = (await this.webapi.customer.group.queryAll( {})) || []
                tree = this.treeHelper.build(tree)
                break
        }

        filter.search = this.base.gs('data.filter.search')
        var json = {}
        if (tree) {
            json = {
                ...json,
                'data.tree': tree
            }
        }

        if (list) {
            json = {
                ...json,
                'data.pagination': pagination,
                'data.filter': filter,
                'data.list': list
            }
        }

        this.base.ss(json)
    }

    treeReload = () => {
        this.load('tree')
    }

    treeSelect = (selectedKeys, info) => {
        const pagination = { current: 1, total: 0, pageSize: 20 },
            filter = { customerGroupId: selectedKeys[0] }
        this.load('list', pagination, filter)
    }

    treeAdd = async () => {
        const data = this.base.gs()
        const customerGroupId = data.filter.customerGroupId,
            tree = data.tree,
            customerGroup = (tree && this.treeHelper.findById(tree, customerGroupId))

        const ret = await this.modal.show({
            title: '新增',
            children: createAppElement('set-customer-group', {
                parent: customerGroup
            }),
            bodyStyle: {
                height: 200
            },
            width: 400
        })

        if (ret) {
            this.load('tree')
        }
    }

    treeModify = async () => {
        const data = this.base.gs()
        const customerGroupId = data.filter.customerGroupId

        if (!customerGroupId) {
            this.message.error('请选中一个客户组')
            return
        }

        const ret = await this.modal.show({
            title: '修改',
            children: createAppElement('set-customer-group', {
                customerGroupId
            }),
            bodyStyle: {
                height: 200
            },
            width: 400
        })
        if (ret) {
            this.load('tree')
        }
    }

    treeDel = async () => {
        const data = this.base.gs()
        const customerGroupId = data.filter.customerGroupId
        if (!customerGroupId) {
            this.message.error('请选中一个客户组')
            return
        }

        const ret = await this.modal.confirm({
            title: '删除',
            content: '确认删除?'
        })

        if (ret) {
            await this.webapi.customer.group.del( {id: customerGroupId})
            this.message.success('删除客户组成功')
            this.load('tree')
        }
    }

    reload = async () => {
        const pagination = this.base.gs('data.pagination'),
            filter = this.base.gs('data.filter')
        this.load('list', pagination, filter)
    }


    pageChanged = (current, pageSize) => {
        const filter = this.base.gs('data.filter')
        this.load('list', { current, pageSize }, filter)
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
        this.load('list', pagination, filter)
    }

    add = async () => {
        var ret = await this.modal.show({
            title: '新增客户',
            children: createAppElement('set-customer', {}),
            width: 500,
            bodyStyle: {
                height: 200
            }
        })

        if (ret) {
            this.reload()
        }
    }

    modify = row => async () => {
        var ret = await this.modal.show({
            title: '修改客户',
            children: createAppElement('set-customer', { customerId: row.id }),
            width: 500,
            bodyStyle: {
                height: 200
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

        await this.webapi.customer.del( {
            customers: [{ id }]
        })

        this.message.success('删除客户成功')
        this.reload()
    }

    batchDel = async () => {
        const lst = this.base.gs('data.list')

        if (!lst || lst.length == 0) {
            this.message.error('请选中要删除的客户')
            return
        }

        const selectRows = lst.filter(o => o.isSelected)

        if (!selectRows || selectRows.length == 0) {
            this.message.error('请选中要删除的客户')
            return
        }

        const ret = await this.modal.confirm({
            title: '删除',
            content: '确认删除?'
        })

        if (!ret)
            return

        const customers = selectRows.map(o => ({ id: o.id }))

        await this.webapi.customer.del( {
            customers
        })

        this.message.success('删除成功')
        this.reload()
    }

}