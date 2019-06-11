
import { actionMixin, fetch, getAction, navigate } from 'maka'

console.log(getAction('numberHelper'))

@actionMixin('base', 'toast', 'numberHelper')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    onInit = () => {
        this.load()
    }

    load = async () => {
        var resp = await fetch.post('/v1/home',{})
        this.base.ss({
            'data.incomeAndPays': resp.incomeAndPays,
            'data.todoCount': resp.todoCount,
            'data.toAuditCount': resp.toAuditCount
        })
    }

    openList =  (item) => async () => {
        var openPage = this.base.context.get('openPage')
        if(!openPage) return

        const ret = await openPage('收支明细', 'home-ip-list', {searchType: item.type})
    }

    openTodoList = () => {
        this.toast.info('未实现')
    }

    openToAuditList = () => {
        this.toast.info('未实现')
    }


}
