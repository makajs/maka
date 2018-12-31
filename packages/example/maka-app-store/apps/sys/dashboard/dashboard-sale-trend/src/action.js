import { actionMixin } from 'maka'

@actionMixin('base', 'numberHelper', 'webapi')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    onInit = async () => {
        var resp = await this.webapi.dashboard.saleTrend({})
       
        this.base.ss({
            'data': resp,
        })
    }
}
