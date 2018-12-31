import { asyncGetAction } from 'maka'

const zh_CN = {
    'sign-in': '登录',
    'sign-in.user': '用户',
    'sign-in.password': '密码',
    'sign-in.signup': '注册',
    'sign-in.forgot-password': '忘记密码',
    'sign-in.remember-me': '记住我',
    'sign-in.validation.user.wrong-format':'请录入手机格式的用户名',
    'sign-in.validation.user.required': '请录入用户名',
    'sign-in.validation.password.required': '请录入密码',
}

const en_US = {
    'sign-in': 'sign in',
    'sign-in.user': 'User',
    'sign-in.password': 'Password',
    'sign-in.signup': 'Sign up',
    'sign-in.forgot-password': 'Forgot password',
    'sign-in.remember-me': 'Remember me',
    'sign-in.validation.user.wrong-format':'This is an invalid mobile number',
    'sign-in.validation.user.required': 'Please input your mobile',
    'sign-in.validation.password.required': 'Please input your password',
}

asyncGetAction('i18n').then(i18n => {
    i18n.register({
        'zh-CN': zh_CN,
        'en-US': en_US
    })
})

