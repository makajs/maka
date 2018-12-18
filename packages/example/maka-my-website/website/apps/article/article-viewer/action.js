
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

    goList = () => {
        this.component.props.setPortalContent &&
            this.component.props.setPortalContent('文章', 'article-list')
    }
}