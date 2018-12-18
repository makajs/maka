
import { actionMixin, fetch, createAppElement } from 'maka'

@actionMixin('base', 'message', 'webapi')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }


    onInit = async () => {
        if (this.component.props.appParams.id) {
            const resp = await this.webapi.article.findById({ id: this.component.props.appParams.id })
            if (resp) {
                this.base.ss({
                    'data.id': this.component.props.appParams.id,
                    'data.title': resp.title,
                    'data.content': resp.content,
                })
            }
        }
    }

    saveClick = async () => {
        const data = this.base.gs('data')
        const { id, title, content } = data

        if (!title || !content) {
            this.message.error('请录入标题和内容')
            return
        }

        var resp
        if (id) {
            resp = await this.webapi.article.update({
                id,
                title,
                content
            })
            this.message.success('修改成功')

        }
        else {
            resp = await this.webapi.article.create({
                title,
                content
            })
            this.message.success('新增成功')
        }

        this.base.ss({
            'data.id': resp.id,
            'data.title': resp.title,
            'data.content': resp.content
        })
    }

    goList = () => {
        this.component.props.setPortalContent &&
            this.component.props.setPortalContent('文章', 'article-list')
    }
}