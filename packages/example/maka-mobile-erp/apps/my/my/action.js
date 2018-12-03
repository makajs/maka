
import { actionMixin, fetch, getAction, navigate } from 'maka'

console.log(getAction('numberHelper'))

@actionMixin('base', 'toast', 'numberHelper')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    signOut = () => {
        fetch.clearAccessToken()
        navigate.redirect('/sign-in')
    }
}
