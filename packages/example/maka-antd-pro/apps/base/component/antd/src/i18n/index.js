import { asyncGetAction } from 'maka'

import zh_CN from './zh-CN'
import en_US from './en-US'


asyncGetAction('i18n').then(i18n => {
    i18n.register({
        'zh-CN': zh_CN,
        'en-US': en_US
    })
})

