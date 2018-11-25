import { actionMixin, fetch } from 'maka'

@actionMixin('base', 'numberHelper')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    onInit = async () => {
        var resp = await fetch.post('/v1/dashboard/market', {})
        this.base.ss({
            'data': resp,
        })
    }
}
