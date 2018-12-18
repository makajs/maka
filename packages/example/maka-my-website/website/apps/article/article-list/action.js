
import { actionMixin, fetch, createAppElement } from 'maka'

@actionMixin('base', 'lodash', 'moment', 'modal', 'message', 'webapi')
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
        const resp = await this.webapi.article.query({
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

    add = () => {
        this.component.props.setPortalContent &&
            this.component.props.setPortalContent('写文章', 'article-editor')
    }

    edit = (id) => () => {
        this.component.props.setPortalContent &&
            this.component.props.setPortalContent('编辑文章', 'article-editor?id=' + id)
    }

    view = (id) => () => {
        this.component.props.setPortalContent &&
            this.component.props.setPortalContent('浏览文章', 'article-viewer?id=' + id)
    }

    del = (id) => async () => {
        const ret = await this.modal.confirm( {
            title: '删除',
            content: '确认删除?'
        })

        if (!ret) {
            return
        }

        await this.webapi.article.del({ id })
        this.message.success('删除成功')

        this.reload()
    }

    pageChanged = (current, pageSize) => {
        this.load({ current, pageSize })
    }

    tabActive = () => {
        this.reload()
    }
}