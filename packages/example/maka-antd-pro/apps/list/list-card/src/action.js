import { actionMixin, createAppElement } from 'maka'

@actionMixin('base', 'moment', 'modal')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    styles = (suffix) => `list-card-${suffix}`

    getDataSource = () => {
        return [{}, ... this.base.gs('data.list')]
    }
}