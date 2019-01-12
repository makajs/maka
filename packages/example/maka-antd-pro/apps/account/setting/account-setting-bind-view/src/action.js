
import { actionMixin} from 'maka'

@actionMixin('base', 'i18n')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    styles = suffix => `account-setting-bind-view-${suffix}`
}
