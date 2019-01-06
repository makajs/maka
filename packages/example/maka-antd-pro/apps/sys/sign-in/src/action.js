
import { actionMixin, fetch, navigate } from 'maka'
import md5 from 'md5'

@actionMixin('base', 'message', 'image', 'i18n', 'webapi')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    onInit = () => {
        var form = {
            password: localStorage['login.password'] && Array(parseInt(localStorage['login.passwordLength']) + 1).join('*'),
            user: localStorage['login.user'],
            remember: localStorage['login.remember']
        }
        this.base.setState({ 'data.form': form })
    }

    login = async () => {
        const form = this.base.getState('data.form')

        if (!this.checkUser(form.user)) return
        if (!this.checkPassword(form.password)) return
        var pwd = form.password
        pwd = (localStorage['login.password'] && pwd == Array(parseInt(localStorage['login.passwordLength']) + 1).join('*'))
            ? localStorage['login.password']
            : md5(pwd)

        const response = await this.webapi.signIn({ account: form.user, password: pwd })
        
        this.base.context.set('currentUser', response)

        localStorage['login.user'] = form.remember ? form.user : ''
        localStorage['login.password'] = form.remember ? pwd : ''
        localStorage['login.passwordLength'] = form.remember ? form.password.length : ''
        localStorage['login.remember'] = form.remember ? true : ''

        navigate.redirect('/portal')
    }

    fieldChange = async (fieldPath, value) => {
        this.base.setState({ [fieldPath]: value })
        if (fieldPath == 'data.form.user') {
            this.checkUser(value)
        }
        if (fieldPath == 'data.form.password') {
            this.checkPassword(value)
        }
    }

    checkUser = (user) => {
        var message = (!user && 'sign-in.validation.user.required') || (!/^1[3|4|5|8][0-9]\d{8}$/.test(user) && 'sign-in.validation.user.wrong-format')
        this.base.setState({
            'data.other.error.user': message
        })

        return !message
    }

    checkPassword = (password) => {
        var message = !password && 'sign-in.validation.password.required'
        this.base.setState({
            'data.other.error.password': message
        })
        return !message
    }

    

    keyup = (e) => {
        if (e.type === 'keyup' && (e.key === 'Enter' || e.keyCode == 13) && e.target.tagName != 'BUTTON') {
            this.login()
        }
    }

    componentDidMount = () => {
        const win = window
        if (win.addEventListener) {
            win.addEventListener('keyup', this.keyup, false)
        } else if (win.attachEvent) {
            win.attachEvent('onkeyup', this.keyup)
        } else {
            win.onKeyUp = this.keyup
        }
    }

    componentWillUnmount = () => {
        const win = window
        if (win.removeEventListener) {
            win.removeEventListener('keyup', this.keyup, false)
        } else if (win.detachEvent) {
            win.detachEvent('onkeyup', this.keyup)
        } else {
            win.onKeyUp = undefined
        }
    }

    redirect = navigate.redirect

    changeLocale = (locale) => {
        this.i18n.change(locale, this)
    }
}
