
import { actionMixin, fetch } from 'maka'

@actionMixin('base', 'toast', 'numberHelper')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    onInit = () => {
        this.load()
    }

    load = async () => {
        var resp = await fetch.post('/v1/rpt', {})
        this.base.ss({
            'data.top5Incomes': resp.top5Incomes,
            'data.top5Pays': resp.top5Pays
        })
    }

    getColors = () => {
        return ['#34A8FF', '#50E8FA', '#FFD37C', ' #F99C89', '#1E85D0', '#967BD1']
    }

}
