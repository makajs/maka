import { asyncGetAction } from 'maka'

const zh_CN = {
    'webapi.sign-in.invalid-credentials':'无效的用户名或者密码（缺省 用户:13334445556,密码:1）'
}

const en_US = {
    'webapi.sign-in.invalid-credentials':'Incorrect username or password（default user:13334445556,password:1）'
}

asyncGetAction('i18n').then(i18n => {
    i18n.register({
        'zh-CN': zh_CN,
        'en-US': en_US
    })
})

