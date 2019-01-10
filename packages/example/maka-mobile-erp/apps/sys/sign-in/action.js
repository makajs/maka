
import { actionMixin, fetch, getComponent, navigate } from 'maka'
import md5 from 'md5'


@actionMixin('base', 'toast')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    onInit = () => {

        var form = {
            password: localStorage['login.password'] && Array(parseInt(localStorage['login.passwordLength']) + 1).join('*'),
            mobile: localStorage['login.mobile'],
        }
        this.base.ss({ 'data.form': form })

    }

    login = async () => {
        const form = this.base.gs('data.form')

        const msg = this.check(form)

        if (msg.length > 0) {
            this.toast.fail(msg[0], 1)
            return
        }

        var pwd = form.password
        pwd = (localStorage['login.password'] && pwd == Array(parseInt(localStorage['login.passwordLength']) + 1).join('*'))
            ? localStorage['login.password']
            : md5(pwd)

        const response = await fetch.post('/v1/user/login', { mobile: form.mobile, password: pwd })

        this.base.context.set('currentUser', response)

        localStorage['login.mobile'] = form.mobile
        localStorage['login.password'] = pwd
        localStorage['login.passwordLength'] = form.password.length

        navigate.redirect('/portal')

    }

    check = (form) => {
        var msg = []
        !form.mobile && msg.push('请录入手机号!');
        !form.password && msg.push('请录入密码!');
        return msg
    }

    goRegister = ()=> {
        this.toast.info('未实现')
    }

    goForgetPassword = () => {
        this.toast.info('未实现')
    }


}
